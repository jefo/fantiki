import { connect } from "svelte-redux-connect";
import { createSelector } from '@reduxjs/toolkit';
import Sources from './Sources.svelte';
import { actions } from "../../redux/sources.duck";

const mapStateToProps = createSelector(
    state => state.sources.layers,
    state => state.sources.images,
    state => state.sources.selectedLayerId,
    (layers, images, selectedLayerId) => {
        return {
            layers,
            images: images[selectedLayerId] ? Object.values(images[selectedLayerId]) : [],
            selectedLayer: layers.find(l => l.id === selectedLayerId),
        };
    },
);

const mapDispatchToProps = {
    addLayer: actions.addLayer,
    removeLayer: actions.removeLayer,
    addImage: actions.addImage,
    selectLayer: actions.selectLayer,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sources);
