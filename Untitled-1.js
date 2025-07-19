// server/routes/payment.js
const express = require('express');
const router = express.Router();
const stripe = require('stripe')('YOUR_SECRET_KEY');

router.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [{
            price_data: {
                currency: 'usd',
                product_data: {
                    name: 'BuyzyCart Item',
                },
                unit_amount: 5000,
            },
            quantity: 1,
        }],
        mode: 'payment',
        success_url: 'http://localhost:3000/success.html',
        cancel_url: 'http://localhost:3000/cancel.html',
    });

    res.json({ id: session.id });
});

module.exports = router;
// server/server.js
const express = require('express');
const app = express();
const cors = require('cors');
const paymentRoutes = require('./routes/payment');
app.use(cors());
app.use(express.json());
app.use('/api', paymentRoutes);
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
