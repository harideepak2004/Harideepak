import { useState } from 'react'
import { profile, about, stats, experience, aiPrinciples, skills, earlierWork } from '../data.js'
import { Heading } from './Layout.jsx'

const pad = (i) => String(i + 1).padStart(2, '0')

export function Hero() {
  return (
    <header id="hero">
      <div className="hero-left">
        <p className="hero-eyebrow enter" style={{ '--d': '.05s' }}>{profile.title} · {profile.company}</p>
        <p className="hero-greeting enter" style={{ '--d': '.12s' }}>Hello, I'm</p>
        <h1 className="hero-name enter" style={{ '--d': '.2s' }}>{profile.first}<span className="ac">{profile.last}</span></h1>
        <p className="hero-role enter" style={{ '--d': '.32s' }}>{profile.tagline}</p>
        <p className="hero-desc enter" style={{ '--d': '.4s' }}>
          Software developer at <strong>{profile.company}</strong>, building full-stack platforms with{' '}
          <strong>Django, FastAPI, React and Flutter</strong>, and multi-agent AI systems on Groq and Anthropic Claude.
        </p>
        <div className="status enter" style={{ '--d': '.48s' }}>{profile.status}</div>
        <div className="hero-btns enter" style={{ '--d': '.56s' }}>
          <a href="#work" className="btn-p">View My Work</a>
          <a href="#contact" className="btn-o">Get In Touch</a>
        </div>
      </div>
      <div className="hero-right enter" style={{ '--d': '.3s' }}>
        <div className="photo-frame">
          <div className="photo-border-outer" />
          <div className="photo-inner">
            <div className="photo-corner pc-tl" /><div className="photo-corner pc-tr" />
            <div className="photo-corner pc-bl" /><div className="photo-corner pc-br" />
            <img src={profile.photo} alt={`Portrait of ${profile.name}`} className="photo" width="300" height="380" />
          </div>
        </div>
        <p className="photo-caption">{profile.location}</p>
      </div>
      <div className="scroll-hint enter" style={{ '--d': '.8s' }}><div className="scroll-line" />Scroll</div>
    </header>
  )
}

export function About() {
  return (
    <section id="about">
      <div className="reveal">
        <p className="slabel">About Me</p>
        <h2 className="h2">Clean code, <em>real</em> products,<br />and AI that behaves</h2>
        <div className="about-body">
          {about.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </div>
      <div className="reveal" style={{ transitionDelay: '.15s' }}>
        <div className="stats-grid">
          {stats.map((s) => (
            <div className="stat" key={s.label}><div className="stat-n">{s.n}</div><div className="stat-l">{s.label}</div></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Experience() {
  return (
    <section id="experience">
      <Heading label="Experience">Where I've <em>worked</em></Heading>
      <div className="timeline reveal" style={{ transitionDelay: '.1s' }}>
        {experience.map((job) => (
          <div className={`tl-item${job.current ? ' now' : ''}`} key={job.org}>
            <p className="tl-when">{job.when}</p>
            <div>
              <h3 className="tl-org">{job.org}</h3>
              <p className="tl-role">{job.role}</p>
              <ul className="tl-list">
                {job.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export function AIPrinciples() {
  return (
    <section id="ai">
      <Heading label="AI Engineering">How I build with <em>LLMs</em></Heading>
      <div className="ai-grid reveal" style={{ transitionDelay: '.1s' }}>
        {aiPrinciples.map((a, i) => (
          <div className="ai-card" key={a.title}>
            <p className="ai-n">{pad(i)}</p>
            <h3 className="ai-t">{a.title}</h3>
            <p className="ai-d">{a.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export function Skills() {
  return (
    <section id="skills">
      <Heading label="Expertise">Tech <em>Stack</em></Heading>
      <div className="skills-grid reveal" style={{ transitionDelay: '.1s' }}>
        {skills.map((g) => (
          <div className="sg" key={g.group}>
            <p className="sg-title">{g.group}</p>
            <ul className="sk-list">{g.items.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function SiteMock() {
  return (
    <div className="ms" aria-hidden="true">
      <div className="mb"><div className="md" /><div className="md" /><div className="md" /></div>
      <div className="mc">
        <div style={{ height: 40, background: 'var(--surface2)', borderRadius: 2, marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
          <div style={{ width: 16, height: 16, borderRadius: '50%', border: '1px solid var(--accent)' }} />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 5, marginBottom: 8 }}>
          <div style={{ height: 34, background: 'var(--surface2)', borderRadius: 2 }} />
          <div style={{ height: 34, background: 'var(--surface2)', borderRadius: 2 }} />
          <div style={{ height: 34, background: 'var(--accent)', opacity: 0.2, borderRadius: 2 }} />
        </div>
        <div className="ml" style={{ width: '75%' }} /><div className="ml" style={{ width: '50%' }} />
      </div>
    </div>
  )
}

export function EarlierWork() {
  return (
    <section id="earlier">
      <Heading label="More Projects">Apps &amp; <em>websites</em></Heading>
      <div className="mini-grid reveal" style={{ transitionDelay: '.1s' }}>
        {earlierWork.map((w, i) => (
          <a className="mini" href={w.url} target="_blank" rel="noopener" key={w.title}>
            <div className="mini-img">
              {w.image ? <img src={w.image} alt={`${w.title} website`} loading="lazy" /> : <SiteMock />}
            </div>
            <div className="mini-body">
              <p className="pnum">{pad(i)} — {w.kind}</p>
              <h3 className="mini-t">{w.title}</h3>
              <p className="mini-d">{w.desc}</p>
              <div className="tags">{w.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
              <span className="plink">Live site <span className="pl-arr" /></span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export function Contact() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const submit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch(profile.formspree, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error('bad status ' + res.status)
      form.reset()
      setStatus('sent')
      setTimeout(() => setStatus('idle'), 4000)
    } catch (err) {
      setStatus('error')
    }
  }

  const btnLabel = { idle: 'Send Message', sending: 'Sending…', sent: 'Sent ✓', error: 'Send Message' }[status]
  const links = [
    { label: 'Email', href: `mailto:${profile.email}`, text: profile.email },
    { label: 'LinkedIn', href: profile.linkedin, text: profile.linkedin.replace('https://www.', '') },
    { label: 'GitHub', href: profile.github, text: profile.github.replace('https://', '') },
  ]

  return (
    <section id="contact">
      <div className="reveal">
        <p className="slabel">Let's Talk</p>
        <h2 className="contact-h">Start a<br /><em>conversation</em></h2>
        <p className="contact-sub">Open to interesting projects, collaborations and conversations about full-stack and AI products. The fastest way to reach me is the form or email.</p>
        <div className="clinks">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="clink" {...(l.href.startsWith('http') ? { target: '_blank', rel: 'noopener' } : {})}>
              <span className="cl-lbl">{l.label}</span>{l.text}
            </a>
          ))}
        </div>
      </div>
      <div className="reveal" style={{ transitionDelay: '.15s' }}>
        <form className="cform" onSubmit={submit}>
          <input type="hidden" name="_subject" value="New message from your portfolio" />
          <input className="hp" type="text" name="_gotcha" tabIndex="-1" autoComplete="off" aria-hidden="true" />
          <div className="fg"><input className="ff" type="text" name="name" id="nm" placeholder="Name" autoComplete="name" required /><label className="fl" htmlFor="nm">Name</label></div>
          <div className="fg"><input className="ff" type="email" name="email" id="em" placeholder="Email" autoComplete="email" required /><label className="fl" htmlFor="em">Email</label></div>
          <div className="fg"><input className="ff" type="tel" name="phone" id="ph" placeholder="Phone" autoComplete="tel" /><label className="fl" htmlFor="ph">Phone (optional)</label></div>
          <div className="fg"><textarea className="ff" name="message" id="mg" placeholder="Message" rows="5" required /><label className="fl" htmlFor="mg">Message</label></div>
          <button type="submit" className="fsub" disabled={status === 'sending' || status === 'sent'}>{btnLabel}</button>
          <p className={`fmsg${status === 'error' ? ' err' : ''}`} role="status" aria-live="polite">
            {status === 'sent' && "Thanks! I'll get back to you soon."}
            {status === 'error' && 'Something went wrong. Please try again or email me directly.'}
          </p>
        </form>
      </div>
    </section>
  )
}
