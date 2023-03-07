import { connect } from "svelte-redux-connect";
import { createSelector } from "@reduxjs/toolkit";
import Collection from "../Collection/Collection.svelte";
import { actions } from "../../redux/sources.duck";
import logger from "redux-logger";

const mapStateToProps = createSelector(
  (state) => state.sources.images,

  (images) => {
    let nft = [];
    console.log("images>>>>>", images);
    const imagesNft = Object.values(images);

    if (imagesNft.length) {
      const arrayNft = imagesNft.map((item) => Object.values(item));
      console.log("arrayNft>>>>>", arrayNft);
      nft = arrayNft.reduce((a, b) => {
        return a.flatMap((d) => {
          return b.map((e) => {
            return [d, e].flat();
          });
        });
      });
    }
    console.log("nft>>>>>", nft);

    return {
      images,
      nft,
    };
  }
);
const mapDispatchToProps = {
  mergeImage: actions.mergeImage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Collection);
