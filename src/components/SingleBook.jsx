import React, {useState} from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import CommentsModal from './CommentsModal';


const SingleBook = ({img, asin, title, price, category}) => {
  const [isCommentsModalOpen, setIsCommentsModalOpen] = useState(false)

  const toggleCommentsModal = () => setIsCommentsModalOpen(!isCommentsModalOpen)

  return (
    <>
      <Card style={{ height: '100%', maxWidth: '18rem' }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Title>{category}</Card.Title>
              <Card.Title>{price}</Card.Title>
              <Card.Title>{asin}</Card.Title>
              <Button
                onClick={toggleCommentsModal}
                variant="primary"
              >Commenti</Button>
          </Card.Body>
      </Card>
      {isCommentsModalOpen &&( 
      <CommentsModal 
        asin={asin}
        close={toggleCommentsModal}
      />
      )}
    </>
  )
}

export default SingleBook;
