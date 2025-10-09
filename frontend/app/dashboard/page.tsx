"use client";
import './ReferralModule.css';
import logo from './logo.jpg'; // Make sure your logo is correctly imported for your setup
import { useState } from 'react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    { title: "Virtual CFO Services", desc: "Strategic financial planning and analysis", badge: "15%" },
    { title: "Incorporation & Startup Advisory", desc: "Complete business setup and registration", badge: "₹5,000" },
    { title: "GST & Income Tax Filing", desc: "Timely tax compliance and filing", badge: "12%" },
    { title: "Bookkeeping & MIS Reporting", desc: "Accurate financial records and reporting", badge: "10%" },
    { title: "Payroll, PF & ESI Management", desc: "Complete employee management solutions", badge: "₹3,000" },
    { title: "MCA & ROC Compliance", desc: "Regulatory compliance and filings", badge: "₹2,500" },
    { title: "Business Advisory", desc: "Strategic business consulting and growth advisory", badge: "20%" },
  ];

  // Tab button names
  const tabs = [
    'Services & Rates',
    'Submit Referral',
    'My Referrals',
    'Commission Wallet',
  ];

  // ---- Components for each tab ----
  function ServicesComponent() {
    return (
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
    );
  }

  function ReferralComponent() {
    return (
      <section className="submit-referral">
        <h2>Submit New Referral</h2>
        <form className="referral-form" onSubmit={e => {e.preventDefault(); alert('Referral submitted!')}}>
          <input type="text" placeholder="Client Name *" required />
          <input type="tel" placeholder="Mobile Number *" required />
          <input type="email" placeholder="Email Address" required />
          <select required>
            <option value="">Select Service</option>
            {services.map((service, i) => (
              <option key={i} value={service.title}>{service.title}</option>
            ))}
          </select>
          <textarea placeholder="Additional Notes" />
          <button type="submit" className="button-primary">Submit Referral</button>
        </form>
      </section>
    );
  }

  function ReferralsComponent() {
    return (
      <section className="my-referrals">
        <h2>My Referrals</h2>
        <table className="referrals-table">
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Date Submitted</th>
              <th>Service</th>
              <th>Status</th>
              <th>Expected Commission</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5}>No referrals found, submit your first referral to get started.</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }

  function WalletComponent() {
    return (
      <section className="commission-wallet">
        <h2>Commission Wallet</h2>
        <div className="wallet-overview">
          <div>Total Earned: ₹0.00</div>
          <div>Pending: ₹0.00</div>
          <div>Payable: ₹0.00</div>
          <div>Paid Out: ₹0.00</div>
        </div>
        <div className="wallet-actions">
          <button className="button-primary">Download Statement</button>
          <button className="button-outline">Request Payout</button>
        </div>
        <h3>Recent Transactions</h3>
        <table className="transactions-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Client</th>
              <th>Service</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={5}>No commission transactions found.</td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }

  // ---- Choose current tab's content ----
  function renderTab() {
    if (activeTab === 0) return <ServicesComponent />;
    if (activeTab === 1) return <ReferralComponent />;
    if (activeTab === 2) return <ReferralsComponent />;
    if (activeTab === 3) return <WalletComponent />;
    return null;
  }

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <img src={logo.src} alt="Accountant's Factory" className="header-logo-img" />
        <button className="button-primary">Join Network</button>
      </header>

      {/* Tabs */}
      <nav className="tabs-navigation">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            className={`tab-button${activeTab === idx ? " active-tab" : ""}`}
            onClick={() => setActiveTab(idx)}
          >
            {tab}
          </button>
        ))}
      </nav>

      {/* Main tab panel */}
      <div className="tab-content">
        {renderTab()}
      </div>

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
