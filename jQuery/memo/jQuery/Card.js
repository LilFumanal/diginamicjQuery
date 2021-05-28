jQuery(function($){
  
  // Variable récupérant la valeur de columnNumber
  let columnNumber = 0;
  // Initiation de l'id de la card
  let cardID = 1;
  let card = null;
  
  /************ Gestion du click sur les boutons d'ajout de carte, récupère au clique sur le bouton + **********/
    $('.btn-add').on("click", function (event) {
      console.log(`Click sur le bouton d'ajout de carte`);
      // Récupère le numéro de la colonne
      columnNumber = $(event.target).attr('data-number');
      $('#form-add-card').modal('show');
      $(".modal-title").text("Ajouter une carte");
      // Sélectionne le bon bouton à afficher pour ajouter une carte
      $('#submit-btn-add').show()
      $('#submit-btn-modify').hide();
      $("#submit-btn-add").text("Enregistrer");
      //réinitialise la valeur de l'input 
      $('#question').val('');
      $('#answer').val('');
    });

  /********** Gestion du click sur le bouton "enregistrer" pour ajouter une carte ******/
  $("#submit-btn-add").on("click", function() {
      console.log(`click sur le bouton de validation du formulaire d'ajout de carte`);
      
      // Création de l'élément du dom correspondant à la carte
      createDOMCard();

      // Cacher la modale
      $('#form-add-card').modal('hide');
      // Incrémente l'id de la carte dès qu'une carte est enregistrée
      cardID++;
  });

  /**
   * Création et ajout d'une carte dans le DOM
   */

  function createDOMCard() {
    let html_card = "";
    // l'id de la carte, pour que chacun aie un ID unique
    html_card += `<article class="mb-4 card bg-secondary p-1 pb-3 text-light" id="` + cardID + `">`;
    html_card += `<div class="d-flex">`;
    html_card += `<i class="fas fa-arrow-circle-left h3" ></i>`;
    // Met la valeur de l'input #Question dans le h4.question du html_card
    html_card += `<h4 class="pl-2 pr-2 question">` + $("#question").val() + `</h4>`;
    html_card += `<i class="fas fa-arrow-circle-right h3"></i>`;
    html_card += `<div class="ml-auto"><button class="btn btn-delete" type="button"><i class="far fa-trash-alt"></i></button></div>`;
    html_card += `</div>`;
    html_card += ` <div class="d-flex pl-2 pr-2 justify-content-between align-items-center flex-column">`;
    html_card += `<h5 class="pl-2 pr-2"> Réponse </h5>`;
      // Met la valeur de l'input #Réponse dans le p.answer du html_card
    html_card += `<p class="answer">` + $("#answer").val() + `</p>`;
    html_card += `<div class = "d-flex"><button class="btn btn-warning">Proposer une réponse</button>`;
    html_card += `<button class="btn btn-modify" type="button"><i class="fas fa-cog h3 m-0"></i></button></div>`;
    html_card += `</div>`;
    html_card += `</article>`;
    
    
    // Appel de la fonction avec le numéro de la colonne, afin de l'injecter dans le "append to", pour ajouter la card à la bonne.
    $(html_card).appendTo(`.column-memo`+columnNumber);    
    
      /********** Suppression de la carte ***********/
      $('.btn-delete').on("click", function(event) {
        console.log(`Click sur le bouton supprimer de carte`);
        card = $(event.target).parents('article');
        $(card).remove();
      });

      /********** Modification de la carte ***********/
      $('.btn-modify').on("click", function(event) {
        console.log(`Click sur le bouton modifier de carte`);
        // Chargement de la carte sélectionnée
        card = $(event.target).parents('article');
        $('#form-add-card').modal('show');
        // Modification de la modale en conséquence
        $(".modal-title").text("Modifier une carte");
        $('#submit-btn-add').hide();
        $('#submit-btn-modify').show();
        $("#submit-btn-modify").text("Modifier");
        // Récupère la question présente dans la card et la réinjecte dans l'input
        let myQuestion = $(".question", card).text();
        $('#question').val(myQuestion);
        let myAnswer = $(".answer", card).text();
        $("#answer").val(myAnswer);
      });


      /********** Gestion du click sur le bouton "modifier" pour ajouter une carte ******/
      $("#submit-btn-modify").on("click", function(event) {
        console.log(`La carte a été modifiée`);
        // Enregistrer les changements dans la carte
        $('.question', card).text($("#question").val());
        $('.answer', card).text($("#answer").val());

        // Cacher la modale
        $('#form-add-card').modal('hide'); 
    });
  }
  
  
  
});