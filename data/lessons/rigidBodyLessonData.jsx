// rigidBodyLessonData.js
export const rigidBodyLessonData = {
  heroConfig: {
    title: 'Rigid Body',
    gradientText: 'Simulation',
    subtitle: 'Physics-based animation',
    gradientColors: 'linear-gradient(135deg, #dc2626, #ef4444, #fca5a5)',
    badges: [
      { icon: '/Icons/time.svg', title: '35 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Intermediate', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Rigid Body' }
  ],
  themeColor: '#dc2626',
  overviewTitle: 'Rigid Body',
  overviewDescription: 'Simulate solid objects',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Physics', content: 'Realistic collisions.' }
  ],
  contentTitle: 'Rigid Body Tools',
  contentDescription: 'Physics simulation',
  categories: [
    {
      name: 'Physics',
      color: '#dc2626',
      items: [
        {
          name: 'Add Rigid Body',
          icon: '/Icons/tool.svg',
          description: 'Enable physics',
          detailedInfo: {
            overview: 'Add physics to objects.',
            pages: [{ title: 'Rigid Body', content: 'Active or Passive type.', tips: ['Adjust mass and friction'] }]
          }
        }
      ]
    }
  ]
};