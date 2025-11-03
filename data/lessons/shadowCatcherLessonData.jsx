// shadowCatcherLessonData.js
export const shadowCatcherLessonData = {
  heroConfig: {
    title: 'Shadow Catcher',
    gradientText: 'VFX Integration',
    subtitle: 'Capture shadows on invisible geometry',
    gradientColors: 'linear-gradient(135deg, #64748b, #94a3b8, #cbd5e1)',
    badges: [
      { icon: '/Icons/time.svg', title: '20 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Intermediate', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Shadow Catcher' }
  ],
  themeColor: '#64748b',
  overviewTitle: 'Shadow Catcher',
  overviewDescription: 'Composite realistic shadows',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Shadow Planes', content: 'Catch shadows only.' }
  ],
  contentTitle: 'Shadow Tools',
  contentDescription: 'Shadow catching setup',
  categories: [
    {
      name: 'Shadow Setup',
      color: '#64748b',
      items: [
        {
          name: 'Enable Shadow Catcher',
          icon: '/Icons/tool.svg',
          description: 'Set up shadow catching',
          detailedInfo: {
            overview: 'Invisible shadow receivers.',
            pages: [{ title: 'Setup', content: 'Enable in object properties.', tips: ['Use with HDRI lighting'] }]
          }
        }
      ]
    }
  ]
};