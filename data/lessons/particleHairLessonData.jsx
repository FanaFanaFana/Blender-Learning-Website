// particleHairLessonData.js
export const particleHairLessonData = {
  heroConfig: {
    title: 'Particle Hair',
    gradientText: 'Hair & Fur',
    subtitle: 'Create hair with particle system',
    gradientColors: 'linear-gradient(135deg, #be123c, #fb7185, #fecdd3)',
    badges: [
      { icon: '/Icons/time.svg', title: '35 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Advanced', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Hair System' }
  ],
  themeColor: '#be123c',
  overviewTitle: 'Particle Hair',
  overviewDescription: 'Generate hair particles',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Hair Particles', content: 'Create realistic hair.' }
  ],
  contentTitle: 'Hair Tools',
  contentDescription: 'Particle hair system',
  categories: [
    {
      name: 'Hair Particles',
      color: '#be123c',
      items: [
        {
          name: 'Add Hair',
          icon: '/Icons/tool.svg',
          description: 'Create hair system',
          detailedInfo: {
            overview: 'Generate hair particles.',
            pages: [{ title: 'Hair', content: 'Add particle hair system.', tips: ['Adjust density'] }]
          }
        }
      ]
    }
  ]
};
