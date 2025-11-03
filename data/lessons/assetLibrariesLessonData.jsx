// assetLibrariesLessonData.js
export const assetLibrariesLessonData = {
  heroConfig: {
    title: 'Asset Libraries',
    gradientText: 'Project Management',
    subtitle: 'Build reusable asset collections',
    gradientColors: 'linear-gradient(135deg, #c026d3, #d946ef, #f5d0fe)',
    badges: [
      { icon: '/Icons/time.svg', title: '30 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Intermediate', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Libraries' }
  ],
  themeColor: '#c026d3',
  overviewTitle: 'Asset Libraries',
  overviewDescription: 'Reusable asset system',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Asset Browser', content: 'Store and reuse assets.' }
  ],
  contentTitle: 'Library Tools',
  contentDescription: 'Asset management',
  categories: [
    {
      name: 'Libraries',
      color: '#c026d3',
      items: [
        {
          name: 'Mark as Asset',
          icon: '/Icons/tool.svg',
          description: 'Create library assets',
          detailedInfo: {
            overview: 'Build asset library.',
            pages: [{ title: 'Assets', content: 'Mark objects as assets.', tips: ['Add preview images'] }]
          }
        }
      ]
    }
  ]
};