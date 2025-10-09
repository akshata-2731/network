"use client";
import './ReferralModule.css';
import { useRouter } from 'next/navigation';

export default function Home() {
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
    <div className="header-logo flex items-center space-x-2">
  <img src="/logo.jpg" alt="Logo" className="h-10 w-10 rounded-full" />
  <span className="font-semibold text-lg">Accountant's Factory</span>
  <button className="button-primary" onClick={handleJoinClick}>
    Join Network
  </button>
</div>

      {/* Hero */}
      <section className="hero">
        <div>Trusted by 500+ Partners</div>
        <h1 className="hero-title">
          Welcome to Accountant's Factory <span>Referral Network</span>
        </h1>
        <p className="hero-subtitle">
          Connect businesses with professional accounting services and earn attractive commissions. Join our trusted network of referral partners today.
        </p>
        <div className="stats">
          <div className="stat-card">
            <div className="stat-value">₹25.0L+</div>
            <div className="stat-label">Commissions Paid</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">1200+</div>
            <div className="stat-label">Successful Referrals</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">500+</div>
            <div className="stat-label">Active Partners</div>
          </div>
        </div>
        <div className="cta-buttons">
          <button className="button-primary" onClick={handleJoinClick}>
            Join the Network
          </button>
          <button className="button-outline">Learn More</button>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <h2>Services & Commission Structure</h2>
        <p>Refer clients for our comprehensive accounting services and earn competitive commissions</p>
        <div className="services-grid">
          {services.map(({ title, desc, badge }, i) => (
            <div key={i} className="service-card">
              <div className="service-badge">{badge}</div>
              <h3 className="service-title">{title}</h3>
              <p className="service-desc">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>What Our Partners Say</h2>
        <div className="testimonial-grid">
          {testimonials.map(({ name, role, text }, i) => (
            <div key={i} className="testimonial-card">
              <div className="stars">★★★★★</div>
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
      <p>
        <span role="img" aria-label="phone">📞</span>
        &nbsp;91766 71206
      </p>
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
