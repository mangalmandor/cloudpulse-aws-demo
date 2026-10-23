import React from 'react';
import { createRoot } from 'react-dom/client';
import { Activity, ArrowUpRight, Bell, CheckCircle2, Cloud, Cpu, Database, Globe2, Layers3, Rocket, ShieldCheck, Zap } from 'lucide-react';
import './style.css';

const services = [
  { name: 'Frontend', detail: 'React application', state: 'Operational', icon: Globe2, color: 'violet' },
  { name: 'API Gateway', detail: 'Demo endpoint', state: 'Operational', icon: Layers3, color: 'blue' },
  { name: 'Database', detail: 'Sample connection', state: 'Standby', icon: Database, color: 'amber' },
];

function App() {
  const [notice, setNotice] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('Overview');

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <a className="brand" href="#top" aria-label="CloudPulse home"><span className="brand-mark"><Cloud size={20} /></span><span>cloud<span className="brand-light">pulse</span></span></a>
        <div className="workspace-label">WORKSPACE</div>
        <button className={`nav-item ${activeTab === 'Overview' ? 'selected' : ''}`} onClick={() => setActiveTab('Overview')}><Activity size={18} /> Overview</button>
        <button className={`nav-item ${activeTab === 'Services' ? 'selected' : ''}`} onClick={() => setActiveTab('Services')}><Layers3 size={18} /> Services</button>
        <button className={`nav-item ${activeTab === 'Deployments' ? 'selected' : ''}`} onClick={() => setActiveTab('Deployments')}><Rocket size={18} /> Deployments</button>
        <div className="sidebar-bottom"><div className="avatar">CP</div><div><strong>Demo workspace</strong><small>Free environment</small></div><span className="more">···</span></div>
      </aside>

      <main id="top" className="main-content">
        <header className="topbar"><div className="breadcrumb">Workspace <span>/</span> <strong>{activeTab}</strong></div><div className="top-actions"><span className="live-pill"><span className="live-dot" /> All systems normal</span><button className="icon-button" aria-label="Notifications" onClick={() => setNotice(!notice)}><Bell size={18} />{notice && <span className="notification-dot" />}</button><div className="user-avatar">M</div></div></header>
        {notice && <div className="notice"><CheckCircle2 size={17} /> You're all caught up — no new notifications.</div>}

        <section className="welcome-row"><div><div className="eyebrow"><span className="eyebrow-line" /> AWS DEPLOYMENT DEMO</div><h1>Your cloud, <span>at a glance.</span></h1><p className="subtitle">A lightweight demo dashboard to test your React deployment pipeline.</p></div><button className="primary-button" onClick={() => { setNotice(true); window.scrollTo({ top: 0, behavior: 'smooth' }); }}><Rocket size={17} /> Run demo check <ArrowUpRight size={16} /></button></section>

        <section className="metric-grid" aria-label="Summary metrics">
          <article className="metric-card"><div className="metric-top"><span>Uptime</span><span className="metric-icon mint"><Activity size={18} /></span></div><div className="metric-value">99.98<span>%</span></div><div className="metric-foot"><span className="trend">↗ 0.4%</span> <span>vs. last week</span></div><div className="sparkline spark-one"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div></article>
          <article className="metric-card"><div className="metric-top"><span>Requests</span><span className="metric-icon lavender"><Zap size={18} /></span></div><div className="metric-value">24.8<span>k</span></div><div className="metric-foot"><span className="trend">↗ 12.8%</span> <span>this month</span></div><div className="sparkline spark-two"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div></article>
          <article className="metric-card"><div className="metric-top"><span>Avg. response</span><span className="metric-icon blue"><Cpu size={18} /></span></div><div className="metric-value">128<span>ms</span></div><div className="metric-foot"><span className="trend">↘ 8.2%</span> <span>faster this week</span></div><div className="sparkline spark-three"><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/><i/></div></article>
        </section>

        <section className="content-grid">
          <article className="panel service-panel"><div className="panel-heading"><div><h2>Service health</h2><p>Overview of your demo environment</p></div><button className="subtle-button" onClick={() => setActiveTab('Services')}>View services <ArrowUpRight size={14} /></button></div><div className="service-list">{services.map((service) => { const Icon = service.icon; return <div className="service-row" key={service.name}><div className={`service-icon ${service.color}`}><Icon size={19} /></div><div className="service-copy"><strong>{service.name}</strong><span>{service.detail}</span></div><span className={`status ${service.state === 'Standby' ? 'standby' : ''}`}><span />{service.state}</span></div>; })}</div><div className="panel-note"><ShieldCheck size={17} /><span>Demo data only. Connect AWS services to show live metrics.</span></div></article>

          <article className="panel deploy-panel"><div className="panel-heading"><div><h2>Latest deployment</h2><p>Your delivery pipeline</p></div><span className="success-icon"><CheckCircle2 size={19} /></span></div><div className="deploy-status"><div className="deploy-check"><CheckCircle2 size={16} /></div><div><strong>Production build</strong><span>Deployment completed successfully</span></div></div><div className="deploy-meta"><div><span>BRANCH</span><strong><span className="branch-dot" /> main</strong></div><div><span>BUILD</span><strong>#001</strong></div><div><span>TRIGGERED</span><strong>Manual demo</strong></div></div><div className="deploy-footer"><span className="tiny-check"><CheckCircle2 size={14} /> Build passed</span><span>Just now</span></div></article>
        </section>

        <section className="bottom-banner"><div className="banner-icon"><Cloud size={23} /></div><div><h3>Ready for your next deployment?</h3><p>Build locally, push to GitHub, and deploy this static site on S3 or AWS Amplify.</p></div><a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html" target="_blank" rel="noreferrer">AWS hosting guide <ArrowUpRight size={15} /></a></section>
        <footer><span>© 2026 CloudPulse Demo</span><span><span className="footer-dot" /> Demo environment <span className="footer-separator">·</span> Built with React + Vite</span></footer>
      </main>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);
