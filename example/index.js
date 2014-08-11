/**
 * demo fror li-wechat
 */

var express = require('express');
var wechat = require('../lib/wechat.js')('yali');

var app = express();

wechat.on('text', function (session) {
    session.replyTextMessage("@" + session.incomingMessage.Content);
});

app.use('/api', wechat.process());

app.listen(8080);
