'use strict';
var express = require('express');
const fs = require('fs');
var http = require('http');
var path = require('path');

var app = express();
app.set('port', 3000);

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server listening on port ' + app.get('port'));
});


app.get("/get_images", function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    fs.readFile('/var/www/html/app/image.png', 'base64', function(err, data){
        if (err) throw err;
        res.writeHead(200, {'Content-type': 'image/png'});
        res.end(data, 'binary');
    });
} );
