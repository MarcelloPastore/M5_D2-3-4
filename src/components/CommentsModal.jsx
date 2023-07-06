import React, { useEffect } from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

import "../styles/commentModal.css"
import "../styles/commentDiv.css"
import AddComment from './AddComment';
import { nanoid } from '@reduxjs/toolkit';

import { useDispatch, useSelector } from 'react-redux'
import { getComments, allComments } from '../states/getComments';
import { deleteComment } from '../states/deleteComments';

const CommentsModal = ({ close, asin}) => {
    // todo: creo la funzione async che mi carica i commenti

    const dispatch = useDispatch(); 

    const bookComments = useSelector(allComments);

    
    useEffect(() => {
        dispatch(getComments(asin))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [asin])


    return (
        <>
            <div
                className="modal show commentsModals"
                style={{ display: 'block' }}
            >
                <Modal.Dialog centered bacdrop="static" >
                    <Modal.Header >
                        <Modal.Title>Sezione Commenti</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {bookComments && bookComments.map((comment) => {
                            return (
                                <>
                                    <ListGroup
                                        key={nanoid()}
                                        className="d-flex justify-content-between align-items-start"
                                        as="ol" numbered
                                    >
                                        <div className='commentDiv'>
                                            <p>{comment.comment}</p>
                                            <p>Rate: {comment.rate}</p>
                                            <p>Autore: {comment.author}</p>
                                        </div>
                                        <button onClick={deleteComment(asin)}>Delete Comment</button>
                                    </ListGroup>
                                </>
                                
                            )
                        })}
                    </Modal.Body>
                    <Modal.Footer>
                        <AddComment
                            asin={asin}
                            getMethod={getComments}
                        >
                            Create new comment
                        </AddComment>
                        <Button
                            onClick={close}
                            variant="success"
                        >Close</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </div>
        </>
    )
}

export default CommentsModal