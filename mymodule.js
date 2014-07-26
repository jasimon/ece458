module.exports = function(dir, ext, callback) {
var fs = require('fs');
var p = require('path');
var buf = fs.readdir(dir, function(err, data) {
    if(!err) {
        var matches = [];
        for(var i = 0; i < data.length; i++) {
            if(p.extname(data[i]) == '.' + ext) {
                matches.push(data[i]);
            }
        }
        callback(null, matches);
    }
    else
        callback(err);
});
}
