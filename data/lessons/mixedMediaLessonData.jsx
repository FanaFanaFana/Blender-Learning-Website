// mixedMediaLessonData.js
export const mixedMediaLessonData = {
  heroConfig: {
    title: 'Mixed Media',
    gradientText: 'Grease Pencil',
    subtitle: 'Combine 2D and 3D',
    gradientColors: 'linear-gradient(135deg, #d97706, #f59e0b, #fde68a)',
    badges: [
      { icon: '/Icons/time.svg', title: '35 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Advanced', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Mixed Media' }
  ],
  themeColor: '#d97706',
  overviewTitle: 'Mixed Media',
  overviewDescription: 'Blend 2D with 3D',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: '2D+3D', content: 'Hybrid workflows.' }
  ],
  contentTitle: 'Mixed Tools',
  contentDescription: 'Combine techniques',
  categories: [
    {
      name: 'Integration',
      color: '#d97706',
      items: [
        {
          name: 'Line Art',
          icon: '/Icons/tool.svg',
          description: 'Generate lines from 3D',
          detailedInfo: {
            overview: 'Convert 3D to lines.',
            pages: [{ title: 'Line Art', content: 'Add Line Art modifier.', tips: ['Adjust crease angle'] }]
          }
        }
      ]
    }
  ]
};
