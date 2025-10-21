// FILE: FirstModelLesson.jsx
'use client'

import LessonTemplate from '@/components/LessonTemplate'
import { hardsurfaceLessonData } from '@/data/lessons/hardsurfaceLessonData'

export default function HardSurfaceLesson() {
  return <LessonTemplate lessonData={hardsurfaceLessonData} />
}