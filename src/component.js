import { createLayerComponent, updateMediaOverlay } from "@react-leaflet/core";
import L from "leaflet";
import "leaflet-toolbar";
import "@diwotech/leaflet-distortableimage";
import "@diwotech/leaflet-distortableimage/dist/vendor.js";

export const ReactLeafletDistortableImage = createLayerComponent(
  function createImageOverlay({ url, corners, mode, selected, actions, suppressToolbar, zIndex }, ctx) {
    const instance = new L.distortableImageOverlay(url, {
      mode,
      actions,
      selected,
      suppressToolbar,
      zIndex,
      corners,
    });
    return { instance, context: { ...ctx, overlayContainer: instance } };
  },
  function updateImageOverlay(overlay, props, prevProps) {
    updateMediaOverlay(overlay, props, prevProps);
    if (props.url !== prevProps.url) {
      overlay.setUrl(props.url);
    }
  }
);