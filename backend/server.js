const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const adminRoute = require('./routes/admin');
const brokerRoute = require('./routes/broker');
const authRoute = require('./routes/auth');



const app = express();

app.use(cors());
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

// Mount routers
app.use('/admin', adminRoute);
app.use('/broker', brokerRoute);
app.use('/', authRoute);



const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
