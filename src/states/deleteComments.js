import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {getComments} from "./getComments";





const initialState = {
    comments: [],
    isLoading: false,
    error: null
};

const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdmNTI1Y2I5YzBmNzAwMTQ0ODRmNzQiLCJpYXQiOjE2ODc1NDM3MjgsImV4cCI6MTY4ODc1MzMyOH0.XeZ90pIzAbf0B1k3aT-y1aRy2Bgd_jsjbyKUUSMvnJo";
 

export const deleteComment = createAsyncThunk(
    
    'bookComments/deleteBookComment',
    async (asin, {dispatch}) => {
        try {
            const data = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin,
                {
                    headers: {
                        "Authorization": token,
                        "content-type": "application/json"
                    },
                    method: "DELETE"
                });
            if (data.ok) {
                console.log("Commento Eliminato con successo");
                dispatch(getComments(asin));
            }else {
                console.log(" errore nell'eliminazione del commento");
            }
        } catch (error) {
            if (error) throw new Error("impossibile continuare con la richiest dei commenti");
        }
    } 
);

const deleteCommentFromBookSlice = createSlice({
    name: 'deleteCommentFromBook',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(deleteComment.pending, state => {
            state.isLoading = true;
        })
        .addCase(deleteComment.fulfilled, (state, action) => {
            state.isLoading = false;
            state.comments = action.payload;
        })
        .addCase(deleteComment.rejected, state => {
            state.isLoading = false;
            state.error = 'Errore durante il cancellamento del commento';
        })
    }
 })

 export const allComments = state => state.deleteCommentFromBookState.comments;
 export const isCommentsLoading = state => state.deleteCommentFromBookState.isLoading;
 export const commentsError = state => state.deleteCommentFromBookState.error;

 export default deleteCommentFromBookSlice.reducer;
