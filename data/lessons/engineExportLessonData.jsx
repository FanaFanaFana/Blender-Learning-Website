// engineExportLessonData.js
export const engineExportLessonData = {
  heroConfig: {
    title: 'Engine Export',
    gradientText: 'Game Assets',
    subtitle: 'Export for Unity and Unreal',
    gradientColors: 'linear-gradient(135deg, #7c3aed, #a78bfa, #ddd6fe)',
    badges: [
      { icon: '/Icons/time.svg', title: '25 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Intermediate', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Export' }
  ],
  themeColor: '#7c3aed',
  overviewTitle: 'Engine Export',
  overviewDescription: 'Export FBX for game engines',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'FBX Export', content: 'Export for Unity/Unreal.' }
  ],
  contentTitle: 'Export Tools',
  contentDescription: 'Engine export settings',
  categories: [
    {
      name: 'Export',
      color: '#7c3aed',
      items: [
        {
          name: 'FBX Settings',
          icon: '/Icons/tool.svg',
          description: 'Configure export',
          detailedInfo: {
            overview: 'Export for engines.',
            pages: [{ title: 'Export', content: 'File > Export > FBX.', tips: ['Apply transforms first'] }]
          }
        }
      ]
    }
  ]
};