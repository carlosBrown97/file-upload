const express = require('express');
const path = require('path')
const app = express();
const routes = require('./routes/index')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(routes)

app.listen(3000, () => {
    console.log('listen on port 3000')
})