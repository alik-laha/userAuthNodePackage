import mysql from 'mysql2';


const dbConfig = mysql.createConnection({
    connectionLimit: 10,
    waitForConnections: true,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    timezone: 'UTC+5.30'
});

dbConfig.connect((err) => {
    if (err) {
        console.log("Error in connection", err)
    } else {
        console.log("Database connected")
    }
})

export default dbConfig;
