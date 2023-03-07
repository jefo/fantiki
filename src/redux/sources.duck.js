import set from "lodash.set";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import logger from "redux-logger";
import mergeNft from "merge-images";

let initialState = {
  nft: [],
  collection: [],
  layers: [],
  images: {},
  selectedLayerId: 0,
};

const sourcesSlice = createSlice({
  initialState,
  name: "sources",
  reducers: {
    addLayer(state, { payload }) {
      state.layers.push(payload);
      console.log("addLayer>>>");
      console.log(state.images);

      state.selectedLayerId = payload.id;
      return state;
    },
    setLayers(state, { payload }) {
      state.layers = [...payload];
      return state;
    },
    removeLayer(state, { payload }) {
      state.layers = state.layers.filter((l) => l.id === payload.id);
      return state;
    },
    addImage(state, { payload }) {
      set(state, ["images", payload.layerId, payload.path], payload.data);
      return state;
    },
    selectLayer(state, { payload }) {
      state.selectedLayerId = payload.id;
      return state;
    },
    generateCollection(state, {payload}){
      state.collecton = payload
      return state
    }
  },
});

const mergeImage = () => {
  return (dispatch, getState) => {
    mergeNft(getState().sources.nft)
    .then((result) => {
      console.log(result);
      dispatch(sourcesSlice.actions.generateCollection(result))
    })
  };
};



export const actions = {...sourcesSlice.actions, mergeImage}
export default sourcesSlice.reducer;
