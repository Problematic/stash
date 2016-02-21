$redis = ConnectionPool.new(:size => ENV.fetch('REDIS_POOL') { "20" }) {
  Redis::Namespace.new(:stash, :redis => Redis.new(:url => ENV['REDIS_URL'], :driver => :hiredis))
}
