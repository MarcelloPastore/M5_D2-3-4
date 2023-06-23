import React, { useEffect, useState } from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

import "../styles/commentModal.css"
import "../styles/commentDiv.css"



const CommentsModal = ({close, asin}) => {
    const [bookComments, setBookComments] = useState(null);
    console.log(bookComments)

    const endpoint = `https:striveschool-api.herokuapp.com/api/comments/${asin}`;
    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdmNTI1Y2I5YzBmNzAwMTQ0ODRmNzQiLCJpYXQiOjE2ODc1NDM3MjgsImV4cCI6MTY4ODc1MzMyOH0.XeZ90pIzAbf0B1k3aT-y1aRy2Bgd_jsjbyKUUSMvnJo"

    // todo: creo la funzione async che mi carica i commenti
    const getCommentsFromBook = async () => {
        try {
            const data = await fetch(
                endpoint, {
                headers:{
                    "Authorization": token
                }
            });
            const response = await data.json()
            setBookComments(response);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getCommentsFromBook()
    }, [asin])


        




    

  return (
      <div
          className="modal show commentsModals"
          style={{ display: 'block'}}
      >
          <Modal.Dialog centered bacdrop="static" >
              <Modal.Header >
                  <Modal.Title>Sezione Commenti</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                  {bookComments && bookComments.map((comment) => {
                    return(
                        <ListGroup
                        className="d-flex justify-content-between align-items-start"
                        as="ol" numbered
                        >
                            <div className='commentDiv'>
                                <p>{comment.comment}</p>
                                <p>Rate: {comment.rate}</p>
                                </div>
                        </ListGroup>
                    )
                  })}
              </Modal.Body>

              <Modal.Footer>
                  <Button variant='warning'>
                  Create new comment
                  </Button>
                  <Button 
                  onClick={close}
                  variant="success"
                  >Close</Button>
              </Modal.Footer>
          </Modal.Dialog>
      </div>
  )
}

export default CommentsModal