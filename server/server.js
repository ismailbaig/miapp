var express = require('express');
var app = express();
var fs = require("fs");
var nodemailer = require('nodemailer');
var cors = require('cors')

// ***************Prototype API **************************
// Feature : Enabled CORS. Currently done for all CORS with *, but 
//           we can also make it for a specific URL only to access
// Author: Ismail Baig
// Type : REST API
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(cors())

/* Email configuration - Start  */
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'juveria.naaz.15@gmail.com',
    pass: 'pinkybrown'
  }
});

var mailOptions = {
  from: 'juveria.naaz.15@gmail.com',
  to: 'ismailece2007@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Sent email via Node.js'
};

/* Email configuration - End */

/* Send email - Start */
app.get('/sendOrderemail', function (req, res) {
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.send(info.response)
    }
  });
})
/* Send Email - End */

app.get('/listUsers', function (req, res) {
   fs.readFile( "./" + "users.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
});

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})