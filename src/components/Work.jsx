import { caseStudies } from '../data.js'
import { Heading } from './Layout.jsx'

const icons = {
  user: <><circle cx="12" cy="8" r="3.5" /><path d="M5 20c1.2-3.6 3.8-5.5 7-5.5s5.8 1.9 7 5.5" /></>,
  mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></>,
  shield: <><path d="M12 3l8 4v5c0 4.4-3.4 8.2-8 9-4.6-.8-8-4.6-8-9V7z" /><path d="M8.5 12l2.5 2.5 4.5-5" /></>,
  calendar: <><rect x="3" y="5" width="18" height="16" rx="2" /><path d="M3 10h18M8 3v4M16 3v4" /></>,
  card: <><rect x="2.5" y="5.5" width="19" height="13" rx="2" /><path d="M2.5 10h19M6 15h4" /></>,
  spark: <><path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z" /><path d="M18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8z" /></>,
}

/* ── Diagram building blocks ── */
function Node({ x, y, w, h, title, sub, variant = '' }) {
  const cx = x + w / 2
  const ty = sub ? y + h / 2 - 3 : y + h / 2 + 4
  return (
    <g>
      <rect className={`d-box ${variant}`} x={x} y={y} width={w} height={h} rx="8" />
      <text className="d-t" x={cx} y={ty} textAnchor="middle">{title}</text>
      {sub && <text className="d-s" x={cx} y={ty + 16} textAnchor="middle">{sub}</text>}
    </g>
  )
}
const Arrow = ({ d, id }) => <path className="d-ln flow" d={d} markerEnd={`url(#${id})`} />
const Line = ({ d }) => <path className="d-ln" d={d} />
const Marker = ({ id }) => (
  <defs>
    <marker id={id} viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M0 0L8 4L0 8z" className="d-arr" />
    </marker>
  </defs>
)

function SuperAgentDiagram() {
  const m = 'a1'
  return (
    <svg viewBox="0 0 440 340" role="img" aria-label="Architecture: React and Flutter clients talk to a Django core, which delegates to an Orchestrator Agent in FastAPI that coordinates email, document and six more domain agents on an LLM">
      <Marker id={m} />
      <Node x={70} y={16} w={140} h={44} title="React Web" sub="web client" />
      <Node x={230} y={16} w={140} h={44} title="Flutter App" sub="mobile client" />
      <Arrow id={m} d="M140 60V94" /><Arrow id={m} d="M300 60V94" />
      <Node x={50} y={98} w={340} h={50} title="Django · DRF Core" sub="auth · users · tasks · history" />
      <Arrow id={m} d="M220 148V182" />
      <Node x={50} y={186} w={340} h={50} title="Orchestrator Agent" sub="FastAPI · built on the Base Agent" variant="hi" />
      <Line d="M220 236V254M64 254H376" />
      {[64, 168, 272, 376].map((x) => <Arrow key={x} id={m} d={`M${x} 254V270`} />)}
      <Node x={16} y={274} w={96} h={52} title="Email Ops" sub="Gmail OAuth" />
      <Node x={120} y={274} w={96} h={52} title="Documents" sub="Google Drive" />
      <Node x={224} y={274} w={96} h={52} title="+6 agents" sub="finance · QA" />
      <Node x={328} y={274} w={96} h={52} title="LLM" sub="Groq · Claude" variant="ext" />
    </svg>
  )
}

function AuraDiagram() {
  const m = 'a2'
  return (
    <svg viewBox="0 0 440 340" role="img" aria-label="Architecture: a React dashboard calls a Django REST API, which runs booking, patient and inventory, Stripe billing and AI assistant modules on PostgreSQL">
      <Marker id={m} />
      <Node x={120} y={16} w={200} h={44} title="React Dashboard" sub="Netlify · JWT login" />
      <Arrow id={m} d="M220 60V94" />
      <Node x={50} y={98} w={340} h={50} title="Django 5 · DRF API" sub="Render · REST + JWT" variant="hi" />
      <Line d="M220 148V166M64 166H376" />
      {[64, 168, 272, 376].map((x) => <Arrow key={x} id={m} d={`M${x} 166V184`} />)}
      <Node x={16} y={188} w={96} h={52} title="Booking" sub="overlap checks" />
      <Node x={120} y={188} w={96} h={52} title="Patients" sub="+ inventory" />
      <Node x={224} y={188} w={96} h={52} title="Stripe" sub="EUR billing" variant="ext" />
      <Node x={328} y={188} w={96} h={52} title="AI Assistant" sub="Groq · guarded" variant="ext" />
      <Line d="M64 240V258H376V240M168 240V258M272 240V258" />
      <Arrow id={m} d="M220 258V280" />
      <Node x={120} y={284} w={200} h={44} title="PostgreSQL" sub="Render" variant="db" />
    </svg>
  )
}

const diagrams = { superAgent: SuperAgentDiagram, aura: AuraDiagram }

function Roster({ tiers }) {
  const total = tiers.reduce((n, t) => n + t.agents.length, 0)
  return (
    <div className="roster">
      <div className="roster-head">
        <p className="roster-t">Agent roster</p>
        <p className="roster-s">{total} agents · {tiers.map((t) => `${t.agents.length} ${t.name.toLowerCase()}`).join(' · ')}</p>
      </div>
      {tiers.map((t) => (
        <div className="tier-block" key={t.tier}>
          <p className="tier"><span>{t.tier}</span>{t.name}</p>
          <div className="r-grid">
            {t.agents.map((a) => (
              <div className={`agent${t.core ? ' core' : ''}`} key={a.name}>
                <div><p className="a-n">{a.name}</p><p className="a-d">{a.area}</p></div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function CaseStudy({ c, index }) {
  const Diagram = diagrams[c.diagram]
  return (
    <article className={`case reveal${index % 2 ? ' flip' : ''}`}>
      <div className="cinfo">
        <div className="c-eyebrow">
          <span className="c-num">{String(index + 1).padStart(2, '0')}</span>
          <span className="c-kind">{c.kind}</span>
          <span className="c-org">{c.org}</span>
        </div>
        <h3 className="ptitle">{c.title}</h3>
        <p className="pdesc">{c.desc}</p>
        <div className="hl">
          {c.highlights.map((h) => (
            <div className="hl-item" key={h.title}>
              <span className="hl-ico"><svg viewBox="0 0 24 24">{icons[h.icon]}</svg></span>
              <div><p className="hl-t">{h.title}</p><p className="hl-d">{h.text}</p></div>
            </div>
          ))}
        </div>
        <div className="tags">{c.tags.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
        {c.demo && (
          <div className="c-actions">
            <a href={c.demo} target="_blank" rel="noopener" className="c-btn">Live demo <span className="pl-arr" /></a>
            {c.demoNote && <p className="c-note">{c.demoNote}</p>}
          </div>
        )}
      </div>
      <div className="cvis">
        <div className="cvis-bar"><span /><span /><span /><p>{c.diagramLabel}</p></div>
        <div className="cvis-body">{Diagram && <Diagram />}</div>
      </div>
      {c.roster && <Roster tiers={c.roster} />}
    </article>
  )
}

export default function Work() {
  return (
    <section id="work">
      <Heading label="Featured Work">Selected <em>case studies</em></Heading>
      {caseStudies.map((c, i) => <CaseStudy c={c} index={i} key={c.title} />)}
    </section>
  )
}
