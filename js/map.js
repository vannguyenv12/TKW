function initMap() {
  const mapOptions = {
    center: { lat: 14.0583, lng: 108.2772 },
    zoom: 1,
  };
  const map = new google.maps.Map(document.getElementById("map"), mapOptions);
  const marker = new google.maps.Marker({
    map: map,
    position: {
      lat: 14.0583,
      lng: 108.2772,
    },
  });

  marker.addListener("click", () => {
    const infoWindow = new google.maps.InfoWindow({
      content: "Vietnam here!!",
    });

    infoWindow.open(map, marker);
  });
}

function renderMap() {
  mapboxgl.accessToken =
    "pk.eyJ1IjoidmFubmd1eWVudjEyIiwiYSI6ImNsaG5hcW5oZzBlb2Mzam5ndTFodTJ2Z2EifQ.Q8I2IbBuQRGGrOLF-WIUlg"; // Thay YOUR_ACCESS_TOKEN bằng mã truy cập của bạn

  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: [108.2772, 14.0583],
    zoom: 5,
  });

  const marker = new mapboxgl.Marker()
    .setLngLat([106.6297, 10.8231])
    .setPopup(new mapboxgl.Popup().setHTML("<h5>I'm here!</h5>"))
    .addTo(map);
}

renderMap();
