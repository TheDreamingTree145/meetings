require 'google/apis/calendar_v3'
require 'googleauth'
require 'googleauth/stores/file_token_store'
require 'fileutils'

class GoogleAPI
  OOB_URI = 'urn:ietf:wg:oauth:2.0:oob'.freeze
  APPLICATION_NAME = 'Google Calendar API Ruby Quickstart'.freeze
  CREDENTIALS_PATH = 'credentials.json'.freeze
  TOKEN_PATH = 'token.yaml'.freeze
  SCOPE = Google::Apis::CalendarV3::AUTH_CALENDAR_READONLY

  ##
  # Ensure valid credentials, either by restoring from the saved credentials
  # files or intitiating an OAuth2 authorization. If authorization is required,
  # the user's default browser will be launched to approve the request.
  #
  # @return [Google::Auth::UserRefreshCredentials] OAuth2 credentials
  def authorize
    client_id = Google::Auth::ClientId.from_file(CREDENTIALS_PATH)
    token_store = Google::Auth::Stores::FileTokenStore.new(file: TOKEN_PATH)
    authorizer = Google::Auth::UserAuthorizer.new(client_id, SCOPE, token_store)
    user_id = 'default'
    credentials = authorizer.get_credentials(user_id)
    if credentials.nil?
      url = authorizer.get_authorization_url(base_url: OOB_URI)
      puts 'Open the following URL in the browser and enter the ' \
           "resulting code after authorization:\n" + url
      code = gets
      credentials = authorizer.get_and_store_credentials_from_code(
        user_id: user_id, code: code, base_url: OOB_URI
      )
    end
    credentials
  end

  def meeting_info(student, event)
    description = event.description
    if !description.match(/Project: (.*)/).nil?
      project = Project.find_by(name: description.match(/Project: (.*)/)[1])
    else
      project = Project.find(3)
    end
    meeting = student.meetings.find_or_create_by(
      issue: description.match(/Problem: .+?(?=Github|YCBM)/m).to_s.strip,
      date: event.start.date_time,
      project: project
    )
    meeting
  end
  # Initialize the API
  def api_call
    service = Google::Apis::CalendarV3::CalendarService.new
    service.client_options.application_name = APPLICATION_NAME
    service.authorization = authorize

    # Fetch the next 10 events for the user
    calendar_id = 'flatironschool.com_gub6v1me41dp89l44m44q4nnis@group.calendar.google.com'
    response = service.list_events(calendar_id,
                                   max_results: 100,
                                   single_events: true,
                                   order_by: 'startTime',
                                   time_min: (DateTime.now - 7).rfc3339,
                                   time_max: Time.now.iso8601
                                   )

    response.items.each do |event|
      #binding.pry
      if event.summary != "NO SUPPORT"
        name = "#{event.description.match(/First Name: (.*)/)[1]} #{event.description.match(/Last Name: (.*)/)[1]}"
        student = Student.find_or_create_by(name: name, email: event.description.match(/Email: (.*)/)[1])
        meeting_info(student, event)
      end
    end
    binding.pry
  end
end
