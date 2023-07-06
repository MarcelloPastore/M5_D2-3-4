import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: [],
    isLoading: false,
    error: null,
    cartItems:[]
}

export const getBooks = createAsyncThunk(
    'books/getBooks',
    async () => {
        try {
            const data = await fetch('https://epibooks.onrender.com/fantasy');
            const response = await data.json();
            return response;
        } catch (error) {
            console.log(error);
        }
    }
)

const bookSlice = createSlice({
    name:'getBooks',
    initialState,
    reducers: {
        filterBooks: (state, actions) => {
            state.books = state.books.filter((book) => book.title.toLowerCase().includes(actions.payload.toLowerCase()))
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getBooks.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getBooks.fulfilled, (state, actions) => {
                state.isLoading = false
                state.books = actions.payload
            })
            .addCase(getBooks.rejected, (state) => {
                state.isLoading = false
                state.error = "Errore durante la eichiesta dei libri"
            })
    }
});

export const {filterBooks} = bookSlice.actions;


export const allBooks = (state) => state.bookState.books;
export const isBookLoading = (state) => state.bookState.isLoading;
export const booksError = (state) => state.bookState.error;

export default bookSlice.reducer;