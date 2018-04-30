// import React from 'react';
// import SendSMS from './send_sms.js';
// import express from 'express';
// import path from 'path';
// import Keys from './twiliokeys';
// import bodyParser from 'body-parser';
//
// const app = express();
//
// app.use('/', express.static('app'));
//
// app.post('/sendsms', bodyParser.json(), (req, res) => {
//   const client = require('twilio')(keys.sid, keys.token);
//   client.sendMessage({
//     to: req.body.data,
//     from: '+15127298915',
//     body: 'word to your mother.'
//   }, function (err, responseData) {
//     if (!err) {
//       res.json({"From": responseData.from, "Body": responseData.body});
//     }
//   });
// });
//
// app.listen(process.env.PORT || 3000);
