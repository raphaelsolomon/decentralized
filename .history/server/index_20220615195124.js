const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.post('/submit', (req, res, next) => {

    return res.json({success : "Updated Successfully", status : 200});
});


app.listen(PORT, () => console.log(`server listening to port ${PORT}`));