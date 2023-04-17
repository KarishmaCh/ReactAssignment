import { Link } from "react-router-dom";
import { Navbar, Container, Image } from 'react-bootstrap';

const NavBar = () => {

    
  return (
    <Navbar bg="light" expand="lg">
      <Container>
     <Navbar.Brand as={Link} to="/" className="mr-auto"><h2> Product board</h2></Navbar.Brand>
     
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
          <Navbar.Collapse className="justify-content-end">
            <Image src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" roundedCircle style={{ width: '50px', height: '50px' }} />
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
