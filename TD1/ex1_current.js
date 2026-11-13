const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function success(pos) {
  const crd = pos.coords;
  const date = new Date(pos.timestamp);

  document.getElementById("latitude").textContent = `Latitude : ${crd.latitude}`;
  document.getElementById("longitude").textContent = `Longitude : ${crd.longitude}`;
  document.getElementById("speed").textContent = 
    crd.speed === null ? "Vitesse : indisponible" : `Vitesse : ${crd.speed} km/h`;
  document.getElementById("mesure").textContent = `Précision : ${Math.round(crd.accuracy)} metres.`;
  document.getElementById("date").textContent = `Date : ${date.toLocaleString("fr-FR")}`;
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

navigator.geolocation.getCurrentPosition(success, error, options);

