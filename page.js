
document.addEventListener('DOMContentLoaded', function () {
  const dropdownButton = document.getElementById('dropdown-button');
  const dropdownMenu = document.getElementById('dropdown-menu');

  dropdownButton.addEventListener('click', function (event) {
    event.preventDefault(); // Evita el comportamiento predeterminado de navegación
    dropdownMenu.classList.toggle('hidden');
  });
});
