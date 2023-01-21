const express = require('express');

const app = express();

// Routes
const homeRoutes = require('./routes/homeRoutes');

// View
app.set('view engine', 'ejs');
app.set('views', 'views');

// App Routes
app.use(homeRoutes);

const PORT = process.env.PORT || 8080;

app.listen(PORT);