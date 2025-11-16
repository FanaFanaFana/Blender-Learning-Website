// app/contact/page.js (or wherever you want it)
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactPage from '@/components/ContactPage' // or wherever you save this
import Sidebar from '@/components/Sidebar'

export default function Contact() {
  return (
    <div className="page-wrapper">
      <Sidebar />
      <Header />
      <ContactPage />
      <Footer />
    </div>
  )
}