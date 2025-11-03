// fluidSimulationLessonData.js
export const fluidSimulationLessonData = {
  heroConfig: {
    title: 'Fluid Simulation',
    gradientText: 'Simulation',
    subtitle: 'Liquid and smoke effects',
    gradientColors: 'linear-gradient(135deg, #0ea5e9, #38bdf8, #bae6fd)',
    badges: [
      { icon: '/Icons/time.svg', title: '50 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Advanced', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Fluids' }
  ],
  themeColor: '#0ea5e9',
  overviewTitle: 'Fluid Simulation',
  overviewDescription: 'Simulate liquids',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Mantaflow', content: 'Fluid physics engine.' }
  ],
  contentTitle: 'Fluid Tools',
  contentDescription: 'Fluid simulation',
  categories: [
    {
      name: 'Fluids',
      color: '#0ea5e9',
      items: [
        {
          name: 'Fluid Domain',
          icon: '/Icons/tool.svg',
          description: 'Create fluid container',
          detailedInfo: {
            overview: 'Set up fluid simulation.',
            pages: [{ title: 'Domain', content: 'Add fluid domain.', tips: ['Adjust resolution'] }]
          }
        }
      ]
    }
  ]
};
