let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: 55.39594, lng: 10.38831 },
    zoom: 12,
    disableDefaultUI: true,
    zoomControl: true,
    fullscreenControl: true,
  });
}

initMap();