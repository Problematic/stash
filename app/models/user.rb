class User < ActiveRecord::Base
  has_secure_password(validations: false)

  validates_uniqueness_of :email

  def to_builder
    Jbuilder.new do |user|
      user.(self, :id, :email)
    end
  end
end
