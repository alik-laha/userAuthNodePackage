import mysql from 'mysql2/promise';


const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Create a function to execute SQL queries
async function executeQuery(sql: string, params = []) {
    const connection = await pool.getConnection();
    try {
        const [rows] = await connection.query(sql, params);
        return rows;
    } catch (error) {
        console.error('Error executing query:', error);
        throw error;
    } finally {
        connection.release();
    }
}

export default executeQuery;
