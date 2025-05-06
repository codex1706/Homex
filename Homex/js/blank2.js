function fetchPropertyData() {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  if (!id) return;

  fetch("all_properties_realistic.json")
    .then(res => res.json())
    .then(properties => {
      const property = properties.find(p => p.id === id);
      displayProperty(property);
    });
}

function randomNigerianPhone() {
  const prefixes = ["080", "081", "070", "090"];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const number = Math.floor(10000000 + Math.random() * 89999999);
  return `${prefix}${number}`;
}

function displayProperty(property) {
  if (!property) return;
  const container = document.getElementById("property-detail");
  container.innerHTML = `
    <h2>${property.title}</h2>
    <img src="${property.image}" alt="${property.title}" style="width:100%; max-width:600px">
    <p><strong>Type:</strong> ${property.type}</p>
    <p><strong>Location:</strong> ${property.location}</p>
    <p><strong>Description:</strong> ${property.description}</p>
    <p><strong>Contact Agent:</strong> ${randomNigerianPhone()}</p>
  `;
}

window.onload = fetchPropertyData;