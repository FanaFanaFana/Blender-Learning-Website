// textureBakingLessonData.js
export const textureBakingLessonData = {
  heroConfig: {
    title: 'Game Texture Baking',
    gradientText: 'Game Assets',
    subtitle: 'Bake high-poly detail to low-poly',
    gradientColors: 'linear-gradient(135deg, #eab308, #facc15, #fef08a)',
    badges: [
      { icon: '/Icons/time.svg', title: '40 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Advanced', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Baking' }
  ],
  themeColor: '#eab308',
  overviewTitle: 'Game Texture Baking',
  overviewDescription: 'Bake for game engines',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Bake Maps', content: 'Create normal, AO, and color maps.' }
  ],
  contentTitle: 'Baking Tools',
  contentDescription: 'Game baking workflow',
  categories: [
    {
      name: 'Game Baking',
      color: '#eab308',
      items: [
        {
          name: 'Normal Bake',
          icon: '/Icons/tool.svg',
          description: 'Bake high to low poly',
          detailedInfo: {
            overview: 'Transfer detail via maps.',
            pages: [{ title: 'Baking', content: 'Bake normal maps.', tips: ['Cage for clean bakes'] }]
          }
        }
      ]
    }
  ]
};