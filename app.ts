const express = require('express');
import apiVersion from './router/ApiVersion'
const app = new express();

app.use('/api/v1', apiVersion);

app.listen(5000, () => {
    console.log('Listening at port 5000...')
})