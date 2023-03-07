import { createSlice } from "@reduxjs/toolkit";
import set from 'lodash.set';

const initialState = {
    items: {},
};

const collectionSlice = createSlice({
    initialState,
    name: 'collections',
    reducers: {
        add(state, { payload }) {
            state.items[payload.id] = payload;
        },
        set(state, { payload }) {
            state.items = { ...payload };
        },
        publish(state, { payload }) {
            state[payload.id].status = 'published';
        }
    }
});

export const actions = collectionSlice.actions;
export default collectionSlice.reducer;
