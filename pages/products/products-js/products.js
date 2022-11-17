

const products = {

    tmpl : (productObject) => `
        <div class="product">
            <div class="product-container">
                <img src="${productObject.image}" alt="">
                ${productObject.discountInPercent ? `<span class="discount">Spar<br>${productObject.discountInPercent}%</span>` : ''}
                <div class="product-container-text">
                    <p class="product-title">${productObject.title}</p>
                    <p class="price">${productObject.price}.</p>
                </div>
            </div>
        </div>`,

    show : () => {

        const  productsList = document.querySelector('#products-list');
        const  productsListAll = document.querySelector('#products-list-all');

        fetch('https://smuknu.webmcdm.dk/products/').then(response => response.json()).then((response) => {

            let productsResult = response;
            let productsResultFiltered = response.filter((product) => product.recommended);

            if(productsListAll) {

                productsResult.map((product) => {
                    
                    productsListAll.insertAdjacentHTML('beforeend', products.tmpl(product))
                })

            }
        
            if(productsList){

                productsResultFiltered.map((product) => {
                    
                    productsList.insertAdjacentHTML('beforeend', products.tmpl(product))
                })

            }

        })


    }

}

products.show();