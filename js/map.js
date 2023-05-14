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

initMap();
