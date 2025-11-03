// nodeBasicsLessonData.js
export const nodeBasicsLessonData = {
  heroConfig: {
    title: 'Node Basics',
    gradientText: 'Geometry Nodes',
    subtitle: 'Introduction to procedural nodes',
    gradientColors: 'linear-gradient(135deg, #2563eb, #3b82f6, #bfdbfe)',
    badges: [
      { icon: '/Icons/time.svg', title: '30 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Intermediate', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Nodes' }
  ],
  themeColor: '#2563eb',
  overviewTitle: 'Node Basics',
  overviewDescription: 'Geometry Nodes fundamentals',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Node Editor', content: 'Visual programming.' }
  ],
  contentTitle: 'Node Tools',
  contentDescription: 'Basic node operations',
  categories: [
    {
      name: 'Nodes',
      color: '#2563eb',
      items: [
        {
          name: 'Transform Node',
          icon: '/Icons/tool.svg',
          description: 'Move, rotate, scale',
          detailedInfo: {
            overview: 'Transform geometry.',
            pages: [{ title: 'Transform', content: 'Add transform node.', tips: ['Connect nodes with noodles'] }]
          }
        }
      ]
    }
  ]
};
