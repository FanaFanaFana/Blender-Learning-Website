// FILE: FirstModelLesson.jsx
'use client'

import LessonTemplate from '@/components/LessonTemplate'
import { materialLessonData } from '@/data/lessons/materialLessonData'

export default function MaterialLesson() {
  return <LessonTemplate lessonData={materialLessonData} />
}