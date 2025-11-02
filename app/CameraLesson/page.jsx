// FILE: FirstModelLesson.jsx
'use client'

import LessonTemplate from '@/components/LessonTemplate'
import { cameraLessonData } from '@/data/lessons/cameraLessonData'

export default function CameraLesson() {
  return <LessonTemplate lessonData={cameraLessonData} />
}