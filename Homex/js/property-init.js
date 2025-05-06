document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".property-card[data-id]").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-id");
        if (id) {
          window.location.href = `blank2.html?id=${id}`;
        }
      });
    });
  });