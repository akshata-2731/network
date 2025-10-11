"use client";
import './ReferralModule.css';
import { useRouter } from 'next/navigation';

// Icon SVGs for services
const icons = [
  // Virtual CFO
  <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><rect width="36" height="36" rx="8" fill="#089383"/><path d="M25 21.174V13.5A2.5 2.5 0 0022.5 11h-9A2.5 2.5 0 0011 13.5v9A2.5 2.5 0 0013.5 25h7.674A2.5 2.5 0 0025 21.174zM16.25 17h3.5m-3.5 4h5.25" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  // Incorporation
  <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><rect width="36" height="36" rx="8" fill="#c026d3"/><path d="M17 12h2v4h-2zM21 27H15a2 2 0 01-2-2V15a2 2 0 012-2h6a2 2 0 012 2v10a2 2 0 01-2 2z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  // GST
  <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><rect width="36" height="36" rx="8" fill="#059669"/><path d="M18 13v10m5-5H13" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  // Bookkeeping
  <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><rect width="36" height="36" rx="8" fill="#f59e42"/><path d="M12 21h12M12 17h12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  // Payroll
  <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><rect width="36" height="36" rx="8" fill="#2563eb"/><path d="M20 13v3a2 2 0 01-4 0v-3m7 7v3a2 2 0 01-4 0v-3m-7 7v-3a2 2 0 014 0v3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  // MCA
  <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><rect width="36" height="36" rx="8" fill="#14b8a6"/><path d="M24 13v3a2 2 0 01-4 0v-3m-4 7v3a2 2 0 014 0v-3m-7 7v-3a2 2 0 014 0v3" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  // Advisory
  <svg width="36" height="36" fill="none" viewBox="0 0 36 36"><rect width="36" height="36" rx="8" fill="#f59e42"/><circle cx="18" cy="18" r="6" stroke="#fff" strokeWidth="2"/><path d="M18 15v3l2 2" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
];

export default function ReferralModule() {
  const router = useRouter();

  const services = [
    { title: "Virtual CFO Services", desc: "Strategic financial planning and analysis", badge: "15%" },
    { title: "Incorporation & Startup Advisory", desc: "Complete business setup and registration", badge: "₹5,000" },
    { title: "GST & Income Tax Filing", desc: "Timely tax compliance and filing", badge: "12%" },
    { title: "Bookkeeping & MIS Reporting", desc: "Accurate financial records and reporting", badge: "10%" },
    { title: "Payroll, PF & ESI Management", desc: "Complete employee management solutions", badge: "₹3,000" },
    { title: "MCA & ROC Compliance", desc: "Regulatory compliance and filings", badge: "₹2,500" },
    { title: "Business Advisory", desc: "Strategic business consulting and growth advisory", badge: "20%" },
  ];

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Business Consultant",
      text: "Accountants Factory helped my clients stay compliant and focus on growth. The referral program has been incredibly rewarding.",
    },
    {
      name: "Priya Sharma",
      role: "CA Firm Partner",
      text: "Professional service delivery and transparent commission structure. Highly recommend their referral network.",
    },
    {
      name: "Amit Patel",
      role: "Financial Advisor",
      text: "Seamless process from referral to payout. My clients are always satisfied with their services.",
    },
  ];

  const faqs = [
    { q: "How do I join the referral program?", a: "Click on 'Join the Network' and complete the signup process to become a referral partner." },
    { q: "When will I receive my reward?", a: "Referral rewards are credited after the successful completion of client onboarding and payment." },
    { q: "Is there a limit on the number of referrals?", a: "No, you can refer as many clients as you wish and earn commissions on all successful referrals." },
    { q: "How do I track my referrals?", a: "Access your dashboard to see real-time updates on all your referrals and rewards." },
    { q: "What services can I refer clients for?", a: "You can refer for all listed accounting, compliance, and advisory services." },
  ];

  // Handler for button click
  const handleJoinClick = () => {
    router.push('/login');
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="header-logo">
          <img src="/logo.jpg" alt="Logo" />
          <span>Accountant’s Factory</span>
        </div>
        <button className="button-primary" onClick={handleJoinClick}>
          Join Network
        </button>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-trusted">
          <svg width="20" height="20" fill="none"><path d="M10 2v6m0 0-2 2m2-2 2 2M3.42 8.93l1.42-1.42m0 0L6.83 6.4m0 0 1.42 1.42m-6.35 3.76a8.001 8.001 0 0116 0h-16z" stroke="#089383" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          &nbsp; Trusted by 500+ Partners
        </div>
        <h1 className="hero-title">
          Welcome to Accountants<br />
          Factory <span>Referral Network</span>
        </h1>
        <p className="hero-subtitle">
          Connect businesses with professional accounting services and earn attractive commissions.<br />Join our trusted network of referral partners today.
        </p>

        {/* Stats */}
        <div className="stats">
          <div className="stat-card">
            <div className="stat-value">
              <svg width="20" height="20" fill="none" style={{verticalAlign:"middle",marginRight:"4px"}}><path d="M10 2v16M2 10h16" stroke="#089383" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              ₹25.0L+
            </div>
            <div className="stat-label">Commissions Paid</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">
              <svg width="20" height="20" fill="none" style={{verticalAlign:"middle",marginRight:"4px"}}><circle cx="10" cy="10" r="8" stroke="#089383" strokeWidth="2"/><path d="M6 10h8" stroke="#089383" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              1200+
            </div>
            <div className="stat-label">Successful Referrals</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">
              <svg width="20" height="20" fill="none" style={{verticalAlign:"middle",marginRight:"4px"}}><path d="M10 2a8 8 0 018 8c0 1.657-.672 3.157-1.757 4.243C15.157 15.928 13.657 16.6 12 16.6c-1.657 0-3.157-.672-4.243-1.757A5.003 5.003 0 012 10a8 8 0 018-8z" stroke="#089383" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              500+
            </div>
            <div className="stat-label">Active Partners</div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="cta-buttons">
          <button className="button-primary" onClick={handleJoinClick}>
            Join the Network
          </button>
          <button className="button-outline">Learn More</button>
        </div>
      </section>

      {/* Teal CTA */}
      <section className="hero-cta">
        <h2>
          <svg width="28" height="28" fill="none" style={{verticalAlign: "middle", marginRight: "6px"}}><path d="M14 2v6m0 0-2 2m2-2 2 2M6.83 6.4l1.42 1.42m0 0L10 10m0 0 1.42-1.42M2 10a8.001 8.001 0 0116 0h-16z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Be the Link Between Growth & Compliance
        </h2>
        <p>
          Help businesses succeed while earning attractive rewards
        </p>
        <button className="hero-cta-button" onClick={handleJoinClick}>
          Refer & Earn Now
        </button>
      </section>

      {/* Services */}
      <section className="services">
        <h2>Services & Commission Structure</h2>
        <p>Refer clients for our comprehensive accounting services and earn competitive commissions</p>
        <div className="services-grid">
          {services.map(({ title, desc, badge }, i) => (
            <div key={i} className="service-card">
              <div className="service-icon">{icons[i]}</div>
              <div className="service-info">
                <h3 className="service-title">{title}</h3>
                <p className="service-desc">{desc}</p>
              </div>
              <div className="service-badge">{badge}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Partners Say</h2>
        <p className="testimonial-intro">Join hundreds of satisfied referral partners</p>
        <div className="testimonial-grid">
          {testimonials.map(({ name, role, text }, i) => (
            <div key={i} className="testimonial-card">
              <div className="stars">{'★'.repeat(5)}</div>
              <div className="testimonial-text">"{text}"</div>
              <div className="testimonial-name">{name}</div>
              <div className="testimonial-role">{role}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqs.map(({ q, a }, i) => (
          <div key={i} className="faq-item">
            <div className="faq-question">{q}</div>
            <div className="faq-answer">{a}</div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h3>Ready to Start Earning?</h3>
        <p>Join our referral network today and start earning commissions on every successful referral</p>
        <button className="cta-button" onClick={handleJoinClick}>Join the Referral Network</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-section footer-about">
          <img src="/logo.jpg" alt="Accountants Factory Logo" className="footer-logo-img" />
          <div>
            <h4>Accountant's Factory</h4>
            <p>Professional accounting services and referral network helping businesses grow with compliance.</p>
            <p><span role="img" aria-label="phone">📞</span> &nbsp;91766 71206</p>
          </div>
        </div>
        <div className="footer-section">
          <h4>Services</h4>
          <p>
            Virtual CFO<br />
            Tax Filing<br />
            Compliance<br />
            Bookkeeping<br />
            Business Advisory
          </p>
        </div>
        <div className="footer-section">
          <h4>Support</h4>
          <p>
            Help Center<br />
            Contact Us<br />
            Partner Portal<br />
            Documentation
          </p>
        </div>
      </footer>
    </div>
  );
}
