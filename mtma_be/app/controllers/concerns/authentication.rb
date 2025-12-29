module Authentication
  extend ActiveSupport::Concern

  included do
    before_action :require_authentication
  end

  class_methods do
    def allow_unauthenticated_access(**options)
      skip_before_action :require_authentication, **options
    end
  end

  private
    def authenticated?
      resume_session
    end

    def require_authentication
      resume_session || request_authentication
    end

    def resume_session
      # Changed to get Bearer Token instead
      token = request.headers['Authorization']&.split(' ')&.last
      Current.session = Session.find_by(token: token)
    end

    # No redirecting in API, just going to render unauthorized message
    def request_authentication
      render json: { error: 'Unauthorized' }, status: :unauthorized
    end

    def start_new_session_for(user)
      user.sessions.create!(user_agent: request.user_agent, ip_address: request.remote_ip)
      # Get the latest token
      render json: { token: user.sessions.last.token }, status: :created
    end

    def terminate_session
      Current.session.destroy
    end
end
