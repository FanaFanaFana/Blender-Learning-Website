// FILE: FirstModelLesson.jsx
'use client'

import LessonTemplate from '@/components/LessonTemplate'
import { topologyLessonData } from '@/data/lessons/topologyLessonData'

export default function TopologyLesson() {
  return <LessonTemplate lessonData={topologyLessonData} />
}