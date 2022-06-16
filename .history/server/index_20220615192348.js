const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.post('/submit', (req, res, next) => )


app.listen(PORT, () => console.log(`server listening to port ${PORT}`));