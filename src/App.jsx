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
import { useSmoothScroll } from './hooks/useSmoothScroll'

export default function App() {
  const { scrollTo } = useSmoothScroll()
  const [isLoading, setIsLoading] = useState(true)

  const handleNavigate = (target) => {
    scrollTo(target)
  }

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Header onNavigate={handleNavigate} />
      <main>
        <Hero onNavigate={handleNavigate} />
        <GroupPhoto />
        <About />
        <Team />
        <Gallery />
        <Contact />
      </main>
      <Footer onNavigate={handleNavigate} />
    </>
  )
}
