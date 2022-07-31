import { connect } from "svelte-redux-connect";
import { createSelector } from '@reduxjs/toolkit';
import Sources from './Sources.svelte';
import { actions } from "../../redux/sources.duck";

const mapStateToProps = createSelector(
    state => state.sources.layers,
    state => state.sources.images,
    (layers, images) => {
        return {
            layers,
            images,
        };
    },
);

const mapDispatchToProps = {
    addLayer: actions.addLayer,
    removeLayer: actions.removeLayer,
    addImage: actions.addImage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sources);
