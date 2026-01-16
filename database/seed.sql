-- seed.sql
-- Initial dummy data

-- Insert a Student
INSERT INTO STUDENTS (name, email, password) 
VALUES ('Steve Jobs', 'jobs@buet.ac.bd', 'apple');

INSERT INTO COURSES (student_id, course_code, course_name, credits, target_total_marks)
VALUES (1, 'CSE-216', 'Database', 3, 55);


-- Simulate that the student has taken the first 2 tests
UPDATE CLASS_TESTS 
SET marks_obtained = 18 
WHERE course_id = 1 AND test_number = 1;

UPDATE CLASS_TESTS 
SET marks_obtained = 15 
WHERE course_id = 1 AND test_number = 2;

-- Tests 3 and 4 remain with marks_obtained = NULL (Upcoming)

COMMIT;
