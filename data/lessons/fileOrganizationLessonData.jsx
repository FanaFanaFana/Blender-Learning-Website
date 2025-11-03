// fileOrganizationLessonData.js
export const fileOrganizationLessonData = {
  heroConfig: {
    title: 'File Organization',
    gradientText: 'Project Management',
    subtitle: 'Structure your projects',
    gradientColors: 'linear-gradient(135deg, #0284c7, #0ea5e9, #bae6fd)',
    badges: [
      { icon: '/Icons/time.svg', title: '20 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Beginner', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Organization' }
  ],
  themeColor: '#0284c7',
  overviewTitle: 'File Organization',
  overviewDescription: 'Manage project files',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'File Structure', content: 'Organize assets efficiently.' }
  ],
  contentTitle: 'Organization Tools',
  contentDescription: 'File management',
  categories: [
    {
      name: 'Files',
      color: '#0284c7',
      items: [
        {
          name: 'Project Structure',
          icon: '/Icons/tool.svg',
          description: 'Organize files',
          detailedInfo: {
            overview: 'Create folder structure.',
            pages: [{ title: 'Structure', content: 'Organize by asset type.', tips: ['Use consistent naming'] }]
          }
        }
      ]
    }
  ]
};