const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/',
    require('./routes/quiz'),
    require('./routes/categories'),
    require('./routes/options'),
    require('./routes/question')
)

app.listen(3000)