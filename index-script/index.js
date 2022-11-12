const reviews = {

  tmpl : (reviewObject) => `
  <article id="review-container" class="reviews-container">
    <div class="reviews-container-img">
        <img src="${reviewObject.image}" alt="SMUK Kunde">
    </div>

    <p class="review">${reviewObject.description}</p>

    <div class="reviews-container-customer">
        <p>${reviewObject.name}</p>
        <p>${reviewObject.byline}</p>
    </div>
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