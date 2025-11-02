// FILE: FirstModelLesson.jsx
'use client'

import LessonTemplate from '@/components/LessonTemplate'
import { lightingLessonData } from '@/data/lessons/lightingLessonData'

export default function LightingLesson() {
  return <LessonTemplate lessonData={lightingLessonData} />
}