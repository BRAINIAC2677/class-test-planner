require('dotenv').config();
const cors = require('cors');
const express = require('express');

const classTestRoutes = require('./routes/classTests');
const courseRoutes = require('./routes/courses');
const studentRoutes = require('./routes/students');

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());
app.use(logRequest);

app.get('/', (req, res) => res.send('Class Test Planner API is running'));
app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoutes);
app.use('/api/class-tests', classTestRoutes);

function logRequest(req, _res, next) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next();
}

const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
