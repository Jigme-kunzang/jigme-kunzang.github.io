const optionsWatch = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function successWatch(pos) {
  const crd = pos.coords;

  document.getElementById("latitude_watch").textContent = `Latitude : ${crd.latitude}`;
  document.getElementById("longitude_watch").textContent = `Longitude : ${crd.longitude}`;
  document.getElementById("speed_watch").textContent =
    crd.speed === null ? "Vitesse : indisponible" : `Vitesse : ${crd.speed} km/h`;
  document.getElementById("mesure_watch").textContent = `Précision ${Math.round(crd.accuracy)} mètres.`;
  document.getElementById("date_watch").textContent = `Date : ${new Date(pos.timestamp).toLocaleString("fr-FR")}`;
}

function errorWatch(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

const watchId = navigator.geolocation.watchPosition(successWatch, errorWatch, optionsWatch);