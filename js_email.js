var nodemailer = require('nodemailer')

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jason.r.sadler@gmail.com',
        pass: 'Davetab_97148831'
    }
});

var mailOptions = {
    from: 'jason.r.sadler@gmail.com',
    to: 'jason.r.sadler@gmail.com, jason.r.sadler@gmail.com',
    subject: 'Sending Email using Node.js',
    html: '<h1>Welcome</h1><p>That was easy!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error)
    {
        console.log(error);
    }
    else {
        console.log('Email sent: ' + info.response);
    }
});