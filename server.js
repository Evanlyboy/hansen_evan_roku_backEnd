const express = require('express');
const server = express();
const port = process.env.port || 5000;

// User Management System Route. For managing user data and such
server.use('/ums', require('./routes/api'));

server.listen(port, ()=> {
    console.log(`server is running on ${port}`);
})