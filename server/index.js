const express = require('express');
const app = express();
app.use(express.json());

const signUp = require('../routs/login');
app.use('/signUp', signUp);

app.listen(6000, () =>{
    console.log('Now server is active...');
});
