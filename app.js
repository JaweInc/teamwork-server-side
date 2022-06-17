const express = require('express');
const app = new express();

// middleware
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        status: 'Success',
        message: 'Hello, welcome to my teamwork-server-side'
    });
})

app.listen(5000, () => {
    console.log('Listening at port 5000...')
})