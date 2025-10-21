// FILE: modifierlesson.jsx
'use client'

import LessonTemplate from '@/components/LessonTemplate'
import { productDesignLessonData } from '@/data/lessons/productDesignLessonData'

export default function ProductDesignLesson() {
  return <LessonTemplate lessonData={productDesignLessonData} />
}