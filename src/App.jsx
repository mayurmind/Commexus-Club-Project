import { useState, useEffect } from 'react'
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
import ESP32Page from './components/sections/ESP32Page'
import EmbeddedCPage from './components/sections/EmbeddedCPage'
import MicrocontrollerPage from './components/sections/MicrocontrollerPage'
import { useSmoothScroll } from './hooks/useSmoothScroll'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function App() {
  const { scrollTo, lenis } = useSmoothScroll()
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState('home')

  // Reset scroll to top on page transition to prevent starting mid-page
  useEffect(() => {
    // 1. Reset standard browser scroll
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0

    // 2. Reset Lenis scroll position immediately
    if (lenis && lenis.current) {
      lenis.current.scrollTo(0, { immediate: true })
    }

    // 3. Clear GSAP ScrollTrigger memory
    ScrollTrigger.clearScrollMemory()

    // 4. Double check after rendering completes
    const timer = setTimeout(() => {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      if (lenis && lenis.current) {
        lenis.current.scrollTo(0, { immediate: true })
      }
      ScrollTrigger.refresh()
    }, 50)

    return () => clearTimeout(timer)
  }, [currentPage, lenis])

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
        ) : currentPage === 'arduino' ? (
          <ArduinoPage onBackToHome={handleBackToHome} />
        ) : currentPage === 'esp32' ? (
          <ESP32Page onBackToHome={handleBackToHome} />
        ) : currentPage === 'embedded-c' ? (
          <EmbeddedCPage onBackToHome={handleBackToHome} />
        ) : (
          <MicrocontrollerPage onBackToHome={handleBackToHome} />
        )}
      </main>
      <Footer onNavigate={handleNavigate} currentPage={currentPage} onNavigateHome={() => setCurrentPage('home')} />
    </>
  )
}
