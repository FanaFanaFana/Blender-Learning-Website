import Header from '@/components/Header'
import MainPage from '@/components/MainPage'  // New combined import
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'

export default function Home() {
  return (
    <div className="page-wrapper">
      <Sidebar />
      <Header />
      
      <main>
        <MainPage />  
      </main>
      
      <Footer />
    </div>
  )
}