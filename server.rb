require "sinatra"
require "sinatra/reloader"
require "json"

get "/" do
	response["Access-Control-Allow-Origin"] = "*"
	content_type :json
	[
		"Alligators all around",
		"Bursting balloons",
		"Catching colds",
	].to_json
end
