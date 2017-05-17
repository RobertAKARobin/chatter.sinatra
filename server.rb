require "sinatra"
require "sinatra/reloader"
require "json"

get "/" do
	[
		"Alligators all around",
		"Bursting balloons",
		"Catching colds",
	].to_json
end
