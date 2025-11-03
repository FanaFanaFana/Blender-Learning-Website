export const proceduralTexturesLessonData = {
  heroConfig: {
    title: 'Procedural Textures',
    gradientText: 'Fundamentals',
    subtitle: 'Generate textures mathematically',
    gradientColors: 'linear-gradient(135deg, #f59e0b, #fbbf24, #fde68a)',
    badges: [
      { icon: '/Icons/time.svg', title: '35 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Advanced', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Procedural Nodes' }
  ],
  themeColor: '#f59e0b',
  overviewTitle: 'Procedural Textures',
  overviewDescription: 'Create textures with nodes',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Procedural Generation', content: 'Math-based texture creation.' }
  ],
  contentTitle: 'Procedural Nodes',
  contentDescription: 'Texture generation nodes',
  categories: [
    {
      name: 'Texture Nodes',
      color: '#f59e0b',
      items: [
        {
          name: 'Noise Texture',
          icon: '/Icons/tool.svg',
          description: 'Generate noise patterns',
          detailedInfo: {
            overview: 'Create random patterns.',
            pages: [{ title: 'Noise', content: 'Procedural noise generation.', tips: ['Scale controls detail'] }]
          }
        }
      ]
    }
  ]
};