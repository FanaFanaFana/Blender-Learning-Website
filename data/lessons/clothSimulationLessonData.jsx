// clothSimulationLessonData.js
export const clothSimulationLessonData = {
  heroConfig: {
    title: 'Cloth Simulation',
    gradientText: 'Simulation',
    subtitle: 'Realistic fabric dynamics',
    gradientColors: 'linear-gradient(135deg, #7c3aed, #8b5cf6, #ddd6fe)',
    badges: [
      { icon: '/Icons/time.svg', title: '40 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Advanced', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Cloth' }
  ],
  themeColor: '#7c3aed',
  overviewTitle: 'Cloth Simulation',
  overviewDescription: 'Simulate fabric',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Cloth Physics', content: 'Draping and folding.' }
  ],
  contentTitle: 'Cloth Tools',
  contentDescription: 'Cloth simulation',
  categories: [
    {
      name: 'Cloth',
      color: '#7c3aed',
      items: [
        {
          name: 'Add Cloth',
          icon: '/Icons/tool.svg',
          description: 'Enable cloth physics',
          detailedInfo: {
            overview: 'Simulate cloth behavior.',
            pages: [{ title: 'Cloth', content: 'Add cloth modifier.', tips: ['Pin vertices for control'] }]
          }
        }
      ]
    }
  ]
};