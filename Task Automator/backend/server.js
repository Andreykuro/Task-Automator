const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const gmailRoutes = require('./routes/gmailRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api', gmailRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});