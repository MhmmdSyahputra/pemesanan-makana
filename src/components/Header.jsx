import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { MdFastfood } from 'react-icons/md'
import { AiTwotoneHome } from 'react-icons/ai'
import { BsFillCartCheckFill } from 'react-icons/bs'


const Header = () => {
  return (
    <>
      <Navbar style={{ backgroundColor: '#F2EBE9' }} expand="lg">
        <Container>
          <Navbar.Brand href="#home">Shapee Athena</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to='/' className='text-decoration-none text-dark me-4'><AiTwotoneHome className='fs-4 me-1' />Home</Link>
              <Link to='/menu' className='text-decoration-none text-dark'><MdFastfood className='fs-4 me-1' /> Menu</Link>
            </Nav>
            <Nav className="ms-auto">
              <Link to='/' className='text-decoration-none text-dark me-4'><BsFillCartCheckFill className='fs-4 me-1' />Keranjang</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header