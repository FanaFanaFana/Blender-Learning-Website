// fileExportLessonData.js
export const fileExportLessonData = {
  heroConfig: {
    title: 'File Export',
    gradientText: '3D Printing',
    subtitle: 'Export models for printing',
    gradientColors: 'linear-gradient(135deg, #84cc16, #a3e635, #d9f99d)',
    badges: [
      { icon: '/Icons/time.svg', title: '15 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Beginner', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Export' }
  ],
  themeColor: '#84cc16',
  overviewTitle: 'File Export',
  overviewDescription: 'Export STL and 3MF files',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Export Formats', content: 'Save for 3D printing.' }
  ],
  contentTitle: 'Export Tools',
  contentDescription: 'Export operations',
  categories: [
    {
      name: 'Export',
      color: '#84cc16',
      items: [
        {
          name: 'STL Export',
          icon: '/Icons/tool.svg',
          description: 'Export STL format',
          detailedInfo: {
            overview: 'Save as STL.',
            pages: [{ title: 'Export', content: 'File > Export > STL.', tips: ['Check scale before export'] }]
          }
        }
      ]
    }
  ]
};