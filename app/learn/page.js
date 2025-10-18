import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LearnHero from '@/components/LearnHero'
import LearningPaths from '@/components/LearningPaths'
import FreeResources from '@/components/FreeResources'

export default function LearnPage() {
  return (
    <div className="page-wrapper">
      <Header />
      <main>
       
        <LearningPaths />
        
      </main>
      <Footer />
    </div>
  )
}