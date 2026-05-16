import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="nav">

      <div className="logo-box">

        <img
  src={process.env.PUBLIC_URL + "/images/logo.jpg"}
  alt="Easy Yatra Holidays"
  className="logo-img"
/>

        <h2>Easy Yatra Holidays</h2>

      </div>

      <ul className="menu">

        <li>
          <a href="#home">Home</a>
        </li>

        <li>
          <a href="#about">About Us</a>
        </li>

        <li>
          <a href="#destination">Destination</a>
        </li>

        <li>
          <a href="#gallery">Gallery</a>
        </li>

        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

      <div className="phone">
        📞 +91 94832 39593
      </div>

    </header>
  );
}

export default Navbar;