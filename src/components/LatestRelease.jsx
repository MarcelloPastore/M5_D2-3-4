import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleBook from './SingleBook';

import { useSelector } from 'react-redux';
import { allBooks } from '../states/booksState';

const LatestRelease = () => {

const books = useSelector(allBooks);

  return (
    <>
        <Container>
            <Row>
                {books && books.map((book) => {
                    return(
                        <Col xs={6} md={4} lg={3} key={book.asin}>
                            <SingleBook 
                                img={book.img}
                                title={book.title}
                                category={book.category}
                                price={book.price}
                                asin={book.asin}
                            />
                        </Col>
                    )
                })}
            </Row>
        </Container>
    </>
  )
}

export default LatestRelease