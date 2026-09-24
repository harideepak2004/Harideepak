import { useEffect, useRef, useState } from 'react'
import { nav, profile } from '../data.js'

/* Shows the "HD" intro once per browser session, then marks the page ready. */
export function Loader({ onDone }) {
  const [skip] = useState(() => {
    let seen = false
    try { seen = sessionStorage.getItem('seenLoader') === '1' } catch (e) { /* storage blocked */ }
    return seen || window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })
  const [state, setState] = useState(skip ? 'gone' : 'show') // show | hide | gone

  useEffect(() => {
    try { sessionStorage.setItem('seenLoader', '1') } catch (e) { /* ignore */ }
    if (skip) { onDone(); return }
    const t = setTimeout(() => { setState('hide'); onDone() }, 1500)
    return () => clearTimeout(t)
  }, [skip, onDone])

  if (state === 'gone') return null
  return (
    <div id="loader" className={state === 'hide' ? 'hide' : ''} aria-hidden="true">
      <svg className="logo-svg" viewBox="0 0 280 120" width="280" height="120">
        <text className="logo-letter" x="80" y="100" fontSize="100">H</text>
        <text className="logo-letter" x="150" y="100" fontSize="100">D</text>
        <text className="logo-fill" x="80" y="100" fontSize="100">H</text>
        <text className="logo-fill" x="150" y="100" fontSize="100">D</text>
      </svg>
      <p className="loader-sub">{profile.title}</p>
    </div>
  )
}

/* Custom cursor, only for mouse / trackpad users. */
export function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(hover:hover) and (pointer:fine)').matches) return
    document.body.classList.add('has-cursor')
    let mx = -100, my = -100, rx = -100, ry = -100, raf

    const move = (e) => {
      mx = e.clientX; my = e.clientY
      dot.current.style.left = mx + 'px'; dot.current.style.top = my + 'px'
    }
    const over = (e) => {
      const hit = e.target.closest('a,button')
      ring.current.style.transform = `translate(-50%,-50%) scale(${hit ? 1.8 : 1})`
      ring.current.style.borderColor = hit ? 'var(--accent-d)' : 'var(--accent)'
    }
    const loop = () => {
      rx += (mx - rx) * 0.12; ry += (my - ry) * 0.12
      ring.current.style.left = rx + 'px'; ring.current.style.top = ry + 'px'
      raf = requestAnimationFrame(loop)
    }
    document.addEventListener('mousemove', move)
    document.addEventListener('mouseover', over)
    loop()
    return () => {
      document.removeEventListener('mousemove', move)
      document.removeEventListener('mouseover', over)
      cancelAnimationFrame(raf)
      document.body.classList.remove('has-cursor')
    }
  }, [])

  return (<><div id="cur" ref={dot} /><div id="cur-r" ref={ring} /></>)
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { document.body.classList.toggle('menu-open', open) }, [open])

  const toggleTheme = () => {
    const root = document.documentElement
    const current = root.getAttribute('data-theme') ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    const next = current === 'dark' ? 'light' : 'dark'
    root.setAttribute('data-theme', next)
    try { localStorage.setItem('theme', next) } catch (e) { /* ignore */ }
  }

  return (
    <nav id="nav" className={scrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo">{profile.name}</a>
      <div className="nav-right">
        <ul className="nav-links">
          {nav.map((n) => (
            <li key={n.id}><a href={`#${n.id}`} onClick={() => setOpen(false)}>{n.label}</a></li>
          ))}
        </ul>
        <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle dark mode">
          <svg className="i-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" /></svg>
          <svg className="i-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></svg>
        </button>
        <button className="icon-btn" id="menuBtn" onClick={() => setOpen(!open)} aria-label="Open menu" aria-expanded={open}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 8h16M4 16h16" /></svg>
        </button>
      </div>
    </nav>
  )
}

export function Footer() {
  return (
    <footer>
      <span className="fcopy">© {new Date().getFullYear()} {profile.name} · All rights reserved</span>
      <span className="fsig">{profile.name}</span>
    </footer>
  )
}

/* Section heading used across the page: small label + big serif title. */
export function Heading({ label, children, className = 'h2' }) {
  return (
    <div className="reveal">
      <p className="slabel">{label}</p>
      <h2 className={className}>{children}</h2>
    </div>
  )
}
