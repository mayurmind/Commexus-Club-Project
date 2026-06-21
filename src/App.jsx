import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Team from './components/sections/Team'
import Contact from './components/sections/Contact'
import { useSmoothScroll } from './hooks/useSmoothScroll'

export default function App() {
  const { scrollTo } = useSmoothScroll()

  const handleNavigate = (target) => {
    scrollTo(target)
  }

  return (
    <>
      <Header onNavigate={handleNavigate} />
      <main>
        <Hero onNavigate={handleNavigate} />
        <About />
        <Team />
        <Contact />
      </main>
      <Footer onNavigate={handleNavigate} />
    </>
  )
}
