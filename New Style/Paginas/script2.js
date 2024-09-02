//Abre el formulario cuando se hace click en la flecha
document.getElementById('searchIcon').addEventListener('click', function (event) {
    event.stopPropagation(); // Evita que el clic en el ícono cierre el formulario
    var searchFormContainer = document.getElementById('searchFormContainer');
    if (searchFormContainer.style.display === 'none' || searchFormContainer.style.display === '') {
      searchFormContainer.style.display = 'inline-block';
    } else {
      searchFormContainer.style.display = 'none';
    }
    // Mueve el formulario antes de la lupa
    searchFormContainer.parentNode.insertBefore(searchFormContainer, document.getElementById('searchIcon').parentNode);
});

// Cierra el formulario si se hace clic fuera de él
document.addEventListener('click', function (event) {
    var searchFormContainer = document.getElementById('searchFormContainer');
    var searchIcon = document.getElementById('searchIcon');
    if (!searchFormContainer.contains(event.target) && event.target !== searchIcon) {
      searchFormContainer.style.display = 'none';
    }
});