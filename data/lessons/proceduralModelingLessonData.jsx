// proceduralModelingLessonData.js
export const proceduralModelingLessonData = {
  heroConfig: {
    title: 'Procedural Modeling',
    gradientText: 'Geometry Nodes',
    subtitle: 'Create models with nodes',
    gradientColors: 'linear-gradient(135deg, #16a34a, #22c55e, #bbf7d0)',
    badges: [
      { icon: '/Icons/time.svg', title: '45 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Advanced', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Modeling' }
  ],
  themeColor: '#16a34a',
  overviewTitle: 'Procedural Modeling',
  overviewDescription: 'Non-destructive modeling',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Procedural', content: 'Parametric modeling.' }
  ],
  contentTitle: 'Modeling Tools',
  contentDescription: 'Procedural workflows',
  categories: [
    {
      name: 'Modeling',
      color: '#16a34a',
      items: [
        {
          name: 'Mesh Primitives',
          icon: '/Icons/tool.svg',
          description: 'Generate base shapes',
          detailedInfo: {
            overview: 'Create primitive shapes.',
            pages: [{ title: 'Primitives', content: 'Add mesh primitive nodes.', tips: ['Adjust vertex count'] }]
          }
        }
      ]
    }
  ]
};