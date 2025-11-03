// scaleUnitsLessonData.js
export const scaleUnitsLessonData = {
  heroConfig: {
    title: 'Scale & Units',
    gradientText: '3D Printing',
    subtitle: 'Set correct dimensions for printing',
    gradientColors: 'linear-gradient(135deg, #14b8a6, #2dd4bf, #99f6e4)',
    badges: [
      { icon: '/Icons/time.svg', title: '15 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Beginner', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Units' }
  ],
  themeColor: '#14b8a6',
  overviewTitle: 'Scale & Units',
  overviewDescription: 'Manage model dimensions',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Real-World Scale', content: 'Set accurate measurements.' }
  ],
  contentTitle: 'Unit Tools',
  contentDescription: 'Scale and measurement',
  categories: [
    {
      name: 'Units',
      color: '#14b8a6',
      items: [
        {
          name: 'Unit Scale',
          icon: '/Icons/tool.svg',
          description: 'Set measurement units',
          detailedInfo: {
            overview: 'Configure units.',
            pages: [{ title: 'Units', content: 'Set mm, cm, or inches.', tips: ['Check scale before export'] }]
          }
        }
      ]
    }
  ]
};