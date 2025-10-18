import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import GlobalSearch from '@/components/GlobalSearch'

export default function Home() {
  return (
    <div className="page-wrapper">
      <Header />
      
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </div>
  )
}