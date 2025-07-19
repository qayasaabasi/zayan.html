// server/server.js

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('BuyzyCart backend is running!');
});

app.listen(PORT, () => {
    console.log(`Server is live at http://localhost:${PORT}`);
});
