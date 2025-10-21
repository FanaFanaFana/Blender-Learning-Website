// FILE: FirstModelLesson.jsx
'use client'


import LessonTemplate from '@/components/LessonTemplate'
import { firstModelLessonData } from '@/data/lessons/firstModelLessonData'

export default function FirstModelLesson() {
  return <LessonTemplate lessonData={firstModelLessonData} />
}