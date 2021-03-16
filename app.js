// Imports
const nodemailer = require('nodemailer');

// Create test account
// let testAccount = nodemailer.createTestAccount();

// Create sender/transporter
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'testernodemailertesteremail@gmail.com',
        pass: ''
    },
    tls: {
        rejectUnauthorized: false
    }
});

// Mail info
let mailInfo = {
    from: 'testernodemailertesteremail@gmail.com',
    to: 'sevrep@yahoo.com',
    subject: 'Gumana ba?',
    html: '<p>test html</p>',
    text: 'Gumana ang nodemailer'
}

// Send email
transporter.sendMail(mailInfo, (error, info) => {
    if(error) {
        console.log('Error', error);
    } else {
        console.log('Info', info);
    }
});