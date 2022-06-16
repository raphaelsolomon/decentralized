const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.unsubscribe(express.json())



app.listen(PORT, () => console.log(`server listening to port ${PORT}`));