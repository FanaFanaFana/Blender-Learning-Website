// cameraTrackingLessonData.js
export const cameraTrackingLessonData = {
  heroConfig: {
    title: 'Camera Tracking',
    gradientText: 'VFX Integration',
    subtitle: 'Match 3D camera to footage',
    gradientColors: 'linear-gradient(135deg, #6366f1, #818cf8, #c7d2fe)',
    badges: [
      { icon: '/Icons/time.svg', title: '45 Minutes', subtitle: 'Lesson duration' },
      { icon: '/Icons/user.svg', title: 'Advanced', subtitle: 'Skill level' }
    ]
  },
  tabs: [
    { id: 'overview', icon: '/Icons/info.svg', label: 'Overview' },
    { id: 'content', icon: '/Icons/editmode_hlt.svg', label: 'Tracking' }
  ],
  themeColor: '#6366f1',
  overviewTitle: 'Camera Tracking',
  overviewDescription: 'Track camera movement in footage',
  overviewCards: [
    { icon: '/Icons/view_camera.svg', title: 'Motion Tracking', content: 'Match virtual camera to real footage.' }
  ],
  contentTitle: 'Tracking Tools',
  contentDescription: 'Camera tracking operations',
  categories: [
    {
      name: 'Tracking',
      color: '#6366f1',
      items: [
        {
          name: 'Track Markers',
          icon: '/Icons/tool.svg',
          description: 'Place and track markers',
          detailedInfo: {
            overview: 'Track footage features.',
            pages: [{ title: 'Tracking', content: 'Place tracking markers.', tips: ['Track high-contrast features'] }]
          }
        }
      ]
    }
  ]
};