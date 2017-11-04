const express = require('express');

const app = express();

app.use(express.static('public'));

const port = process.env.PORT || 3000;

app.get('/api/whoami', (req, res) => {
    const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
    res.end(JSON.stringify({
        ip: ip,
        language: req.headers["accept-language"].split(',')[0],
        os: req.headers['user-agent'].split(') ')[0].split(' (')[1]
    }));
});

app.listen(port, console.log(`Server started on port ${port}`));