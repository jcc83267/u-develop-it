const express = require('express');
const db = require('./db/database');
const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//

// Use Routes for API Routes and html Routes
app.use('/api', apiRoutes);
//

// Default response for any other request(Not Found) Catch all
app.use((req, res) => {
    res.status(404).end();
});
//

//start server after DB connection
db.on('open', () => {
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
//