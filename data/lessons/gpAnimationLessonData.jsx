// gpAnimationLessonData.js
export const gpAnimationLessonData = {
  heroConfig: {
    title: 'GP Animation',
    gradientText: 'Grease Pencil',
    subtitle: 'Animate 2D drawings',
    gradientColors: 'linear-gradient(135deg, #7c3aed, #8b5cf6, #ddd6fe)',
    badges: [
      { icon: '/Icons/time.svg', title: '40 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Intermediate', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Animation' }
  ],
  themeColor: '#7c3aed',
  overviewTitle: 'GP Animation',
  overviewDescription: '2D animation workflow',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Frame by Frame', content: 'Traditional animation.' }
  ],
  contentTitle: 'Animation Tools',
  contentDescription: 'Animate grease pencil',
  categories: [
    {
      name: 'Animation',
      color: '#7c3aed',
      items: [
        {
          name: 'Keyframes',
          icon: '/Icons/tool.svg',
          description: 'Create animation frames',
          detailedInfo: {
            overview: 'Animate drawings.',
            pages: [{ title: 'Keyframes', content: 'Add frames on timeline.', tips: ['I to insert keyframe'] }]
          }
        }
      ]
    }
  ]
};