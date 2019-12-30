import React from 'react'
import {
    Navbar,
    Nav, NavDropdown
} from "react-bootstrap"
import {useHistory} from "react-router-dom"
function MyNavbar() {
    const history = useHistory()
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">My app</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link onClick={()=>{
                        history.push("/")
                    }}>Home</Nav.Link>
                     <Nav.Link onClick={()=>{
                        history.push("/add")
                    }}>Ajout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        
    )
}

export default MyNavbar
