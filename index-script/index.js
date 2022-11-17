const reviews = {

  tmpl : (reviewObject) => `
  <article class="reviews-container">
    <div class="reviews-container-img">
        <img src="${reviewObject.image}" alt="SMUK Kunde">
        <p>${reviewObject.name}<br>${reviewObject.byline}</p>    
    </div>

    <p class="review">${reviewObject.description}</p>
    </article>`,


    
  showReview : () => {

      const  reviewList = document.querySelector('#review-container');

      fetch('https://smuknu.webmcdm.dk/reviews').then(response => response.json()).then((response) => {

          let reviewResult = response;

          if(reviewList) {

              reviewResult.map((review) => {
                  
                  reviewList.insertAdjacentHTML('beforeend', reviews.tmpl(review))

              })
          }
      })
  }
}

reviews.showReview();