import React, { useState } from 'react'

import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



const SearchBar = ({books, setBooks, getBooks}) => {

    const [searchTerm, setSearchTerm] = useState('')
    console.log(searchTerm);

    const filterBooks = (e) => {
        e.preventDefault();

        const filterBooks = books.filter((book) => 
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setBooks(filterBooks);
    };

    const handleResetSearchBar = (value) => {
        if (value === '') {
            getBooks();
        }

        setSearchTerm(value);
    };


    return (
        <Container>
            <Row>
                <Col>
                    <Form onSubmit={filterBooks}>
                        <Form.Control 
                        onChange={(e) => handleResetSearchBar(e.target.value)}
                        type='text' 
                        placeholder='Search books' 
                        />
                        <Button type='submit'>Cerca</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default SearchBar;