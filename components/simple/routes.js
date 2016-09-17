(function(){
	module.exports = {
		helloWorld: function(req, res, next){
			var body = "Hello World. I'm Chris";
			res.setHeader("Content-Type", "text/plain");
			res.setHeader("Content-Length", body.length);
			res.end(body);
		}
	};
}());