const mainItems = document.querySelectorAll(
  '.main-item'
);

//[Selecciono a todos]
//[A todos les doy un trigger][Cambia Class]
mainItems.forEach((mainItem) => {
  mainItem.addEventListener('click', () => {
    mainItem.classList.toggle(
      'main-item--open'
    );
  })
});



