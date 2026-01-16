const oracledb = require('oracledb');
const express = require('express');
const { getConnection } = require('../db');

const router = express.Router();

router.get('/:studentId', async (req, res) => {
    const { studentId } = req.params;
    let connection;

    try {
        connection = await getConnection();
        const courses = await fetchCoursesWithTests(connection, studentId);
        res.json(courses);
    } catch (err) {
        handleError(res, err);
    } finally {
        if (connection) await connection.close();
    }
});

router.post('/', async (req, res) => {
    const { studentId, courseCode, courseName, credits, targetMarks } = req.body;
    let connection;

    try {
        connection = await getConnection();
        const courseId = await createCourse(connection, { studentId, courseCode, courseName, credits, targetMarks });
        res.status(201).json({ message: 'Course created', courseId });
    } catch (err) {
        handleError(res, err);
    } finally {
        if (connection) await connection.close();
    }
});

module.exports = router;

// Helper Functions
async function fetchCoursesWithTests(connection, studentId) {
    const coursesResult = await connection.execute(
        `SELECT * FROM COURSES WHERE student_id = :studentId ORDER BY created_at ASC`,
        { studentId }
    );

    const courses = coursesResult.rows;
    for (let course of courses) {
        course.class_tests = await fetchTestsForCourse(connection, course.COURSE_ID);
    }

    return courses;
}

async function fetchTestsForCourse(connection, courseId) {
    const result = await connection.execute(
        `SELECT * FROM CLASS_TESTS WHERE course_id = :courseId ORDER BY test_number ASC`,
        { courseId }
    );
    return result.rows;
}

async function createCourse(connection, { studentId, courseCode, courseName, credits, targetMarks }) {
    const result = await connection.execute(
        `INSERT INTO COURSES (student_id, course_code, course_name, credits, target_total_marks)
     VALUES (:studentId, :courseCode, :courseName, :credits, :targetMarks)
     RETURNING course_id INTO :id`,
        {
            studentId, courseCode, courseName, credits,
            targetMarks: targetMarks || 50,
            id: { type: oracledb.NUMBER, dir: oracledb.BIND_OUT }
        },
        { autoCommit: true }
    );
    return result.outBinds.id[0];
}

function handleError(res, err) {
    console.error(err);
    res.status(500).json({ error: err.message });
}
