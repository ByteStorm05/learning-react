import { useState } from 'react';
import logo from '../images/image.png';
import { Link } from 'react-router-dom';


// Header
const Title = () => (
  <a href="/">
    <img className="logo" src={logo} alt="Food Fire Logo" />
  </a>
);

// Header component for header section: Logo, Nav Items
const Header = () => {

  const [Loginbtn, setLoginbtn] = useState("Login")

  const handleLog = () => {
    return Loginbtn === "Login" ? setLoginbtn("Logout") : setLoginbtn("Login")
  }
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <div className='links'> <Link to={"/"} className='links'>Home</Link></div>
        <div className='links'> <Link to={"/about"} className='links'>About</Link></div>
        <div className='links'> <Link to={"/contact"} className='links'>Contact Us</Link></div>

        {/* <a href=''>Home</a>
        <a href='#'>About</a>
        <a href='#'>Contact Us</a> */}
        <button className='login-btn' onClick={handleLog}> {Loginbtn} </button>
      </div>
    </div>
  );
};

export default Header;