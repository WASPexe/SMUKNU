import { accordion } from "./accordion.js";

const faqs = {

  tmpl : (faqObject) => `
    <div class="accordion-container">
      <div class="accordion"><i>?</i>${faqObject.question}</div>
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

                  accordion.activate();

              })
          }
      })
  }
}

faqs.show();