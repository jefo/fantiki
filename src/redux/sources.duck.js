import set from 'lodash.set';
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    layers: [],
    images: {},
};

const sourcesSlice = createSlice({
    initialState,
    name: 'sources',
    reducers: {
        addLayer(state, { payload }) {
            state.layers.push(payload);
            return state;
        },
        removeLayer(state, { payload }) {
            state.layers = state.layers.filter(l => l.id === payload.id);
            return state;
        },
        addImage(state, { payload }) {
            set(state, ['images', payload.layerId, payload.path], payload.data);
            return state;
        }
    }
});

export const actions = sourcesSlice.actions;
export default sourcesSlice.reducer;
