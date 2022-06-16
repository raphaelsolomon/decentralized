const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/submit', (req, res, next) => {
    console.log(req.body);
    res.status(200).json()
});


app.listen(PORT, () => console.log(`server listening to port ${PORT}`));