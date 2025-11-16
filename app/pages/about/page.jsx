// app/about/page.js
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutPage from '@/components/AboutPage'
import Sidebar from '@/components/Sidebar'

export default function About() {
  return (
    <div className="page-wrapper">
      <Sidebar />
      <Header />
      <AboutPage />
      <Footer />
    </div>
  )
}