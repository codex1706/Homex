
document.addEventListener("DOMContentLoaded", () => {
  const allCards = document.querySelectorAll(".property-card");
  const filterButtons = document.querySelectorAll(".filter-btn");

  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter;

      // Toggle active button styling
      filterButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      allCards.forEach(card => {
        const status = card.dataset.status;

        if (
          filter === "featured" ||
          (filter === "for sale" && status === "for sale") ||
          (filter === "for rent" && status === "for rent")
        ) {
          card.parentElement.style.display = "block";
        } else {
          card.parentElement.style.display = "none";
        }
      });
    });
  });
});
