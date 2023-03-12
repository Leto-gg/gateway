const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;
const WEB3_STORAGE_API_KEY = 'YOUR_WEB3_STORAGE_API_KEY';

app.use(express.json());

app.post('/', async (req, res) => {
    try {
        const response = await fetch('https://api.web3.storage/ipfs/add', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${WEB3_STORAGE_API_KEY}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body),
        });
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
