// app/about/page.js
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AboutPage from '@/components/AboutPage'

export default function About() {
  return (
    <div className="page-wrapper">
      <Header />
      <AboutPage />
      <Footer />
    </div>
  )
}