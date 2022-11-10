const faqs = {

  tmpl : (faqObject) => `
    <div class="accordion-container">
      <button class="accordion"><i>?</i>${faqObject.question}</button>
      <div class="panel">
          <p class="panel-tekst">${faqObject.answer}</p>
      </div>
    </div>`,


    
  show : () => {

      const  faqList = document.querySelector('#faq-list');

      fetch('https://smuknu.webmcdm.dk/questions').then(response => response.json()).then((response) => {

          let faqResult = response;
          

          if(faqList) {

              faqResult.map((faq) => {
                  
                  faqList.insertAdjacentHTML('beforeend', faqs.tmpl(faq))
              })
          }
      })
  }
}

faqs.show();





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
