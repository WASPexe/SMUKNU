let nameError = document.getElementById('name-error');
let emailError = document.getElementById('email-error');
let messageError = document.getElementById('text-error');
let submitError = document.getElementById('submit-error');

function validateName(){

  let name = document.getElementById('contact-name').value;

    if(name.length == 0){
      nameError.innerHTML = 'Navn er påkrævet';
      return false;
    }
    //Bogstavs + for og efternavn validering
    if(!name.match(/^[A-Åa-å]*\s{1}[A-Åa-å]*$/)){
      nameError.innerHTML = 'Fulde navn er påkrævet';
      return false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
};

function validateEmail(){
  let email = document.getElementById('contact-email').value;

  if(email.length == 0){
    emailError.innerHTML = 'Email er påkrævet';
  }
  if(!email.match(/^[A-Åa-å\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = 'Email ikke gyldig'
    return false;
  }

  emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
};

function validateMessage(){
  let message = document.getElementById('contact-message').value;
  let required = 0;
  let left = required - message.length;

  if(required > 0){
    messageError.innerHTML = 'Her skal skrives en besked';
    return false;
  }

  messageError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;

};

function validateForm(){
  if(!validateName() || !validateEmail() || !validateMessage()){
    submitError.style.display = 'block';
    
    submitError.innerHTML = 'Udfyld venligst alle felter';

    setTimeout(function(){submitError.style.display = 'none';}, 3000 );

    return false;
  }
};




let form = document.getElementById('myForm')

form.addEventListener('submit', function(e){
  //auto submission 

  e.preventDefault()

  let name = document.getElementById('contact-name').value
  let email = document.getElementById('contact-email').value
  let message = document.getElementById('contact-message').value

  fetch("https://smuknu.webmcdm.dk/subscribe", {
    method: 'POST',
    body: JSON.stringify({
      name: name,
      email:email,
      message:message
    }),
    headers:{
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    console.log(data);

    const resultList = document.querySelector('#result');
    resultList.insertAdjacentHTML('beforeend', `
    
    <div class="result-container">
      <h2>TAK!</h2>
      <p class="customer-name">${data.result.name}</p>
      <p>Vi er enormt glade for at få dig som medlem</p>
      <img src="/src/img/Product01-Balm.png" alt="">
      <p>Kig i din inbox vi har sendt en lille velkomst gave</p>.
      <div class="results-button"><a href="/index.html">Til forsiden</a></div>
    </div>`
    )

  })
})