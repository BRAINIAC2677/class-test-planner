export const COURSE_COLORS = [
    { bg: 'rgba(245, 158, 11, 0.3)', border: '#f59e0b', text: '#d97706' },
    { bg: 'rgba(16, 185, 129, 0.3)', border: '#10b981', text: '#059669' },
    { bg: 'rgba(239, 68, 68, 0.3)', border: '#ef4444', text: '#dc2626' },
    { bg: 'rgba(168, 85, 247, 0.3)', border: '#a855f7', text: '#9333ea' },
    { bg: 'rgba(236, 72, 153, 0.3)', border: '#ec4899', text: '#db2777' },
    { bg: 'rgba(14, 165, 233, 0.3)', border: '#0ea5e9', text: '#0284c7' },
    { bg: 'rgba(234, 179, 8, 0.3)', border: '#eab308', text: '#ca8a04' },
];

export const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';
export const DEMO_USER = { STUDENT_ID: 1, NAME: 'Demo Student', EMAIL: 'demo@example.com' };
export const INITIAL_COURSE_FORM = { courseCode: '', courseName: '', credits: 3, targetMarks: 50 };
