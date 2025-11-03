// keyingMaskingLessonData.js
export const keyingMaskingLessonData = {
  heroConfig: {
    title: 'Keying & Masking',
    gradientText: 'VFX Integration',
    subtitle: 'Remove backgrounds and create masks',
    gradientColors: 'linear-gradient(135deg, #0ea5e9, #38bdf8, #bae6fd)',
    badges: [
      { icon: '/Icons/time.svg', title: '30 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Intermediate', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Keying' }
  ],
  themeColor: '#0ea5e9',
  overviewTitle: 'Keying & Masking',
  overviewDescription: 'Composite with keying',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Green Screen', content: 'Remove chroma key backgrounds.' }
  ],
  contentTitle: 'Keying Tools',
  contentDescription: 'Keying and masking',
  categories: [
    {
      name: 'Keying',
      color: '#0ea5e9',
      items: [
        {
          name: 'Chroma Key',
          icon: '/Icons/tool.svg',
          description: 'Remove color backgrounds',
          detailedInfo: {
            overview: 'Key out backgrounds.',
            pages: [{ title: 'Keying', content: 'Remove green/blue screens.', tips: ['Even lighting is crucial'] }]
          }
        }
      ]
    }
  ]
};