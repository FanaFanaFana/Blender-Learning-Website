// drawingBasicsLessonData.js
export const drawingBasicsLessonData = {
  heroConfig: {
    title: 'Drawing Basics',
    gradientText: 'Grease Pencil',
    subtitle: 'Draw in 3D space',
    gradientColors: 'linear-gradient(135deg, #4f46e5, #6366f1, #c7d2fe)',
    badges: [
      { icon: '/Icons/time.svg', title: '25 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Beginner', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Drawing' }
  ],
  themeColor: '#4f46e5',
  overviewTitle: 'Drawing Basics',
  overviewDescription: '2D animation in 3D',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Grease Pencil', content: 'Draw strokes in 3D.' }
  ],
  contentTitle: 'Drawing Tools',
  contentDescription: 'Grease Pencil tools',
  categories: [
    {
      name: 'Draw Tools',
      color: '#4f46e5',
      items: [
        {
          name: 'Draw Tool',
          icon: '/Icons/tool.svg',
          description: 'Create strokes',
          detailedInfo: {
            overview: 'Draw in viewport.',
            pages: [{ title: 'Drawing', content: 'Click and drag to draw.', tips: ['D for draw mode'] }]
          }
        }
      ]
    }
  ]
};