const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', require('./routes/quiz'))

app.listen(3000)