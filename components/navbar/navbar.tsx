import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router';

const navbar = () => {
    const signup = ()=>{
        Router.push('/signup')
    }
    const login = ()=>{
        Router.push('/login')
    }
   
    const publicevents = ()=>{
        Router.push('/publicevents')
    }
  return (
    <>
         <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><Image
     
      src="/logo.jpeg"
      alt="Picture of the author"
      width={50}
      height={50}
    /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action2"><p onClick={signup}>Signup</p></Nav.Link>
            <Nav.Link href="#action2"></Nav.Link>
            <Nav.Link href="#action2"></Nav.Link>
            <Nav.Link href="#action2"><p onClick={login}>Login</p></Nav.Link>
            <Nav.Link href="#action2"></Nav.Link>
            <Nav.Link href="#action2"></Nav.Link>
            <Nav.Link href="#action2"><p onClick={publicevents}>Public Events</p></Nav.Link>
             
             
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default navbar