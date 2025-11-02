// FILE: FirstModelLesson.jsx
'use client'

import LessonTemplate from '@/components/LessonTemplate'
import { renderEnginesLessonData } from '@/data/lessons/renderEnginesLessonData'

export default function RenderEnginesLesson() {
  return <LessonTemplate lessonData={renderEnginesLessonData} />
}