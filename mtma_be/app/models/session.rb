class Session < ApplicationRecord
  belongs_to :user
  before_create :generate_token

  private
  # Create the token before a session is created
  def generate_token
    self.token = SecureRandom.hex(32)
  end
end
