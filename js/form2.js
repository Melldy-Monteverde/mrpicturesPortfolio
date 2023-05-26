const sent = () => {
  Swal.fire("Hi!", "Thank's for contact me!", "succes");
};

(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");
  const formID = document.getElementById("form-id");

  const feedback = document.querySelectorAll('.feedback')

  // Array.from(feedback).forEach(div => {
  //   div.classList.add('was-validated')
  // });

  const nameRegex = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/
  const emailRegex = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/

  const inputName = document.getElementById('inputName')
  const inputEmail = document.getElementById('inputEmail')

  const nameValue = inputName.value.trim()
  const emailValue = inputEmail.value.trim()

  formID.setAttribute(
    "action",
    // TODO: add own config
    "#"
  );

  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
          form.classList.add("was-validated");
        } else {
          sent();
          setTimeout(() => {
            form.classList.add("was-validated");
          }, 3000);
        }
      },
      false
    );
  });
})();
