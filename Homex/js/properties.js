document.addEventListener("DOMContentLoaded", function () {
  fetch("all_properties_realistic.json")
    .then(response => response.json())
    .then(properties => {
      const container = document.querySelector("#tab-1 .row.g-4");
      container.innerHTML = ""; // Clear existing cards

      const wowDelays = ["0.1s", "0.2s", "0.3s", "0.4s", "0.5s", "0.6s"];

      properties.forEach((property, index) => {
        const delay = wowDelays[index % wowDelays.length];
        const card = document.createElement("div");
        card.className = `col-lg-4 col-md-6 wow fadeInUp`;
        card.setAttribute("data-wow-delay", delay);

        card.innerHTML = `
          <div class="property-card" data-status="${property.status.toLowerCase()}" data-type="${property.type}" style="cursor:pointer;">
            <div class="property-item rounded overflow-hidden">
              <div class="position-relative overflow-hidden">
                <a href="blank.html?id=property-${property.id}" class="property-link" data-id="property-${property.id}">
                  <img alt="${property.title}" class="img-fluid" src="${property.image}" />
                </a>
                <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">${property.status}</div>
                <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">${property.type}</div>
              </div>
              <div class="p-4 pb-0">
                <h5 class="text-primary mb-3">${property.price}</h5>
                <a class="d-block h5 mb-2 property-link" href="blank.html?id=property-${property.id}" data-id="property-${property.id}">
                  ${property.title}
                </a>
                <p><i class="fa fa-map-marker-alt text-primary me-2"></i>${property.location}</p>
              </div>
            </div>
          </div>
        `;

        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Failed to load properties:", error);
    });
});