import { API_BASE } from './constants';

export const fetchCoursesFromAPI = async (studentId) => {
    const res = await fetch(`${API_BASE}/courses/${studentId}`);
    return res.json();
};

export const addCourseToAPI = async (studentId, courseData) => {
    const res = await fetch(`${API_BASE}/courses`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentId, ...courseData })
    });
    return res.ok;
};

export const updateTestMarksInAPI = async (testId, marks) => {
    await fetch(`${API_BASE}/class-tests/${testId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ marksObtained: parseFloat(marks) })
    });
};
