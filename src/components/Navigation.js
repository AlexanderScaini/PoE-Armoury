import { Navbar, NavDropdown, Nav, Form, FormControl, Button, Container } from 'react-bootstrap'
import './Navigation.scss'
import Searchbar from './Searchbar'

export default function Navigation(props) {

  return (
    <Navbar fixed="top" variant="dark" bg="dark" expand="lg">
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto"> 
        <Nav.Link className="mx-3 my-2" href="/">Home</Nav.Link>
        <Searchbar getCharacter={props.getCharacter} setState={props.setState} setAccount={props.setAccount}/>
      </Nav>
      {props.cookies.user && 
      <Nav className="ml-auto">
         <Nav.Link className="mx-3 my-2" href={"/users/" + props.cookies.user + "/favourites"}>Favourites</Nav.Link>
      <Nav.Link className="mx-3 my-2" href="/logout" onClick={() => props.removeCookie("user")}>Logout</Nav.Link>
      </Nav>}
      {!props.cookies.user && 
      <Nav className="ml-auto">
        <Nav.Link className="mx-3 my-2" href="/login">Login</Nav.Link>
        <Nav.Link className="mx-3 my-2" href="/register" >Register</Nav.Link>
      </Nav>}
    </Navbar.Collapse>
  </Navbar>
  )
}