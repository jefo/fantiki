import { connect } from "svelte-redux-connect";
import { createSelector } from "@reduxjs/toolkit";
import Collection from "../Collection/Collection.svelte";
import { actions } from "../../redux/sources.duck";
import logger from "redux-logger";

const mapStateToProps = createSelector(
  (state) => state.sources.nft,
  (state) => state.sources.images,

  (nft, images) => {
    return {
      nft,
      images: Object.values(images),
    };
  }
);
const mapDispatchToProps = {
  generateCollection: actions.generateCollection,
  mergeImages: actions.mergeImages,
};

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
