import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favorites: []
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            const propertyId = action.payload;
            const index = state.favorites.indexOf(propertyId);
            if (index !== -1) {
                state.favorites.splice(index, 1);
            } else {
                state.favorites.push(propertyId);
            }
        }
    }
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
