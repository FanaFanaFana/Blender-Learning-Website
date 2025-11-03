// lodCreationLessonData.js
export const lodCreationLessonData = {
  heroConfig: {
    title: 'LOD Creation',
    gradientText: 'Game Assets',
    subtitle: 'Create level of detail variants',
    gradientColors: 'linear-gradient(135deg, #dc2626, #ef4444, #fca5a5)',
    badges: [
      { icon: '/Icons/time.svg', title: '30 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Intermediate', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'LOD' }
  ],
  themeColor: '#dc2626',
  overviewTitle: 'LOD Creation',
  overviewDescription: 'Multiple detail levels',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'LOD System', content: 'Distance-based detail.' }
  ],
  contentTitle: 'LOD Tools',
  contentDescription: 'Create LOD chain',
  categories: [
    {
      name: 'LOD Levels',
      color: '#dc2626',
      items: [
        {
          name: 'Decimate',
          icon: '/Icons/tool.svg',
          description: 'Reduce complexity',
          detailedInfo: {
            overview: 'Create LOD levels.',
            pages: [{ title: 'LODs', content: 'Generate lower detail.', tips: ['LOD0, LOD1, LOD2 chain'] }]
          }
        }
      ]
    }
  ]
};