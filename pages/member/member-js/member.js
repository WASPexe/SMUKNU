// Form validation
let formular = document.querySelector("#form");

//Hvis der er en formular på siden så aktiver vi det.
if (formular !== null) {
  formular.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log("HAJ", e);
    let surName = document.querySelector("#name");
    let email = document.querySelector("#email");
    console.log("Submit", surName.value);

    let submitKnap = document.querySelector(".send-knap");
    submitKnap.classList.remove("submit.btn");
    submitKnap.classList.add("active");
    submitKnap.innerHTML = "TAK FOR DIN BESKED " + surName.value;

    surName.value = "";
    email.value = "";
  });
}