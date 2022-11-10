
/* Get element */
let acc = document.getElementsByClassName('accordion');
let i;

for (i = 0; i < acc.length; i++) {
  /* Tjek for click */
  acc[i].addEventListener("click", function() {

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