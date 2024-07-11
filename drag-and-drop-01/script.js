const dragAndDropItems = document.getElementById(
    'team-members'
);

// EL Drag es muy sencillo
//  -- La Instancia tiene varios Eventos
//  -- Podemos Personalizar el Evento con Clases de CSS
new Sortable(dragAndDropItems, {
   animation: 350,
   chosenClass: "team-member-chosen",
   dragClass: "team-member-drag",
});

// -- AL Arrastrar debenmos hacer la opacidad 0

