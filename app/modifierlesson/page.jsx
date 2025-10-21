// FILE: modifierlesson.jsx
'use client'

import LessonTemplate from '@/components/LessonTemplate'
import { modifierLessonData } from '@/data/lessons/modifierLessonData'

export default function modifierLesson() {
  return <LessonTemplate lessonData={modifierLessonData} />
}