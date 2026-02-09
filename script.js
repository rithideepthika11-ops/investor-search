function searchInvestors() {
  const sector = document.getElementById("sector").value;
  const country = document.getElementById("country").value;

  const investors = [
    "Sequoia Capital - Invests heavily in early-stage " + sector + " startups in " + country,
    "Accel - Strong focus on scalable " + sector + " companies across " + country,
    "Lightspeed Venture Partners - Active investor in innovative " + sector + " businesses in " + country
  ];

  let output = "<h3>Top Investors</h3><ul>";

  for (let investor of investors) {
    output += "<li>" + investor + "</li>";
  }

  output += "</ul>";

  document.getElementById("results").innerHTML = output;
}

