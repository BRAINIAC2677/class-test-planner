'use client';
import { useState, useEffect } from 'react';

import { DEMO_USER, INITIAL_COURSE_FORM } from '@/lib/constants';
import { fetchCoursesFromAPI, addCourseToAPI, updateTestMarksInAPI } from '@/lib/api';
import { createBubble, filterBySelectedCourse, calculateBubblePosition } from '@/lib/utils';

import { BrandName, Copyright, AddCourseButton, LoadingState, EmptyState } from '@/components/UIComponents';
import { CourseFilter } from '@/components/CourseFilter';
import { Timeline } from '@/components/Timeline';
import { AddCourseModal } from '@/components/AddCourseModal';
import { EditMarksModal } from '@/components/EditMarksModal';

export default function Home() {
  const [user] = useState(DEMO_USER);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingTest, setEditingTest] = useState(null);
  const [editMarks, setEditMarks] = useState('');
  const [newCourse, setNewCourse] = useState(INITIAL_COURSE_FORM);

  const fetchCourses = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const data = await fetchCoursesFromAPI(user.STUDENT_ID);
      setCourses(data);
    } catch (err) {
      console.error('Failed to fetch courses:', err);
    }
    setLoading(false);
  };

  useEffect(() => { fetchCourses(); }, []);

  const handleAddCourse = async (e) => {
    e.preventDefault();
    try {
      const success = await addCourseToAPI(user.STUDENT_ID, newCourse);
      if (success) {
        setNewCourse(INITIAL_COURSE_FORM);
        setShowAddModal(false);
        fetchCourses();
      }
    } catch (err) {
      console.error('Failed to add course:', err);
    }
  };

  const handleUpdateMarks = async () => {
    if (!editingTest) return;
    try {
      await updateTestMarksInAPI(editingTest.CT_ID, editMarks);
      setEditingTest(null);
      setEditMarks('');
      fetchCourses();
    } catch (err) {
      console.error('Failed to update marks:', err);
    }
  };

  const prepareBubbles = () => {
    const allBubbles = courses.flatMap((course, idx) =>
      (course.class_tests || []).map(test => createBubble(test, course, idx))
    );
    allBubbles.sort((a, b) => a.TEST_NUMBER - b.TEST_NUMBER);
    return filterBySelectedCourse(allBubbles, selectedCourse);
  };

  const positionBubbles = (bubbles) =>
    bubbles.map((bubble, idx) => ({
      ...bubble,
      ...calculateBubblePosition(bubble.MARKS_OBTAINED, idx, bubbles.length)
    }));

  const bubbles = positionBubbles(prepareBubbles());

  const openEditModal = (bubble) => {
    setEditingTest(bubble);
    setEditMarks(bubble.MARKS_OBTAINED ?? '');
  };

  return (
    <div className="h-screen w-screen overflow-hidden bg-gray-50 relative">
      <BrandName />
      {courses.length > 0 && <CourseFilter value={selectedCourse} onChange={setSelectedCourse} courses={courses} />}

      {loading ? <LoadingState /> :
        bubbles.length === 0 ? <EmptyState /> :
          <Timeline bubbles={bubbles} onBubbleClick={openEditModal} />}

      <AddCourseButton onClick={() => setShowAddModal(true)} />
      <Copyright />

      <AddCourseModal
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
        formData={newCourse}
        onFormChange={setNewCourse}
        onSubmit={handleAddCourse}
      />

      {editingTest && (
        <EditMarksModal
          test={editingTest}
          marks={editMarks}
          onMarksChange={setEditMarks}
          onClose={() => setEditingTest(null)}
          onSave={handleUpdateMarks}
        />
      )}
    </div>
  );
}
