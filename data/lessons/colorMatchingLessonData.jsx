// colorMatchingLessonData.js
export const colorMatchingLessonData = {
  heroConfig: {
    title: 'Color Matching',
    gradientText: 'VFX Integration',
    subtitle: 'Match CG lighting to footage',
    gradientColors: 'linear-gradient(135deg, #f97316, #fb923c, #fed7aa)',
    badges: [
      { icon: '/Icons/time.svg', title: '25 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Advanced', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Color' }
  ],
  themeColor: '#f97316',
  overviewTitle: 'Color Matching',
  overviewDescription: 'Match renders to plates',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Color Grading', content: 'Match lighting and color.' }
  ],
  contentTitle: 'Color Tools',
  contentDescription: 'Color matching operations',
  categories: [
    {
      name: 'Matching',
      color: '#f97316',
      items: [
        {
          name: 'Color Balance',
          icon: '/Icons/tool.svg',
          description: 'Adjust color temperature',
          detailedInfo: {
            overview: 'Match lighting color.',
            pages: [{ title: 'Balance', content: 'Adjust color curves.', tips: ['Sample from footage'] }]
          }
        }
      ]
    }
  ]
};