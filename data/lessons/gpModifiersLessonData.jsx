// gpModifiersLessonData.js
export const gpModifiersLessonData = {
  heroConfig: {
    title: 'GP Modifiers',
    gradientText: 'Grease Pencil',
    subtitle: 'Modify strokes procedurally',
    gradientColors: 'linear-gradient(135deg, #059669, #10b981, #a7f3d0)',
    badges: [
      { icon: '/Icons/time.svg', title: '30 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Intermediate', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Modifiers' }
  ],
  themeColor: '#059669',
  overviewTitle: 'GP Modifiers',
  overviewDescription: 'Non-destructive effects',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Modifiers', content: 'Add effects to strokes.' }
  ],
  contentTitle: 'Modifier Tools',
  contentDescription: 'Grease Pencil modifiers',
  categories: [
    {
      name: 'Modifiers',
      color: '#059669',
      items: [
        {
          name: 'Offset Modifier',
          icon: '/Icons/tool.svg',
          description: 'Offset stroke position',
          detailedInfo: {
            overview: 'Move strokes.',
            pages: [{ title: 'Offset', content: 'Add offset modifier.', tips: ['Animate offset value'] }]
          }
        }
      ]
    }
  ]
};