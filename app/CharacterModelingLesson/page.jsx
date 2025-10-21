// FILE: FirstModelLesson.jsx
'use client'

import LessonTemplate from '@/components/LessonTemplate'
import { characterModelingLessonData } from '@/data/lessons/characterModelingLessonData'

export default function CharacterModelingLesson() {
  return <LessonTemplate lessonData={characterModelingLessonData} />
}