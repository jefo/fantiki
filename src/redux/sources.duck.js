import set from 'lodash.set';
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    layers: [],
    images: {},
    selectedLayerId : 0,
};

const sourcesSlice = createSlice({
    initialState,
    name: 'sources',
    reducers: {
        addLayer(state, { payload }) {
            state.layers.push(payload);
            if (state.layers.length === 1) {
                state.selectedLayerId = payload.id;
            }
            return state;
        },
        setLayers(state, { payload }) {
            state.layers = [...payload];
            return state;
        },
        removeLayer(state, { payload }) {
            state.layers = state.layers.filter(l => l.id === payload.id);
            return state;
        },
        addImage(state, { payload }) {
            set(state, ['images', payload.layerId, payload.path], payload.data);
            return state;
        },
        selectLayer(state, { payload }) {
            state.selectedLayerId  = payload.id;
            return state;
        },
    }
});

export const actions = sourcesSlice.actions;
export default sourcesSlice.reducer;
