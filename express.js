const express = require('express');
const Web3Storage = require('web3.storage');

const app = express();
const client = new Web3Storage({ token: 'YOUR_API_KEY' });

app.get('/ipfs/:cid', async (req, res) => {
  const cid = req.params.cid;
  const { value, remainderPath } = await client.get(cid);
  if (remainderPath === '') {
    res.send(value);
  } else {
    res.status(404).send('Object not found');
  }
});

app.listen(3000, () => {
  console.log('API server listening on port 3000');
});
