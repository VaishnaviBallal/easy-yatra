import "../styles/Footer.css";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer" id="contact">

      <div className="footer-container">

        {/* Company Info */}
        <div className="footer-section">

          <h2>Easy Yatra Holidays</h2>

          <p>A unit of Akarsh Enterprises</p>

         

          <p>📧 easyyatraholidays@gmail.com</p>



        </div>

        {/* Team Section */}
        <div className="footer-section">

          <h2>Meet the Team</h2>

          <h3>Vishwas Pai</h3>

          <p>Udupi, Karnataka</p>

          <p>Ex Data Scientist</p>

          <p>📞 +91 94832 39593</p>

          <p>
            Founder & Tour Expert: Passionate Udupi local with hands-on
            experience in pilgrimage tours and international tours.
          </p>

        </div>

        {/* Contact CTA */}
        <div className="footer-section">

          <h2>Get in Touch</h2>

          <p>
            Ready for your next Yatra?
          </p>

          <p>
            DM us for brochures or custom itineraries.
          </p>

          <button className="footer-btn">
            Contact Now
          </button>
<a
  href="https://instagram.com/easyyatraholidays"
  target="_blank"
  rel="noreferrer"
  className="social-link"
>
 <FaInstagram className="insta-icon" />

</a>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Easy Yatra Holidays. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;