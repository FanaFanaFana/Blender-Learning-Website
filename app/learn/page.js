import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LearningPaths from '@/components/LearningPaths'


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