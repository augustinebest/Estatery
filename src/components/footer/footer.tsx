import "./footer.css";

function Footer() {
  return (
    <section className="s-footer">
      <div className="footer-frame">
        <div className="footer-items">
          <div>Estatery</div>
          <div className="footer-ul">
            <ul>
              <li>SELL A HOME</li>
              <li>Request an offer</li>
              <li>Pricing</li>
              <li>Reviews</li>
              <li>Stories</li>
            </ul>
            <ul>
              <li>BUY A HOME</li>
              <li>Buy</li>
              <li>Finance</li>
            </ul>
          </div>
          <div className="footer-ul">
            <ul>
              <li>BUY, RENT AND SELL</li>
              <li>Buy and sell properties</li>
              <li>Rent home</li>
              <li>Builder trade-up</li>
            </ul>
            <ul>
              <li>TERMS & PRIVACY</li>
              <li>Trust & Safety</li>
              <li>terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-ul">
            <ul>
              <li>ABOUT</li>
              <li>Company</li>
              <li>How it works</li>
              <li>Contact</li>
              <li>Investors</li>
            </ul>
            <ul>
              <li>Blog</li>
              <li>Guides</li>
              <li>FAQ</li>
              <li>Help Center</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <p>&copy; 2024 Estatery. All rights reserved</p>
          <div>
            <i className="ri-facebook-fill"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-twitter-fill"></i>
            <i className="ri-linkedin-box-fill"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
