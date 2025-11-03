// supportStructuresLessonData.js
export const supportStructuresLessonData = {
  heroConfig: {
    title: 'Support Structures',
    gradientText: '3D Printing',
    subtitle: 'Add supports for overhangs',
    gradientColors: 'linear-gradient(135deg, #a855f7, #c084fc, #e9d5ff)',
    badges: [
      { icon: '/Icons/time.svg', title: '20 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Intermediate', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Supports' }
  ],
  themeColor: '#a855f7',
  overviewTitle: 'Support Structures',
  overviewDescription: 'Design support geometry',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Print Supports', content: 'Add structural supports.' }
  ],
  contentTitle: 'Support Tools',
  contentDescription: 'Create supports',
  categories: [
    {
      name: 'Support Types',
      color: '#a855f7',
      items: [
        {
          name: 'Add Supports',
          icon: '/Icons/tool.svg',
          description: 'Generate support geometry',
          detailedInfo: {
            overview: 'Create print supports.',
            pages: [{ title: 'Supports', content: 'Add removable supports.', tips: ['45° overhang rule'] }]
          }
        }
      ]
    }
  ]
};