// collectionsLessonData.js
export const collectionsLessonData = {
  heroConfig: {
    title: 'Collections',
    gradientText: 'Project Management',
    subtitle: 'Organize scene objects',
    gradientColors: 'linear-gradient(135deg, #0891b2, #06b6d4, #a5f3fc)',
    badges: [
      { icon: '/Icons/time.svg', title: '15 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Beginner', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Collections' }
  ],
  themeColor: '#0891b2',
  overviewTitle: 'Collections',
  overviewDescription: 'Group and organize objects',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Collections', content: 'Organize outliner.' }
  ],
  contentTitle: 'Collection Tools',
  contentDescription: 'Organization system',
  categories: [
    {
      name: 'Collections',
      color: '#0891b2',
      items: [
        {
          name: 'Create Collection',
          icon: '/Icons/tool.svg',
          description: 'Group objects',
          detailedInfo: {
            overview: 'Organize scene hierarchy.',
            pages: [{ title: 'Collections', content: 'M to move to collection.', tips: ['Nested collections'] }]
          }
        }
      ]
    }
  ]
};