<template>
  <div class="home">
    <l-map :zoom="zoom" @click="handleMapClick">
      <l-marker :lat-lng="shopPosition" :icon="icon">
        <l-popup>
          Shop
        </l-popup>
      </l-marker>
      <l-marker
        v-if="myPosition"
        :lat-lng="myPosition"
        :icon="locationIcon"
      ></l-marker>
      <l-tile-layer
        :max-zoom="18"
        attribution="津甜网络有限公司"
        url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw"
      >
      </l-tile-layer>
    </l-map>
  </div>
</template>

<script>
// @ is an alias to /src
import { icon, latLng } from "leaflet";
import { LMap, LTileLayer, LMarker, LPopup } from "vue2-leaflet";
import "leaflet/dist/leaflet.css";
export default {
  name: "Home",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data() {
    return {
      zoom: 2,
      shopPosition: latLng(31, 121),
      myPosition: null,
      icon: icon({
        iconUrl: require("./ice-icon.png"),
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      }),
      locationIcon: icon({
        iconUrl: require("./location.png"),
        iconSize: [32, 37],
        iconAnchor: [16, 37]
      })
    };
  },
  methods: {
    handleMapClick(e) {
      console.log("map", e);
      this.myPosition = latLng(e.latlng.lat, e.latlng.lng);
      let distance = this.myPosition.distanceTo(this.shopPosition);
      console.log(distance);
    },
    handleLayerClick(e) {
      console.log("layer", e);
    }
  }
};
</script>
<style>
* {
  margin: 0px;
  padding: 0px;
}
.home {
  width: 800px;
  height: 500px;
  border: 1px dashed yellowgreen;
}
</style>
