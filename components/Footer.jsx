import DonateButton from '@/components/DonateButton'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <DonateButton />
          
          <div className="footer-links">
            <a href="/pages/privacy">Privacy Policy</a>
            <span>•</span>
            <a href="/pages/terms">Terms of Use</a>
            <span>•</span>
            <a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="noopener noreferrer">
              Blender Icons License (CC BY-SA 4.0)
            </a>
            <span>•</span>
            <a href="/pages/faq">FAQ</a>
          </div>
        </div>
        
        <p className="footer-copyright">
          &copy; 2025 Blender Learning Platform. All rights reserved.
          Blender and its icons are © Blender Foundation | Used under the GPL/CC-BY-SA license for educational purposes. Not affiliated with or endorsed by Blender.org
        </p>
      </div>
    </footer>
  )
}