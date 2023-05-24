const sent = () => {
  Swal.fire("Hi!", "Thank's for contact me!", "succes");
};

(() => {
  "use strict";

  const forms = document.querySelectorAll(".needs-validation");
  const formID = document.getElementById("form-id");

  formID.setAttribute(
    "action",
    // TODO: add own config
    // "https://formsubmit.co/b5e83f79958bd859bd2f89880fde2ac2"
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
