const express = require('express');

const app = express();

// Routes
const homeRoutes = require('./routes/homeRoutes');

// View
app.set('view engine', 'ejs');
app.set('views', 'views');

// App Routes
app.use(homeRoutes);

app.listen(8000);