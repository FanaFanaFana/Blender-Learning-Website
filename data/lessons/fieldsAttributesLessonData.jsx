// fieldsAttributesLessonData.js
export const fieldsAttributesLessonData = {
  heroConfig: {
    title: 'Fields & Attributes',
    gradientText: 'Geometry Nodes',
    subtitle: 'Data-driven geometry',
    gradientColors: 'linear-gradient(135deg, #9333ea, #a855f7, #e9d5ff)',
    badges: [
      { icon: '/Icons/time.svg', title: '40 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Advanced', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Fields' }
  ],
  themeColor: '#9333ea',
  overviewTitle: 'Fields & Attributes',
  overviewDescription: 'Per-element data control',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Attributes', content: 'Store data on geometry.' }
  ],
  contentTitle: 'Field Tools',
  contentDescription: 'Attribute operations',
  categories: [
    {
      name: 'Fields',
      color: '#9333ea',
      items: [
        {
          name: 'Position Field',
          icon: '/Icons/tool.svg',
          description: 'Access point positions',
          detailedInfo: {
            overview: 'Read position data.',
            pages: [{ title: 'Position', content: 'Use position attribute.', tips: ['Drive other values'] }]
          }
        }
      ]
    }
  ]
};