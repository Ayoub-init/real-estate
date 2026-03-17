import { createSlice } from '@reduxjs/toolkit';
import { mockProperties } from '../../data/mockProperties';

const initialState = {
    properties: mockProperties,
    filteredProperties: mockProperties,
    status: 'idle',
    searchQuery: '',
    filters: {
        type: 'Any',
        priceRange: 'Any',
        beds: 'Any'
    }
};

const propertiesSlice = createSlice({
    name: 'properties',
    initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
            state.filteredProperties = filterProperties(state.properties, state.searchQuery, state.filters);
        },
        setFilters: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
            state.filteredProperties = filterProperties(state.properties, state.searchQuery, state.filters);
        },
        resetFilters: (state) => {
            state.searchQuery = '';
            state.filters = initialState.filters;
            state.filteredProperties = state.properties;
        }
    }
});

function filterProperties(properties, query, filters) {
    return properties.filter(prop => {
        const matchesQuery = prop.title.toLowerCase().includes(query.toLowerCase()) ||
                             prop.location.toLowerCase().includes(query.toLowerCase());

        let matchesType = true;
        if (filters.type !== 'Any' && filters.type !== 'Property Type') {
            matchesType = prop.type === filters.type;
        }

        let matchesPrice = true;
        if (filters.priceRange !== 'Any' && filters.priceRange !== 'Price Range') {
             if (filters.priceRange === '$100k - $300k') matchesPrice = prop.price >= 100000 && prop.price <= 300000;
             else if (filters.priceRange === '$300k - $600k') matchesPrice = prop.price > 300000 && prop.price <= 600000;
             else if (filters.priceRange === '$600k+') matchesPrice = prop.price > 600000;
        }

        return matchesQuery && matchesType && matchesPrice;
    });
}

export const { setSearchQuery, setFilters, resetFilters } = propertiesSlice.actions;
export default propertiesSlice.reducer;
