import React, { useContext } from "react";

/*  importo le cosine da react-bootstrap */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { navLinks } from "../data/navLinks";
import { nanoid } from 'nanoid';

import SearchBar from "./SearchBar";
import { useSelector } from 'react-redux';
import { allBooks } from '../states/booksState';

const NavigationBar = () => {

  const books = useSelector(allBooks);

    return(
      <>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {navLinks.map((link) => {
                  return (
                    <Nav.Link key={nanoid()} href={link.href}>
                      {link.title}
                    </Nav.Link>
                  )
                })}
                <SearchBar books={books} />
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    )
}
export default NavigationBar;
