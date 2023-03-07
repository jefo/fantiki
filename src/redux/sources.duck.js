import set from "lodash.set";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import logger from "redux-logger";
import mergeImages from "merge-images";

let initialState = {
  nft: [],
  mergeImages: [],
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
    generateCollection(state, { payload }) {
      const arrayNFT = payload.map((item) => Object.values(item));
      const collectionNFT = arrayNFT.reduce((a, b) => {
        return a.flatMap((d) => {
          return b.map((e) => {
            return [d, e].flat();
          });
        });
      });

      // collectionNFT.forEach((item) => {
      //   mergeImages(item)
      //   .then(()=> state.nft.push(item))
      // })

      state.nft = collectionNFT;
      return state;
    },
  },
});

export const actions = sourcesSlice.actions;
export default sourcesSlice.reducer;
