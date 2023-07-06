import React, { useState } from 'react'
// ? importo i dati da react-bootstrap
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { useDispatch } from 'react-redux'
import { getBooks, filterBooks } from '../states/booksState';


const SearchBar = () => {
    const dispatch = useDispatch();
    

    const [searchTerm, setSearchTerm] = useState('')
    console.log(searchTerm);

    const handleFilterBooks = (e) => {
        e.preventDefault();

        dispatch(filterBooks(searchTerm));
        
    };

    //  possiamo considerarlo un refactor
    const handleResetSearchBar = (value) => {
        if (value === '') {
            dispatch(getBooks());
        }

        setSearchTerm(value);
    };


    return (
        <Container className='d-flex justify-content-center align-items-center'>
            <Row>
                <Col>
                    <Form className='d-flex align-self-center'  onSubmit={handleFilterBooks}>
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