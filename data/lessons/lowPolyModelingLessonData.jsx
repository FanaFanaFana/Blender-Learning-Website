// lowPolyModelingLessonData.js
export const lowPolyModelingLessonData = {
  heroConfig: {
    title: 'Low Poly Modeling',
    gradientText: 'Game Assets',
    subtitle: 'Create optimized game models',
    gradientColors: 'linear-gradient(135deg, #22c55e, #4ade80, #bbf7d0)',
    badges: [
      { icon: '/Icons/time.svg', title: '35 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Intermediate', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Low Poly' }
  ],
  themeColor: '#22c55e',
  overviewTitle: 'Low Poly Modeling',
  overviewDescription: 'Efficient game-ready models',
  overviewCards: [
    { icon: '/Icons/mesh_cube.svg', title: 'Poly Count', content: 'Minimize triangles for performance.' }
  ],
  contentTitle: 'Low Poly Tools',
  contentDescription: 'Optimization techniques',
  categories: [
    {
      name: 'Optimization',
      color: '#22c55e',
      items: [
        {
          name: 'Poly Reduction',
          icon: '/Icons/tool.svg',
          description: 'Reduce polygon count',
          detailedInfo: {
            overview: 'Optimize mesh density.',
            pages: [{ title: 'Reduction', content: 'Remove unnecessary geometry.', tips: ['Keep silhouette detail'] }]
          }
        }
      ]
    }
  ]
};