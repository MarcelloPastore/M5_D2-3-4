import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    comments: [],
    isLoading: false,
    error: null
};

const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDdmNTI1Y2I5YzBmNzAwMTQ0ODRmNzQiLCJpYXQiOjE2ODc1NDM3MjgsImV4cCI6MTY4ODc1MzMyOH0.XeZ90pIzAbf0B1k3aT-y1aRy2Bgd_jsjbyKUUSMvnJo";

export const getComments = createAsyncThunk(
    'bookComments/getBookComment',
    async (asin) => {
        try {
            const data = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + asin,
                {
                    headers: {
                        "Authorization": token
                    }
                });
            return await data.json();
        } catch (error) {
            if (error) throw new Error("impossibile continuare con la richiest dei commenti");
        }
    } 
);

const commentsFromBookSlice = createSlice({
    name: 'getCommentsFromBook',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(getComments.pending, state => {
            state.isLoading = true;
        })
        .addCase(getComments.fulfilled, (state, action) => {
            state.isLoading = false;
            state.comments = action.payload;
        })
        .addCase(getComments.rejected, state => {
            state.isLoading = false;
            state.error = 'Errore durante il caricamento dei commenti';
        })
    }
 })

 export const allComments = state => state.commentFromBookState.comments;
 export const isCommentsLoading = state => state.commentFromBookState.isLoading;
 export const commentsError = state => state.commentFromBookState.error;

 export default commentsFromBookSlice.reducer;