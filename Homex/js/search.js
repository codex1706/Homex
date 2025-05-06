document.addEventListener("DOMContentLoaded", () => {
  const typeSelect = document.getElementById("propertyType");
  const locationSelect = document.getElementById("propertyLocation");
  const searchBtn = document.getElementById("searchBtn");
  const propertyListContainer = document.querySelector("#tab-1 .row.g-4");

  if (!typeSelect || !locationSelect || !searchBtn || !propertyListContainer) return;

  fetch("all_properties_realistic.json")
    .then(res => res.json())
    .then(properties => {
      const types = new Set();
      const locations = new Set();

      properties.forEach(p => {
        types.add(p.type);
        locations.add(p.location);
      });

      // Populate filters
      const anyType = new Option("Any", "Any");
      typeSelect.appendChild(anyType);
      [...types].forEach(t => typeSelect.appendChild(new Option(t, t)));

      const anyLoc = new Option("Any", "Any");
      locationSelect.appendChild(anyLoc);
      [...locations].forEach(loc => locationSelect.appendChild(new Option(loc, loc)));

      searchBtn.addEventListener("click", () => {
        const type = typeSelect.value;
        const location = locationSelect.value;

        const results = properties.filter(p =>
          (type === "Any" || p.type === type) &&
          (location === "Any" || p.location === location)
        );

        renderResults(results);
      });
    });

  function renderResults(properties) {
    propertyListContainer.innerHTML = "";

    properties.forEach(property => {
      const card = document.createElement("div");
      card.className = "col-lg-4 col-md-6 wow fadeInUp";
      card.setAttribute("data-wow-delay", "0.1s");

      card.innerHTML = `
        <div class="property-card" style="cursor:pointer;">
          <div class="property-item rounded overflow-hidden">
            <div class="position-relative overflow-hidden">
              <img class="img-fluid" src="${property.image}" alt="${property.title}">
              <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">${property.status || 'For Sale'}</div>
            </div>
            <div class="p-4 pb-0">
              <h5 class="text-primary mb-3">${property.price}</h5>
              <a class="d-block h5 mb-2">${property.title}</a>
              <p><i class="fa fa-map-marker-alt text-primary me-2"></i>${property.location}</p>
            </div>
          </div>
        </div>`;

      card.addEventListener("click", () => {
        window.location.href = `blank2.html?id=${property.id}`;
      });

      propertyListContainer.appendChild(card);
    });
  }
});