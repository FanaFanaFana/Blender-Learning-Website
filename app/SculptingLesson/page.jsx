// FILE: modifierlesson.jsx
'use client'

import LessonTemplate from '@/components/LessonTemplate'
import { sculptingLessonData } from '@/data/lessons/sculptingLessonData'

export default function sculptingLesson() {
  return <LessonTemplate lessonData={sculptingLessonData} />
}