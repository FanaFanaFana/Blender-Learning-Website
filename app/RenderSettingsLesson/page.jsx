// FILE: FirstModelLesson.jsx
'use client'

import LessonTemplate from '@/components/LessonTemplate'
import { renderSettingsLessonData } from '@/data/lessons/renderSettingsLessonData'

export default function RenderSettingsLesson() {
  return <LessonTemplate lessonData={renderSettingsLessonData} />
}