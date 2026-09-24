import { useCallback, useEffect } from 'react'
import { Loader, Cursor, Nav, Footer } from './components/Layout.jsx'
import { Hero, About, Experience, AIPrinciples, Skills, EarlierWork, Contact } from './components/Sections.jsx'
import Work from './components/Work.jsx'

const Divider = () => <div className="divider" />

export default function App() {
  // Start the hero entrance animations once the loader is done
  const onLoaded = useCallback(() => document.body.classList.add('ready'), [])

  // Fade sections in as they scroll into view
  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) }
      })
    }, { threshold: 0.1 })
    document.querySelectorAll('.reveal').forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <Cursor />
      <Loader onDone={onLoaded} />
      <Nav />
      <Hero />
      <Divider />
      <main>
        <About />
        <Divider />
        <Experience />
        <Divider />
        <Work />
        <Divider />
        <AIPrinciples />
        <Divider />
        <Skills />
        <Divider />
        <EarlierWork />
        <Divider />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
