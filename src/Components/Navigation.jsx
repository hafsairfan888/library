import { Link as Link } from "react-router-dom";
import Instagram from "../assets/icons/instagram.png";
import Logo from "../assets/icons/HGS-Logo.svg";

export default function Navigation() {
  
  return (
    <div>
    <header className='header'>
      <div className="logo">
       <h2 className="website--title">
        <img 
        src={Logo} 
        alt="HGS Logo"
        style={{ width: "100px", height: "auto" }}
        /> 
       📚 HAFSA'S LIBRARY
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
            <Link to="">↩ Back To Dashboard</Link>
          </li>
          </ul>
      </div>
    </header>
  </div>
  );
}
