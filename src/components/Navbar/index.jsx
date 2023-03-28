
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css";
import logo from "./../../assets/images/2.jpg";
const Navba1 =() => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container style={{height:'60px'}}>
        <Navbar.Brand href="/">
        <img 
           alt="Logo"
           src={logo}
           style={{width:'60px',height:'40px'}}
           className='logo'
        />
        <span style={{fontSize:'30px'}}> Dharti</span> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" style ={{marginLeft:'100px'}}>HOME</Nav.Link>
            <Nav.Link href="/about">ABOUT</Nav.Link>
            <Nav.Link href="/blog">BLOGS</Nav.Link>
            <Nav.Link href="/programmes">PROGRAMMES</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// export default BasicExample;
export default Navba1;