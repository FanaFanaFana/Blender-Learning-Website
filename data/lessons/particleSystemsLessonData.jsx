// particleSystemsLessonData.js
export const particleSystemsLessonData = {
  heroConfig: {
    title: 'Particle Systems',
    gradientText: 'Simulation',
    subtitle: 'Create particle effects',
    gradientColors: 'linear-gradient(135deg, #f59e0b, #fbbf24, #fef3c7)',
    badges: [
      { icon: '/Icons/time.svg', title: '40 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Intermediate', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Particles' }
  ],
  themeColor: '#f59e0b',
  overviewTitle: 'Particle Systems',
  overviewDescription: 'Emit and simulate particles',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Particles', content: 'Create swarms and effects.' }
  ],
  contentTitle: 'Particle Tools',
  contentDescription: 'Particle system',
  categories: [
    {
      name: 'Particles',
      color: '#f59e0b',
      items: [
        {
          name: 'Emitter',
          icon: '/Icons/tool.svg',
          description: 'Emit particles',
          detailedInfo: {
            overview: 'Create particle emitter.',
            pages: [{ title: 'Emitter', content: 'Add particle system.', tips: ['Adjust emission rate'] }]
          }
        }
      ]
    }
  ]
};