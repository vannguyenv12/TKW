async function getCoordinatesFromAddress(addressInput) {
  try {
    const accessToken =
      "pk.eyJ1IjoidmFubmd1eWVudjEyIiwiYSI6ImNsaG5hcW5oZzBlb2Mzam5ndTFodTJ2Z2EifQ.Q8I2IbBuQRGGrOLF-WIUlg";

    const address = addressInput;

    const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
      address
    )}.json?access_token=${accessToken}`;

    const response = await fetch(geocodingUrl);
    const data = await response.json();

    const coordinates = data.features[0].geometry.coordinates;
    const longitude = coordinates[0];
    const latitude = coordinates[1];

    console.log("Kinh độ:", longitude);
    console.log("Vĩ độ:", latitude);

    mapboxgl.accessToken =
      "pk.eyJ1IjoidmFubmd1eWVudjEyIiwiYSI6ImNsaG5hcW5oZzBlb2Mzam5ndTFodTJ2Z2EifQ.Q8I2IbBuQRGGrOLF-WIUlg"; // Thay YOUR_ACCESS_TOKEN bằng mã truy cập của bạn

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [longitude, latitude],
      zoom: 10,
    });

    const marker = new mapboxgl.Marker()
      .setLngLat([longitude, latitude])
      .setPopup(new mapboxgl.Popup().setHTML("<h5>I'm here!</h5>"))
      .addTo(map);
  } catch (error) {
    console.log("Lỗi:", error);
  }
}
getCoordinatesFromAddress(
  "140 Lê Trọng Tấn, Phường Tây Thạnh, Quận Tân Phú, TP.HCM"
);

// async function renderMap() {
//   const { longitude, latitude } = await getCoordinatesFromAddress();
//   console.log(longitude, latitude);
//   mapboxgl.accessToken =
//     "pk.eyJ1IjoidmFubmd1eWVudjEyIiwiYSI6ImNsaG5hcW5oZzBlb2Mzam5ndTFodTJ2Z2EifQ.Q8I2IbBuQRGGrOLF-WIUlg"; // Thay YOUR_ACCESS_TOKEN bằng mã truy cập của bạn

//   const map = new mapboxgl.Map({
//     container: "map",
//     style: "mapbox://styles/mapbox/streets-v11",
//     center: [longitude, latitude],
//     zoom: 12,
//   });

//   const marker = new mapboxgl.Marker()
//     .setLngLat([longitude, latitude])
//     .setPopup(new mapboxgl.Popup().setHTML("<h5>I'm here!</h5>"))
//     .addTo(map);
// }

// renderMap();

function handleSubmit() {
  const formAdressEl = document.querySelector(".form-address");
  const inputAddressEl = formAdressEl.querySelector(".address-input");

  formAdressEl.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (!inputAddressEl) return;
    await getCoordinatesFromAddress(inputAddressEl.value);
    inputAddressEl.value = "";
  });
}

handleSubmit();
