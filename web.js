// web.js
var express = require("express");
var logfmt = require("logfmt");
var url = require("url");
var bodyParser = require("body-parser");
//var sio = require("socket.io");
//var redis = require("redis");

//var client = redis.createClient();
var app = express();
//var io = sio.listen(app);

//:io.set("store", new sio.RedisStore);

app.use(logfmt.requestLogger());
app.use(bodyParser());//.json({strict: false}));

app.get('/', function(req, res) {
    var geturl = url.parse(req.url);
    console.log(geturl);
    var ipAdd = req.headers['x-forwarded-for'];
    if(ipAdd) {
        var ipAdds = ipAdd.split(',');
        ipAdd = ipAdds[ipAdds.length - 1];
    } else {
        ipAdd = req.connection.remoteAddress;
    }
    console.log(ipAdd);
    var ua = req.headers['user-agent'];
    if(/mobile/i.test(ua)) {
        console.log('mobile detected');
        //req.on('data', function (data) {
        //    console.log(data.toString());
        //});
    } else {
        console.log('desktop detected');
        var my_g; 
        //while(!my_g) {
        //    client.get("g", function(err, g) {
        //        my_g = g;
        //    });
        //}
    }
    res.send('Hello World!');
});

app.post('/', function(req, res) {
    req.on('data', function (data) {
            console.log('received data')
            console.log(data.toString());
    });
    console.log('posted data');
    var ipAdd = req.headers['x-forwarded-for'];
    if(ipAdd) {
        var ipAdds = ipAdd.split(',');
        ipAdd = ipAdds[ipAdds.length - 1];
    } else {
        ipAdd = req.connection.remoteAddress;
    }
    console.log(ipAdd);
    var ua = req.headers['user-agent'];

    console.log(req.headers);
    console.log(req.body);
    if(/mobile/i.test(ua)) {
        console.log('mobile detected');
        console.log(req.body);
        req.on('data', function (data) {
            console.log(data.toString());
        });
    } else {
        console.log('desktop detected');
        var my_g;
        //while(!my_g) {
        //    client.get("g", function(err, g) {
        //        my_g = g;
        //    });
        //}
    }
    res.send('Hello World!');
});

app.all('/', function(req, res) {
    console.log('got something');
    next();
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});
