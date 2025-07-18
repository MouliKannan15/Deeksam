// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// import { FaUser } from "react-icons/fa";
// // import NavDropdown from 'react-bootstrap/NavDropdown';

// import './navstyle.css';

// function BasicExample() {
//   return (
//     < Navbar expand="lg" className="Navbar-custom">
//       <Container>
//         <Navbar.Brand href="/"><img className='logo' src="/image/logo1.avif" alt="" /></Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto nav-links">
//             <Nav.Link href="/">Home</Nav.Link>
//             <Nav.Link href="/about" >About Us</Nav.Link>
//             {/* <Nav.Link href="/blog">Blog</Nav.Link> */}
            
//             <Nav.Link href="/coconut">Coconut Oil</Nav.Link>
//             <Nav.Link href="/groundnut">Groundnut Oil</Nav.Link>
//             <Nav.Link href="/sesameoil">Sesame Oil</Nav.Link>
//             <Nav.Link href="/contact">Contact Us</Nav.Link>

          
//             <Nav.Link className='log' href="/login"> Login <FaUser /></Nav.Link>
            
//             {/* <NavDropdown title="Products" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#coconutoil">Coconut Oil</NavDropdown.Item>
//               <NavDropdown.Item href="#groundnutoil">Groundnut Oil</NavDropdown.Item>
//               <NavDropdown.Item href="#sesameoil">Sesame Oil</NavDropdown.Item> */}
             
//             {/* </NavDropdown> */}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }



// export default BasicExample;



import React, { useState } from 'react';
import './navstyle.css';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <a href="/"> <img src="/image/logo1.avif" alt="Logo" className="logo-img" /> </a>
      </div>

      <nav className={isMobile ? "navbar-links-mobile" : "navbar-links"} onClick={() => setIsMobile(false)}>
        <a href="/">Home</a>
        <a href="/about">About Us</a>
        <a href="/coconut">Coconut Oil</a>
        <a href="/groundnut">Groundnut Oil</a>
        <a href="/sesameoil">Sesame Oil</a>
        <a href="/contact">Contact</a>
        <a href="/login" className="login-link">Login <FaUser /></a>
      </nav>

      <button className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
};

export default Navbar;
