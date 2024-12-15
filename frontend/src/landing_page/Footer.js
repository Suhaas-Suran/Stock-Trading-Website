import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col">
            <img
              className="mb-3"
              src="media/images/logo.svg"
              style={{ width: "50%" }}
              alt="logo"
            />
            <p className="text-muted" style={{ fontSize: "14px" }}>
              &copy; 2010 - 2024, Zerodha Broking Ltd.
              <br /> All rights reserved.
            </p>
          </div>
          <div className="col">
            <p>Company</p>
            {[
              "About",
              "Products",
              "Pricing",
              "Referral programme",
              "Careers",
              "Zerodha.tech",
              "Press & media",
              "Zerodha Cares (CSR)",
            ].map((link, index) => (
              <a
                key={index}
                href=""
                className="text-muted"
                style={{
                  marginBottom: "0.5rem",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                {link}
              </a>
            ))}
          </div>

          <div className="col">
            <p>Support</p>
            {[
              "Contact us",
              "Support portal",
              "Z-Connect blog",
              "List of charges",
              "Downloads & resources",
              "Videos",
              "Market overview",
              "How to file a complaint?",
              "Status of your complaints",
            ].map((link, index) => (
              <a
                key={index}
                href=""
                className="text-muted"
                style={{
                  marginBottom: "0.5rem",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                {link}
              </a>
            ))}
          </div>

          <div className="col">
            <p>Account</p>
            {["Open an account", "Fund transfer"].map((link, index) => (
              <a
                key={index}
                href=""
                className="text-muted"
                style={{
                  marginBottom: "0.5rem",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
            no.: INZ000031633. CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019. Commodity
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001
            – SEBI Registration no.: INZ000038238. Registered Address: Zerodha
            Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence
            Public School, J.P. Nagar 4th Phase, Bengaluru - 560078, Karnataka,
            India. For any complaints pertaining to securities broking, please
            write to complaints@zerodha.com; for DP-related issues, contact
            dp@zerodha.com. Please ensure you carefully read the Risk Disclosure
            Document as prescribed by SEBI.
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on the SCORES
            portal. Mandatory details for filing complaints on SCORES: Name,
            PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
            communication and speedy redressal of grievances.
          </p>

          <p>
            Investments in the securities market are subject to market risks;
            please read all related documents carefully before investing.
          </p>

          <p>
            "Prevent unauthorized transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information about your transactions directly from the Exchange on
            your mobile/email at the end of the day. Issued in the interest of
            investors. KYC is a one-time exercise while dealing in securities
            markets; once KYC is done through a SEBI-registered intermediary
            (broker, DP, mutual fund, etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write your bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non-allotment, the funds will remain in
            your bank account. As a business, we don't give stock tips and have
            not authorized anyone to trade on behalf of others. If you find
            anyone claiming to be part of Zerodha and offering such services,
            please create a ticket here."
          </p>
        </div>
      </div>
      <div class="footer-links">
        <a href="https://www.nseindia.com" class="link" target="_blank">
          NSE
        </a>
        <a href="https://www.bseindia.com" class="link" target="_blank">
          BSE
        </a>
        <a href="https://www.mcxindia.com/" class="link" target="_blank">
          MCX
        </a>
        <a href="https://zerodha.com/terms-and-conditions/" class="link" target="_blank">
          Terms & conditions
        </a>
        <a href="https://zerodha.com/policies-and-procedures/" class="link" target="_blank">
          Policies & procedures
        </a>
        <a href="https://zerodha.com/privacy-policy/" class="link" target="_blank">
          Privacy policy
        </a>
        <a href="https://zerodha.com/disclosure/" class="link" target="_blank">
          Disclosure
        </a>
        <a href="https://zerodha.com/investor-attention/" class="link" target="_blank">
          For investor's attention
        </a>
        <a href="https://zerodha.com/tos/investor-charter/" class="link" target="_blank">
          Investor charter
        </a>
      </div>
    </footer>
  );
}

export default Footer;
