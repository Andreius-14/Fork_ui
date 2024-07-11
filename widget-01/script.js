// All <a>
const allLinks = document.querySelectorAll(".tabs a"); 
// All <Articles>
const allTabs = document.querySelectorAll(".tab-content"); 
// Padre De <Articles>
const tabContentWrapper = document.querySelector(".tab-content-wrapper");

// Parametro Id Del <a>  [Desplaza Scroll Lista]
const shiftTabs = (linkId) => {
  // verifica  <Article> 1 , <Article>2 ... <Articles>Final
  allTabs.forEach((tab, i) => {

    // <Article> Tiene Coincidencia con ID <a>
    if (tab.id.includes(linkId)) {

      allTabs.forEach((tabItem) => {
        tabItem.style = `transform: translateY(-${ i *300}px);`;
      });
    }
  });
};

// [DA Luz a la Lista Cliqueada]
// [Envia Id <a> Cliqueado a La funcion Scrool]
allLinks.forEach((elem) => {

  // Triggers <a> [Click] [Del Elemento Cliqueado Optenemos los Datos]
  elem.addEventListener("click", function () {

    const linkId = elem.id;              
    const hrefLinkClick = elem.href;  

    // Cheamos All <a> [Verificamos Cual tiene el id cliqueado, Añade Class]
    allLinks.forEach((link, i) => {   
      link.classList.toggle('active', link.href === hrefLinkClick);
    });

    shiftTabs(linkId);
  });
});

//    Habilitar por defecto a la Primera de la Lista
//    La data se guarda en la URL - <a href="Esta data se envia a la URL" > 
const currentHash = window.location.hash;  // Optiene Id de URL
let activeLink = document.querySelector(`.tabs a`); // Selecciona Primer <A>

// Usar Si hay # en la URL
if (currentHash) {
  // Optiene ID <a> Del URL
  const visibleHash = document.getElementById( `${currentHash.replace("#", "")}`);

  if (visibleHash) {
    activeLink = visibleHash; // Seleccion Predeterminado = el # del url
  }
}

activeLink.classList.toggle("active");

shiftTabs(activeLink.id);  //Scrool Por Defecto
