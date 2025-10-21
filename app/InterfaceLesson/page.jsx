// FILE: FirstModelLesson.jsx
'use client'

import LessonTemplate from '@/components/LessonTemplate'
import { interfaceLessonData } from '@/data/lessons/interfaceLessonData'

export default function InterfaceLesson() {
  return <LessonTemplate lessonData={interfaceLessonData} />
}