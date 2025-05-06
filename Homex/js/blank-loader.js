


document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const propertyId = params.get("id");
  if (!propertyId) return;

  fetch("data/properties.json")
    .then(response => response.json())
    .then(data => {
      const property = data.find(p => p.id === propertyId);
      if (!property) return;

      const detailsContainer = document.getElementById("property-details");
      detailsContainer.innerHTML = `
        <h2>${property.title}</h2>
        <img src="${property.image}" alt="${property.title}" class="img-fluid mb-3"/>
        <p><strong>Location:</strong> ${property.location}</p>
        <p><strong>Price:</strong> ${property.price}</p>
        <p><strong>Description:</strong> ${property.description}</p>
        <p><strong>Contact:</strong> ${property.phone}</p>
      `;
    });
});