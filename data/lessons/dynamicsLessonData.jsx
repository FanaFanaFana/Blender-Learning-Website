// dynamicsLessonData.js
export const dynamicsLessonData = {
  heroConfig: {
    title: 'Hair Dynamics',
    gradientText: 'Hair & Fur',
    subtitle: 'Animate hair with physics',
    gradientColors: 'linear-gradient(135deg, #0891b2, #06b6d4, #a5f3fc)',
    badges: [
      { icon: '/Icons/time.svg', title: '35 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Advanced', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Dynamics' }
  ],
  themeColor: '#0891b2',
  overviewTitle: 'Hair Dynamics',
  overviewDescription: 'Simulate hair movement',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Hair Physics', content: 'Realistic hair motion.' }
  ],
  contentTitle: 'Dynamics Tools',
  contentDescription: 'Hair simulation',
  categories: [
    {
      name: 'Simulation',
      color: '#0891b2',
      items: [
        {
          name: 'Enable Dynamics',
          icon: '/Icons/tool.svg',
          description: 'Activate hair physics',
          detailedInfo: {
            overview: 'Simulate hair movement.',
            pages: [{ title: 'Dynamics', content: 'Enable in particle settings.', tips: ['Adjust stiffness'] }]
          }
        }
      ]
    }
  ]
};