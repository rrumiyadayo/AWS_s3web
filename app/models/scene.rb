class Scene < ApplicationRecord
  belongs_to :emotion
  belongs_to :character
end
