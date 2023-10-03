const express = require('express');
const userRoutes = require('./routes/user.routes');

const app = express();
app.use(express.json());

app.use(userRoutes);

app.listen(5000, () => {
    console.log('App running fine');
})

