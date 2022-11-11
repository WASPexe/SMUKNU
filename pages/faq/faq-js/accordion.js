export const accordion = {

  /* Get element */
  acc : document.getElementsByClassName('accordion'),

    activate : () => {

      for (let i = 0; i < accordion.acc.length; i++) {
        /* Tjek for click */
        accordion.acc[i].addEventListener("click", function() {
      
          /* Tilføj .active css klasse */
          this.classList.toggle("active");
          let panel = this.nextElementSibling;
      
          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          }
          
        });
      }
    }
}

