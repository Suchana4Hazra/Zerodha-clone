import React from "react";

function Footer() {
  return (
    <div className="container footer footer--top-border">
      <div className="row mt-5" style={{ lineHeight: "200%" }}>
        <div className="col-lg-3 col-sm-12 fs-5">
          <img src="media/images/logo.svg" style={{ width: "25%" }} />
          <p className="text-muted para1">
            <span>© 2010 - 2025, Zerodha</span>
            <span>Broking Ltd.</span>
            <span>All rights reserved.</span>
          </p>
          <div className="social-media-icons mb-4">
            <button style={{cursor:'pointer', background:'none', border:'none'}}><i class="fa fa-twitter-square" aria-hidden="true"></i></button>
            <button style={{cursor:'pointer', background:'none', border:'none'}}><i class="fa fa-facebook-official" aria-hidden="true"></i></button>
            <button style={{cursor:'pointer', background:'none', border:'none'}}><i class="fa fa-instagram" aria-hidden="true"></i></button>
            <button style={{cursor:'pointer', background:'none', border:'none'}}><i class="fa fa-linkedin-square" aria-hidden="true"></i></button>
          </div>
          <div className="social-media-icons-bottom mb-4">
            <button style={{cursor:'pointer', background:'none', border:'none'}}><i class="fa fa-youtube-play" aria-hidden="true"></i></button>
            <button style={{cursor:'pointer', background:'none', border:'none'}}><i class="fa fa-whatsapp" aria-hidden="true"></i></button>
            <button style={{cursor:'pointer', background:'none', border:'none'}}><i class="fa fa-telegram" aria-hidden="true"></i></button>
          </div>
        </div>
        <div className="col-lg-2 col-sm-12 footer_link mb-5">
          <h5>Account</h5>
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>Open demat account</button>
          <br />
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>Minor demat account</button>
          <br />
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>NRI demat account</button>
          <br />
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>Commodity</button>
          <br />
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>Dematerialisation</button>
          <br />
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>Fund transfer</button>
          <br />
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>MTF</button>
          <br />
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>Referral program</button>
          <br />
        </div>
        <div className="col-lg-2 col-sm-12 footer_link mb-5">
          <h5>Support</h5>
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>Contact us</button>
          <br />
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>Support portal</button>
          <br />
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>How to file a complaint?</button>
          <br />
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>Status of your complaints</button>
          <br />
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>Bulletin</button>
          <br />
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>Circular</button>
          <br />
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>Z-Connect blog</button>
          <br />
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>Downloads</button>
          <br />
        </div>
        <div className="footer_link col-lg-2 col-sm-12 mb-5">
          <h5>Company</h5>
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>About</button>
          <br />
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>Philosophy</button>
          <br />
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>Press & media</button>
          <br />
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>Careers</button>
          <br />
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>Zerodha Cares (CSR)</button>
          <br />
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>Zerodha.tech</button>
          <br />
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>Open source</button>
          <br />
        </div>
        <div className="col-lg-3 col-sm-12 footer_link mb-5">
          <h5>Quick links</h5>
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>Upcoming IPOs</button>
          <br />
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>Brokerage charges</button>
          <br />
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>Market holidays</button>
          <br />
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>Economic calendar</button>
          <br />
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>Calculators</button>
          <br />
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>Markets</button>
          <br />
          <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit', textAlign:'left'}}>Sectors</button>
          <br />
        </div>
      </div>
      <p className="text-muted footer-para">
        Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
        no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking
        Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through
        Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration no.:
        INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th
        Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
        Bengaluru - 560078, Karnataka, India. For any complaints pertaining to
        securities broking please write to{" "}
        <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit'}}>complaints@zerodha.com</button>, for DP related to{" "}
        <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit'}}>dp@zerodha.com</button>. Please ensure you carefully read the
        Risk Disclosure Document as prescribed by SEBI | ICF <br />
        <br />
        Procedure to file a complaint on <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit'}}>SEBI SCORES</button>: Register
        on SCORES portal. Mandatory details for filing complaints on SCORES:
        Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
        Communication, Speedy redressal of the grievances <br />
        <br />
        <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit'}}>Smart Online Dispute Resolution</button> |{" "}
        <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit'}}>Grievances Redressal Mechanism </button>
        <br />
        <br />
        Investments in securities market are subject to market risks; read all
        the related documents carefully before investing. <br />
        <br />
        Attention investors: 1) Stock brokers can accept securities as margins
        from clients only by way of pledge in the depository system w.e.f
        September 01, 2020. 2) Update your e-mail and phone number with your
        stock broker / depository participant and receive OTP directly from
        depository on your e-mail and/or mobile number to create pledge. 3)
        Check your securities / MF / bonds in the consolidated account statement
        issued by NSDL/CDSL every month. <br />
        <br />
        India's largest broker based on networth as per NSE.{" "}
        <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit'}}>NSE broker factsheet</button>
        <br />
        <br />
        "Prevent unauthorised transactions in your account. Update your mobile
        numbers/email IDs with your stock brokers. Receive information of your
        transactions directly from Exchange on your mobile/email at the end of
        the day. Issued in the interest of investors. KYC is one time exercise
        while dealing in securities markets - once KYC is done through a SEBI
        registered intermediary (broker, DP, Mutual Fund etc.), you need not
        undergo the same process again when you approach another intermediary."
        Dear Investor, if you are subscribing to an IPO, there is no need to
        issue a cheque. Please write the Bank account number and sign the IPO
        application form to authorize your bank to make payment in case of
        allotment. In case of non allotment the funds will remain in your bank
        account. As a business we don't give stock tips, and have not authorized
        anyone to trade on behalf of others. If you find anyone claiming to be
        part of Zerodha and offering such services, please{" "}
        <button style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit'}}>create a ticket here</button>. <br />
      </p>

      <div className="mb-4 px-4">
        <button className="footer-downlink" style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit'}}>
          NSE
        </button>
        <button className="footer-downlink" style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit'}}>
          BSE
        </button>
        <button className="footer-downlink" style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit'}}>
          MCX
        </button>
        <button className="footer-downlink" style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit'}}>
          Terms & conditions{" "}
        </button>
        <button className="footer-downlink" style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit'}}>
          Policies & procedures{" "}
        </button>
        <button className="footer-downlink" style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit'}}>
          Privacy policy{" "}
        </button>
        <button className="footer-downlink" style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit'}}>
          Disclosure{" "}
        </button>
        <button className="footer-downlink" style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit'}}>
          For investor's{" "}
        </button>
        <button className="footer-downlink" style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit'}}>
          attention{" "}
        </button>
        <button className="footer-downlink" style={{background:'none', border:'none', cursor:'pointer', padding:0, color:'inherit'}}>
          investor charter{" "}
        </button>
      </div>
    </div>
  );
}

export default Footer;
