jQuery(function($){

  // Variable récupérant la valeur de columnNumber
  let columnNumber = 0;
  
  // Gestion du click sur les boutons d'ajout de carte, récupère au clique sur le bouton +
    $('.btn-add').on("click", function (event) {
      console.log(`Click sur le bouton d'ajout de carte`);
      columnNumber = $(event.target).attr('data-number');
      $('#form-add-card').modal('show');
    });

  // Gestion du click sur le bouton "enregistrer" pour ajouter une carte
  $("#submit-btn-add").on("click", function() {
      console.log(`click sur le bouton de validation du formulaire d'ajout de carte`);
      
      // Création de l'élément du dom correspondant à la carte
      createDOMCard();

      // Cacher la modale
      $('#form-add-card').modal('hide');
  });

  
  /**
   * Création et ajout d'une carte dans le DOM
   */
  function createDOMCard() {
      let html_card = "";
    
      html_card += `<article class="mb-4 card bg-secondary p-1 pb-3 text-light">`;
      html_card += `<div class="d-flex">`;
      html_card += `<i class="fas fa-arrow-circle-left h3"></i>`;
      html_card += `<h4 class="pl-2 pr-2">` + $("#question").val() + `</h4>`;
      html_card += `<i class="fas fa-arrow-circle-right h3"></i>`;
      html_card += `<div class="ml-auto"><i class="far fa-trash-alt"></i></div>`;
      html_card += `</div>`;
      html_card += ` <div class="d-flex pl-2 pr-2 justify-content-between align-items-center flex-column">`;
      html_card += `<h5 class="pl-2 pr-2"> Réponse </h5>`;
      html_card += `<p>` + $("#answer").val() + `</p>`;
      html_card += `<div class = "d-flex"><button class="btn btn-warning">Proposer une réponse</button>`;
      html_card += `<i class="fas fa-cog h3 m-0"></i></div>`;
      html_card += `</div>`;
      html_card += `</article>`;


      // Appel de la fonction avec le numéro de la colonne, afin de l'injecter dans le "append to", pour ajouter la card à la bonne.
      $(html_card).appendTo(`.column-memo`+columnNumber);     
  }


});