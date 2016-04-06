Parse.Cloud.define('hello', function(req, res) {
  res.success('Hello app2!');
});

Parse.Cloud.define('sendMail', function(req, res) {

	var Mailgun = require('mailgun-js');

	var api_key = 'key-8c7255cf60cf0684002ef11199998726';

	var domain = 'sandbox590344212e2d428f9d7cbcd0c22cda0c.mailgun.org';

	var from_who = 'Mailgun Sandbox <postmaster@sandbox590344212e2d428f9d7cbcd0c22cda0c.mailgun.org>';

	//We pass the api_key and domain to the wrapper, or it won't be able to identify + send emails
    var mailgun = new Mailgun({apiKey: api_key, domain: domain});
    var sendTo = "raduadrian.stan@gmail.com";
    var data = {
    //Specify email data
      from: from_who,
    //The email to contact
      to: sendTo,
    //Subject and text data  
      subject: 'Hello from Mailgun',
      html: 'Hello, This is not a plain-text email, I wanted to test some spicy Mailgun sauce in NodeJS! <a href="http://0.0.0.0:3030/validate?' + sendTo + '">Click here to add your email address to a mailing list</a>'
    }

    //Invokes the method to send emails given the above data with the helper library
    mailgun.messages().send(data, function (err, body) {
        //If there is an error, render the error page
        if (err) {
            res.success("got an error: ");
        }
        //Else we can greet    and leave
        else {
            //Here "submitted.jade" is the view file for this landing page 
            //We pass the variable "email" from the url parameter in an object rendered by Jade
            res.success('email sent!');
        }
    });

});
