import { Link as Link } from "react-router-dom";
import Instagram from "../assets/icons/instagram.png";
import Logo from "../assets/icons/HGS-Logo.png";

export default function Navigation() {
  
  return (
    <div>
    <header className='header'>
      <div className="logo">
        <h2 className="website--title" style={{ display: "flex", alignItems: "center" }}>
          <img 
            src={Logo} 
            alt="HGS Logo"
            style={{ width: "50px", height: "auto", marginRight: "10px" }}
          />
          HGS LIBRARY
        </h2>
      </div>

      <div className="navigation">
        <input type="checkbox" className="toggle-menu"  />
        <div className="hamburger"></div>
        <ul className="menu">
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/books">BOOKS</Link>
          </li>
          <li>
            <Link to="/authors">AUTHORS</Link>
          </li>
          <li>
            <Link to="/quotes">QUOTES</Link>
          </li>
          <li>
            <Link to="file:///C:/Users/Mustafa/AppData/Local/Temp/Rar$EXa18584.47026/templatemo_586_scholar/edu.html">↩ BACK TO LMS</Link>
          </li>
          </ul>
      </div>
    </header>
  </div>
  );
}
