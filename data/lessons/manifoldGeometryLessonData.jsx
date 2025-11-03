// manifoldGeometryLessonData.js
export const manifoldGeometryLessonData = {
  heroConfig: {
    title: 'Manifold Geometry',
    gradientText: '3D Printing',
    subtitle: 'Create watertight models for printing',
    gradientColors: 'linear-gradient(135deg, #06b6d4, #22d3ee, #a5f3fc)',
    badges: [
      { icon: '/Icons/time.svg', title: '25 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Intermediate', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Manifold Tools' }
  ],
  themeColor: '#06b6d4',
  overviewTitle: 'Manifold Geometry',
  overviewDescription: 'Ensure printable geometry',
  overviewCards: [
    { icon: '/Icons/tool.svg', title: 'Watertight Meshes', content: 'Create closed, printable models.' }
  ],
  contentTitle: 'Manifold Tools',
  contentDescription: 'Check and fix geometry',
  categories: [
    {
      name: 'Checking',
      color: '#06b6d4',
      items: [
        {
          name: 'Check Manifold',
          icon: '/Icons/tool.svg',
          description: 'Verify mesh integrity',
          detailedInfo: {
            overview: 'Detect non-manifold geometry.',
            pages: [{ title: 'Checking', content: 'Find problems.', tips: ['Select non-manifold with Ctrl+Alt+Shift+M'] }]
          }
        }
      ]
    }
  ]
};