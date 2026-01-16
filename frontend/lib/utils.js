import { COURSE_COLORS } from './constants';

export const getBubbleSize = (marks) => (marks === null ? 70 : 60 + (marks / 20) * 60);

export const calculateBubblePosition = (marks, idx, totalBubbles) => {
    const spacing = 100 / (totalBubbles + 1);
    const x = spacing * (idx + 1);
    const yPercent = 85 - ((marks ?? 10) / 20) * 70;
    return { x: `${x}%`, y: `${yPercent}%` };
};

export const getCourseColor = (courseIdx) => COURSE_COLORS[courseIdx % COURSE_COLORS.length];

export const createBubble = (test, course, courseIdx) => ({
    ...test,
    courseId: course.COURSE_ID,
    courseName: course.COURSE_NAME,
    courseCode: course.COURSE_CODE,
    courseColor: getCourseColor(courseIdx),
    size: getBubbleSize(test.MARKS_OBTAINED)
});

export const filterBySelectedCourse = (bubbles, selectedCourse) =>
    selectedCourse === 'all' ? bubbles : bubbles.filter(b => b.courseId === parseInt(selectedCourse));
