// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  var ipAdd = req.headers['x-forwarded-for'];
  if(ipAdd) {
    var ipAdds = ipAdd.split(',');
    ipAdd = ipAdds[ipAdds.length - 1];
} else {
    ipAdd = req.connection.remoteAddress;
}
  console.log(ipAdd);
  res.send('Hello World!');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});
