document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const resultsBox = document.getElementById("autocompleteResults");

  searchInput.addEventListener("input", function () {
    const query = this.value.trim();

    if (query.length > 0) {
      // Simular resultados
      resultsBox.innerHTML = `
        <div class="p-2 hover-bg-light cursor-pointer">Resultado 1</div>
        <div class="p-2 hover-bg-light cursor-pointer">Resultado 2</div>
        <div class="p-2 hover-bg-light cursor-pointer">Resultado 3</div>
      `;
      resultsBox.classList.remove("d-none");
      resultsBox.classList.add("show");
    } else {
      resultsBox.classList.remove("show");
      setTimeout(() => resultsBox.classList.add("d-none"), 300);
    }
  });

  // Ocultar resultados al hacer clic fuera
  document.addEventListener("click", function (e) {
    if (!resultsBox.contains(e.target) && e.target !== searchInput) {
      resultsBox.classList.remove("show");
      setTimeout(() => resultsBox.classList.add("d-none"), 300);
    }
  });
});