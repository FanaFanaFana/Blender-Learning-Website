import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LearningPaths from '@/components/LearningPaths'
import Sidebar from '@/components/Sidebar'


export default function LearnPage() {
  return (
    <div className="page-wrapper">
      <Sidebar />
      <Header />
      <main>
        <LearningPaths />
      </main>
      <Footer />
    </div>
  )
}