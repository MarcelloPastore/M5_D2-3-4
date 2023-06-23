import React,{useEffect, useState} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SingleBook from './SingleBook';
import SearchBar from './SearchBar';

const LatestRelease = () => {
    const [books, setBooks] = useState([]);
  
    console.log(books);


    const getBooksFromApi = async() => {
        try {
            const data = await fetch("https://epibooks.onrender.com/")
            const response = await data.json()
            setBooks(response);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
      getBooksFromApi()
    }, [])
    


  return (
    <>
        <SearchBar books={books} setBooks={setBooks} getBooks={getBooksFromApi}/>
        <Container>
            <Row>
                {books && books.map((book) => {
                    return(
                        <Col xs={6} md={4}>
                            <SingleBook 
                                key={book.asin}
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