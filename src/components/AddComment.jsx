import React, { useState } from 'react'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AddComment = ({ asin, getMethod }) => {
    const [commentValue, setCommentValue] = useState('');
    const [rateValue, setRateValue] = useState('');

    const endpoint = `https://striveschool-api.herokuapp.com/api/comments/`;
    const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdmNTI1Y2I5YzBmNzAwMTQ0ODRmNzQiLCJpYXQiOjE2ODc1NDM3MjgsImV4cCI6MTY4ODc1MzMyOH0.XeZ90pIzAbf0B1k3aT-y1aRy2Bgd_jsjbyKUUSMvnJo"


    const postComment = async (event) => {
        setCommentValue(event.target.value);
        setRateValue(event.target.value);
        try {
            const data = await fetch(
                endpoint, {
                headers: {
                    "Authorization": token,
                    "content-type": "application/json"
                },
                method: "POST",
                body: JSON.stringify({
                    comment: commentValue,
                    rate: rateValue,
                    elementId: asin
                })
            }
            );
            if (!data.ok) {
                throw new Error("Errore nella richiesta")
            } else {
                getMethod()
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Form onSubmit={postComment}>
            <Form.Control
                value={commentValue}
                type='text'
                onChange={(event) => setCommentValue(event.target.value)}
            >
            </Form.Control>
            <Form.Control
                value={rateValue}
                type='text'
                onChange={(event) => setRateValue(event.target.value)}
            >
            </Form.Control>
            <Button type="submit" variant='success'>Post Comment</Button>
        </Form>
    )
}

export default AddComment
