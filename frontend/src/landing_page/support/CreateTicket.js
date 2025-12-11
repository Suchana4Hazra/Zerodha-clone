import React, { useState } from 'react';

function CreateTicket() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      id: 'account-opening',
      title: 'Account Opening',
      icon: '➕',
      links: [
        { text: 'Resident individual', url: '#' },
        { text: 'Minor', url: '#' },
        { text: 'Non Resident Indian (NRI)', url: '#' },
        { text: 'Company, Partnership, HUF and LLP', url: '#' },
        { text: 'Glossary', url: '#' }
      ]
    },
    {
      id: 'zerodha-account',
      title: 'Your Zerodha Account',
      icon: '👤',
      links: [
        { text: 'Login credentials', url: '#' },
        { text: 'Your Profile', url: '#' },
        { text: 'Account modification and segment addition', url: '#' },
        { text: 'CMR & DP ID', url: '#' },
        { text: 'Nomination', url: '#' }
      ]
    },
    {
      id: 'kite',
      title: 'Kite',
      icon: '↻',
      links: [
        { text: 'Trading FAQs', url: '#' },
        { text: 'Kite web and mobile', url: '#' },
        { text: 'Trading platforms', url: '#' },
        { text: 'Kite features', url: '#' }
      ]
    },
    {
      id: 'funds',
      title: 'Funds',
      icon: '€',
      links: [
        { text: 'Fund withdrawal', url: '#' },
        { text: 'Adding funds', url: '#' },
        { text: 'Adding bank accounts', url: '#' },
        { text: 'eMandates', url: '#' }
      ]
    },
    {
      id: 'console',
      title: 'Console',
      icon: '⊙',
      links: [
        { text: 'IPO', url: '#' },
        { text: 'Portfolio', url: '#' },
        { text: 'Funds statement', url: '#' },
        { text: 'Profile', url: '#' }
      ]
    },
    {
      id: 'coin',
      title: 'Coin',
      icon: '◐',
      links: [
        { text: 'Understanding mutual funds', url: '#' },
        { text: 'Coin app', url: '#' },
        { text: 'Coin web', url: '#' },
        { text: 'Transactions and reports', url: '#' }
      ]
    }
  ];

  const quickLinks = [
    { text: 'Track account opening', url: '#' },
    { text: 'Track segment activation', url: '#' },
    { text: 'Intraday margins', url: '#' },
    { text: 'Kite user manual', url: '#' },
    { text: 'Learn how to create a ticket', url: '#' }
  ];

  const notifications = [
    {
      text: 'Quantity Freeze Limits for Indices from November 03, 2025',
      url: '#'
    },
    {
      text: 'Latest Intraday leverages and Square-off timings',
      url: '#'
    }
  ];

  return (
    <section className="create-ticket-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {sections.map((section) => (
              <div key={section.id} className="card mb-3">
                <div
                  className="card-body d-flex align-items-center justify-content-between py-3"
                  onClick={() => toggleSection(section.id)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="d-flex align-items-center">
                    <span className="me-3 fs-5" style={{ 
                      width: '40px', 
                      height: '40px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      backgroundColor: '#e8f4fd',
                      borderRadius: '50%',
                      color: '#0066cc'
                    }}>
                      {section.icon}
                    </span>
                    <h5 className="mb-0">{section.title}</h5>
                  </div>
                  <i className={`fa fa-chevron-${openSection === section.id ? 'up' : 'down'}`}></i>
                </div>
                {openSection === section.id && (
                  <div className="card-body border-top pt-4 pb-3">
                    <ul className="list-unstyled mb-0">
                      {section.links.map((link, index) => (
                        <li key={index} className="mb-3">
                          <a href={link.url} className="text-primary text-decoration-none">
                            • {link.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="col-lg-4">
            <div className="card mb-3 border-start border-warning border-4">
              <div className="card-body">
                <ul className="list-unstyled mb-0">
                  {notifications.map((notification, index) => (
                    <li key={index} className="mb-3">
                      <a href={notification.url} className="text-primary text-decoration-none">
                        • {notification.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="card">
              <div className="card-body">
                <h5 className="mb-4">Quick links</h5>
                <ol className="ps-3">
                  {quickLinks.map((link, index) => (
                    <li key={index} className="mb-3">
                      <a href={link.url} className="text-primary text-decoration-none">
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CreateTicket;