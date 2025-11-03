// groomingLessonData.js
export const groomingLessonData = {
  heroConfig: {
    title: 'Hair Grooming',
    gradientText: 'Hair & Fur',
    subtitle: 'Style and shape hair',
    gradientColors: 'linear-gradient(135deg, #be185d, #ec4899, #fbcfe8)',
    badges: [
      { icon: '/Icons/time.svg', title: '40 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Advanced', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Grooming' }
  ],
  themeColor: '#be185d',
  overviewTitle: 'Hair Grooming',
  overviewDescription: 'Style hair with grooming tools',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Comb & Style', content: 'Shape hair strands.' }
  ],
  contentTitle: 'Grooming Tools',
  contentDescription: 'Hair styling operations',
  categories: [
    {
      name: 'Styling',
      color: '#be185d',
      items: [
        {
          name: 'Comb Tool',
          icon: '/Icons/tool.svg',
          description: 'Direct hair flow',
          detailedInfo: {
            overview: 'Brush and comb hair.',
            pages: [{ title: 'Combing', content: 'Style hair direction.', tips: ['Use strength control'] }]
          }
        }
      ]
    }
  ]
};