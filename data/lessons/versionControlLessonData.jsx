// versionControlLessonData.js
export const versionControlLessonData = {
  heroConfig: {
    title: 'Version Control',
    gradientText: 'Project Management',
    subtitle: 'Manage file versions',
    gradientColors: 'linear-gradient(135deg, #65a30d, #84cc16, #d9f99d)',
    badges: [
      { icon: '/Icons/time.svg', title: '25 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Intermediate', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Versions' }
  ],
  themeColor: '#65a30d',
  overviewTitle: 'Version Control',
  overviewDescription: 'Track file iterations',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Versions', content: 'Manage file history.' }
  ],
  contentTitle: 'Version Tools',
  contentDescription: 'Version management',
  categories: [
    {
      name: 'Versioning',
      color: '#65a30d',
      items: [
        {
          name: 'Save Versions',
          icon: '/Icons/tool.svg',
          description: 'Create backups',
          detailedInfo: {
            overview: 'Track iterations.',
            pages: [{ title: 'Versions', content: 'Save incremental versions.', tips: ['Use meaningful names'] }]
          }
        }
      ]
    }
  ]
};