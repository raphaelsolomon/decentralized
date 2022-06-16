const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded(e))



app.listen(PORT, () => console.log(`server listening to port ${PORT}`));