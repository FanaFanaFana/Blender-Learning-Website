// FILE: EditModeLesson.jsx
'use client'

import LessonTemplate from '@/components/LessonTemplate'
import { editModeLessonData } from '@/data/lessons/editModeLessonData'

export default function EditModeLesson() {
  return <LessonTemplate lessonData={editModeLessonData} />
}