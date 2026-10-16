function convert() {
  let value =
  document.getElementById("value").value;
  let unit =
  document.getElementById("unit").value;
  let result;

  if (unit === "km") {
    result = value * 0.621371;

    document.getElementById("result").
    innerText = 
      result.toFixed(2) + " miles";
  }

  if (unit === "m") {
    result = value * 3.28084;

    document.getElementById("result").
    innerText =
      result.toFixed(2) + " feet";
  }

  if (unit === "kg") {
    result = value * 2.20462;

    document.getElementById("result").
    innerText =
      result.toFixed(2) + " pounds";
  }
}
  