source 'https://rubygems.org'
ruby '2.2.4'

gem 'dotenv-rails', :groups => [:development, :test]
gem 'rails_12factor'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.5.1'
# Use postgresql as the database for Active Record
gem 'pg', '~> 0.15'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'

# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

gem 'connection_pool'

gem 'hiredis'
gem 'redis', require:  ["redis", "redis/connection/hiredis"]
gem 'redis-namespace'

gem 'sidekiq'
gem 'sinatra', :require => nil

gem 'sprockets'
gem 'sprockets-es6', require: ["sprockets/es6"]

gem 'foundation-rails'
gem 'browserify-rails'

# Use ActiveModel has_secure_password
gem 'bcrypt', '~> 3.1.7'

gem 'puma'

gem 'responders'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'

  gem 'guard'
  gem 'guard-livereload', require: false
  gem 'guard-bundler', require: false

  gem 'rack-livereload'

  gem 'foreman'
end
