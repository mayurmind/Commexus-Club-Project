import { useState } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import GroupPhoto from './components/sections/GroupPhoto'
import About from './components/sections/About'
import Team from './components/sections/Team'
import Gallery from './components/sections/Gallery'
import Contact from './components/sections/Contact'
import LoadingScreen from './components/layout/LoadingScreen'
import ArduinoPage from './components/sections/ArduinoPage'
import { useSmoothScroll } from './hooks/useSmoothScroll'

export default function App() {
  const { scrollTo } = useSmoothScroll()
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState('home')

  const handleNavigate = (target) => {
    if (currentPage !== 'home') {
      setCurrentPage('home')
      // Wait for React to mount the Home elements before scrolling
      setTimeout(() => {
        scrollTo(target)
      }, 80)
    } else {
      scrollTo(target)
    }
  }

  const handleBackToHome = () => {
    setCurrentPage('home')
    setTimeout(() => {
      scrollTo('#about')
    }, 80)
  }

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Header onNavigate={handleNavigate} currentPage={currentPage} onNavigateHome={() => setCurrentPage('home')} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onNavigate={handleNavigate} />
            <GroupPhoto />
            <About onNavigatePage={setCurrentPage} />
            <Team />
            <Gallery />
            <Contact />
          </>
        ) : (
          <ArduinoPage onBackToHome={handleBackToHome} />
        )}
      </main>
      <Footer onNavigate={handleNavigate} currentPage={currentPage} onNavigateHome={() => setCurrentPage('home')} />
    </>
  )
}
