class Task < ApplicationRecord
  belongs_to :user

  enum :status, { to_do: 0, on_hold: 1, in_progress:2, completed: 3 }, default: 0
end
