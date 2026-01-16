const express = require('express');
const { getConnection } = require('../db');

const router = express.Router();

// NOTE: This route is not currently used in the app (demo uses hardcoded user)
// Kept as reference for potential future authentication implementation
router.get('/', async (req, res) => {
    let connection;

    try {
        connection = await getConnection();
        const students = await getAllStudents(connection);
        res.json(students);
    } catch (err) {
        handleError(res, err);
    } finally {
        if (connection) await connection.close();
    }
});

module.exports = router;

// Helper Functions
async function getAllStudents(connection) {
    const result = await connection.execute(`SELECT student_id, name, email FROM STUDENTS`);
    return result.rows;
}

function handleError(res, err) {
    console.error(err);
    res.status(500).json({ error: err.message });
}
