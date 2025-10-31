import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'  // Add this import

export default function Home() {
  return (
    <div className="page-wrapper">
      <Sidebar />  {/* Add this */}
      <Header />
      
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}