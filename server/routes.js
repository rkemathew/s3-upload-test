const Upload = require('./upload/upload.server.controller');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

module.exports = function(app){
	// API Server Endpoints
	app.get('/', Upload.displayForm);
	app.post('/upload', multipartMiddleware, Upload.upload);
	app.post('/send', function(req, res){
	  // send mail with defined transport object 
	  console.log("send")
	})
}

