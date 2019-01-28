// 5.3 functions return

function setup() {
  noCanvas()
  var km = milesToKm(26.4)
  console.log(km)
}

function draw() {
  background('#313437')
}

function milesToKm(miles) {
  var km = miles * 1.6
  return km
}
// --- END ---
