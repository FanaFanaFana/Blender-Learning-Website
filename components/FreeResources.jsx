export default function FreeResources() {
  const resources = [
    {
      category: 'Video Tutorials',
      icon: '/camera.svg',
      color: '#3b82c4',
      items: [
        'Complete Beginner Course',
        'Weekly Tutorial Series',
        'Quick Tips & Tricks',
        'Live Workshop Recordings'
      ]
    },
    {
      category: 'Written Guides',
      icon: '/alignleft.svg',
      color: '#f59e0b',
      items: [
        'Step-by-Step Tutorials',
        'Workflow Best Practices',
        'Keyboard Shortcuts Guide',
        'Common Mistakes to Avoid'
      ]
    },
    {
      category: 'Free Assets',
      icon: '/object.svg',
      color: '#8b5cf6',
      items: [
        'Starter 3D Models',
        'Material Library',
        'HDRI Environments',
        'Texture Packs'
      ]
    },
    {
      category: 'Community',
      icon: '/community.svg',
      color: '#ec4899',
      items: [
        'Discord Community',
        'Weekly Challenges',
        'Feedback & Critique',
        'Student Showcase'
      ]
    }
  ]

  return (
    <section className="free-resources">
      <div className="container">
        <h2 className="section-title">Free Resources</h2>
        <p className="section-subtitle">Everything you need to succeed</p>

        <div className="resources-grid">
          {resources.map((resource, index) => (
            <div key={index} className="resource-card">
              <div className="resource-icon" style={{ backgroundColor: `${resource.color}20` }}>
                <img src={resource.icon} alt={resource.category} style={{ width: '50px', height: '50px' }} />
              </div>
              <h3 style={{ color: resource.color }}>{resource.category}</h3>
              <ul className="resource-list">
                {resource.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <span style={{ color: resource.color }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="resource-btn" style={{ backgroundColor: resource.color }}>
                Explore
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}