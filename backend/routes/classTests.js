const express = require('express');
const { getConnection } = require('../db');

const router = express.Router();

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { marksObtained } = req.body;
    let connection;

    try {
        connection = await getConnection();
        const rowsAffected = await updateTestMarks(connection, id, marksObtained);

        if (rowsAffected) {
            res.json({ message: 'Marks updated' });
        } else {
            res.status(404).json({ message: 'Class test not found' });
        }
    } catch (err) {
        handleError(res, err);
    } finally {
        if (connection) await connection.close();
    }
});

module.exports = router;

// Helper Functions
async function updateTestMarks(connection, id, marksObtained) {
    const result = await connection.execute(
        `UPDATE CLASS_TESTS SET marks_obtained = :marksObtained WHERE ct_id = :id`,
        { marksObtained, id },
        { autoCommit: true }
    );
    return result.rowsAffected;
}

function handleError(res, err) {
    console.error(err);
    res.status(500).json({ error: err.message });
}
