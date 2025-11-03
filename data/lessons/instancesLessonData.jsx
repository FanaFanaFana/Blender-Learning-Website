// instancesLessonData.js
export const instancesLessonData = {
  heroConfig: {
    title: 'Instances',
    gradientText: 'Geometry Nodes',
    subtitle: 'Duplicate geometry efficiently',
    gradientColors: 'linear-gradient(135deg, #ea580c, #f97316, #fed7aa)',
    badges: [
      { icon: '/Icons/time.svg', title: '35 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Advanced', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Instances' }
  ],
  themeColor: '#ea580c',
  overviewTitle: 'Instances',
  overviewDescription: 'Efficient duplication',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Instance On Points', content: 'Fast duplication.' }
  ],
  contentTitle: 'Instance Tools',
  contentDescription: 'Instancing operations',
  categories: [
    {
      name: 'Instancing',
      color: '#ea580c',
      items: [
        {
          name: 'Instance on Points',
          icon: '/Icons/tool.svg',
          description: 'Place instances',
          detailedInfo: {
            overview: 'Duplicate on points.',
            pages: [{ title: 'Instances', content: 'Add instance node.', tips: ['Scale with attributes'] }]
          }
        }
      ]
    }
  ]
};
