const knex = require('knex');

const db = knex({
    client: 'mysql',
    connection: {
        host: 'instlytechnologies.com',
        user: 'u175158886_bcrm',       // Default XAMPP username
        password: 'Shahmail!2024',       // Default XAMPP password (empty string)
        database: 'u175158886_brokercrm', // Your newly created database
        port: 3306
    }
});

// Test the connection and log a message
db.raw('SELECT 1')
    .then(() => {
        console.log('Successfully connected to the database');
    })
    .catch(err => {
        console.error('Failed to connect to the database:', err);
    });

module.exports = db;
