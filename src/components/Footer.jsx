import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className="footer-container">
      <img src="icons/logo.svg" alt="logo" />

      <div className="footer-address-container">
        <div className="footer-address">
          <p>794 Mcallister St</p>
          <p>San Francisco,. California(CA), 94102</p>
        </div>

        <div className="footer-contact-container">
          <p>(415) 829-7935</p>
          <p>Contact@Unbranded.com</p>
        </div>
      </div>

      <div className="footer-links-container">
        <div className="footer-links">
          <p>About</p>
          <p>Available Stores</p>
          <p>Authorised Merchants</p>
          <p>Our Partners</p>
          <p>Contact Us</p>
          <p>Facebook</p>
          <p>X/Twitter</p>
          <p>LinkedIn</p>
          <p>Pinterest</p>
          <p>Instagram</p>
        </div>

        <p>&copy; 2024 Unbranded. All rights reserved.</p>
      </div>

      <img src="icons/top.svg" alt="back-to-top" />
    </footer>
  );
};

export default Footer;
