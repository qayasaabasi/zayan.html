const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample Route
app.get('/', (req, res) => {
    res.send('✅ BuyzyCart backend is running!');
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server started at: http://localhost:${PORT}`);
});
