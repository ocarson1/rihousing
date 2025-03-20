import logo from './logo.svg';
import './App.css';
import badges from './images/badges.png'
import ri from './images/ri.png';
import facebook from './images/facebook.svg';
import linkedin from './images/linkedin.png';
import twitter from './images/twitter.svg';
import background from './images/background.jpeg'
import React, { useState } from "react";
 



function App() {

  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  return (
    <div className="App">
      <header className="App-header section">
        <div className="nav content">

          <img id="logo" style={{ width: "80px" }} src='./images/logo.png'></img>
          <div className="nav-links">
            {/* <div class="dropdown">
              <button class="dropbtn"><div>
                Resources
                <img className="dropdown-icon" src='./images/down.svg'></img>
              </div></button>
              <div class="dropdown-content">
                <a href="#">Buyers</a>
                <a href="#">Owners</a>
                <a href="#">Renters</a>
                <a href="#">Partners</a>
                <a href="#">Mortgage Providers</a>
              </div>
            </div>
            <div class="dropdown">
              <button class="dropbtn"><div>
                About
                <img className="dropdown-icon" src='./images/down.svg'></img>
              </div></button>
              <div className="dropdown-content">
                <a href="#">Contact</a>
                <a href="#">Public Information & Notices</a>
                <a href="#">Careers</a>
                <a href="#">Employee Portal</a>
              </div>
            </div> */}
            <div className="search-container">
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="search"></input>
      <button type="submit">            <img className="search-icon" src="./images/search.svg"></img>
      </button>
    </form>
  </div>



          </div>
        </div>
      </header>
      <div id="landing-section" className="section">
        <img id="landing-image" src={background}></img>

        <div className="spacer-160">
        </div>
        <div id="landing-content" className="content">
          <div id="landing-left">
            {/* <img style={{objectFit: "contain", width:"100px"}}src={ri}></img> */}
            <h1>RIHousing <span style={{ fontWeight: "400" }}>provides loans, grants, education and assistance to help Rhode Islanders find, rent, buy, build and keep a good home.</span></h1>
            <hr></hr>

            <div className="button-wrapper">  <a>About us</a></div>




          </div>
          <div id="landing-right">
            <a className="link-lg">Buyers ➔</a>
            <a className="link-lg">Owners ➔</a>
            <a className="link-lg">Renters ➔</a>
            <a className="link-lg">Partners ➔</a>
            <a className="link-lg">Mortgage Customers ➔</a>
          </div>
        </div>
        <div className="spacer-160">
          
        </div>
 
       
      </div>
      <div className="accent-block"></div>
      <footer className="footer-section section">
        <div className="spacer-64"></div>

        <div className="footer-content">
        <div className="footer-links">
            <div className="bold">Quick Links</div>
            <div className="link">Latest Requests for Proposals (RFPs)</div>
            <div className="link">Housing Choice Voucher Program Application</div>
            <div className="link">Past Public Meetings</div>

          </div>
          <div className="footer-links bold">
            <a className="link-lg">About ➔</a>
            <a className="link-lg">Announcements ➔</a>
            <a className="link-lg">Events ➔</a>
            <a className="link-lg">Careers ➔</a>
            <a className="link-lg">Contact ➔</a>
            <a className="link-lg">Research & Reports ➔</a>

          </div>
          <img className="footer-badges" src='./images/badges.png'></img>

          {/* <div className="footer-links">
            <div className="button-wrapper">Buyers</div>
            <div className="link">RI REALTORS® Homebuyer Grant</div>
            <div className="link">Mortgage Programs</div>
            <div className="link">Homebuyer Education</div>
            <div className="link">Mortgage Calculator</div>

            <div className="link">Lender Options</div>

            <div className="link">First-Time Homebuyer Loans</div>
            <div className="link">Homebuyer Renovation Loans / 203(k)</div>
            <div className="link">15kDPA</div>
            <div className="link">FirstGenHomeRI</div>
            <div className="link">Extra Assistance</div>
            <div className="link">Move Up & Refinance Loans</div>
            <div className="link">Participating Lenders</div>
            <div className="link">Loan Center</div>





          </div>
          <div className="footer-links">
            <div className="button-wrapper">Owners</div>
            <div className="link">Homeowner Assistance</div>
            <div className="link">Homeowner Programs</div>
            <div className="link">Existing Customers</div>
            <div className="link">Move Up & Refinance Loans</div>
            <div className="link">Leadsafe Homes Program</div>
            <div className="link">Septic / Sewer</div>
            <div className="link">Access Independence II</div>

          </div>
          <div className="footer-links">
            <div className="button-wrapper">Renters</div>
            <div className="link">Renter Programs</div>
            <div className="link">Centralized Waitlist</div>
            <div className="link">Renter Resources</div>
            <div className="link">Scam Protection</div>
          </div>
          <div className="footer-links">
            <div className="button-wrapper">Partners</div>
            <div className="link">Participating Lenders & Mortgage Brokers</div>
            <div className="link">Real Estate Agents</div>
            <div className="link">Builders & Developers</div>
            <div className="link">Property Managers & Owners</div>
            <div className="link">Monitoring Agents</div>
            <div className="link">Government & Non-profits</div>
            <div className="link">Investors</div>

          </div>
          <div className="footer-links">
            <div className="button-wrapper">More</div>
            <div className="link">Mortgage Customers</div>
            <div className="link">Landlords</div>
            <div className="link">Latest Requests for Proposals (RFPs)</div>
            <div className="link">Housing Choice Voucher Program Application</div>
            <div className="link">Past Public Meetings</div>
            <div className="link">Our Team</div>
            <div className="link">Events</div>
            <div className="link">Careers</div>
            <div className="link">Research & Reports</div>



          </div> */}
          {/* <div className="footer-links">
            <div className="link-sm">Contact ➔</div>
            <div className="link-sm">Public Information & Notices ➔</div>
            <div className="link-sm">Careers ➔</div>
            <div className="link-sm">Employee Portal ➔</div>
          </div> */}
          {/* <div className="footer-badges">
            <img src='./images/badges.png'></img>
          </div> */}

        </div>
        <div className="spacer-120"></div>
        <div className="socials content">
          <img className="social" src={twitter}></img>          <img className="social" src={facebook}></img>
          <img className="social" src={linkedin}></img>

        </div>

        <div className="footer-bottom content">
          <div></div>

          {/* <label className="language-switch">
            <input type="checkbox" checked={language === "es"} onChange={toggleLanguage} />
            <span className="slider">
              <span className="lang en">English</span>
              <span className="lang es">Español</span>
            </span>
          </label> */}

          <div className="bottom-links">
            <div>English (EN)</div>
            <div>Employee Login</div>
            <div>Public Information & Notices</div>
            <div>© 2025 RIHousing</div>
            </div>
        </div>

      </footer>

    </div>
  );
}

export default App;
