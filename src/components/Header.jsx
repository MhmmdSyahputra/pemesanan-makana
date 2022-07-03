import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AiTwotoneHome } from 'react-icons/ai'
import { BsFillCartCheckFill } from 'react-icons/bs'

const Header = () => {
  return (
    <>
      <Navbar style={{ backgroundColor: '#2C3745' }} expand="lg">
        <Container>
          <Navbar.Brand href="#home"><img src="https://cdn.discordapp.com/attachments/972198684550897696/992674917445292072/ATHENA_KITCHEN__4___1_-removebg-preview.png" width='110' alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-5">
              <Link to='/' className='text-decoration-none me-5 colorfont'><AiTwotoneHome className='fs-4 me-1' />Home</Link>
            </Nav>
            <form className="d-flex col-md-6" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            </form>
            <Nav className="ms-auto">
              <Link to='/keranjang' className='text-decoration-none  me-4 colorfont'><BsFillCartCheckFill className='fs-4 me-1' />Keranjang</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header