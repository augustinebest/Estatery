import "./navbar.css";

function Navbar() {
  return (
    <nav className="">
      <div className="">
        {/* Logo */}
        <div className="">
          <div>Estatery</div>
        </div>

        {/* Navigation Links */}
        <ul className="">
          <li>
            <a href="!#">Rent</a>
          </li>
          <li>
            <a href="!#">Buy</a>
          </li>
          <li>
            <a href="!#">Sell</a>
          </li>
          <li>
            <a href="!#">
              <span>Manage Property</span>{" "}
              <i className="ri-arrow-down-s-line"></i>
            </a>
          </li>
          <li>
            <a href="!#">
              <span>Resources</span>
              <i className="ri-arrow-down-s-line"></i>
            </a>
          </li>
        </ul>

        {/* Login and Signup Buttons */}
        <div className="btn">
          <button className="">Login</button>
          <button className="">Sign Up</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
