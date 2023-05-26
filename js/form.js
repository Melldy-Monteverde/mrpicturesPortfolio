const form = document.getElementById("form-id");
const userName = document.getElementById('userName')
const userEmail = document.getElementById('userEmail')

const sent = () => {
  Swal.fire("Hi!", "Thank's for contact me!", "succes");
};

form.addEventListener('submit', e => {
  e.preventDefault()

  // get form entries
  // const data = Object.fromEntries(new FormData(e.target))
  // console.log(JSON.stringify(data))

  validateInputs()
  form.reset()
})

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerHTML = message;
  inputControl.classList.add('error');
  inputControl.classList.remove('success')
}

const setSuccess = element => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector('.error');

  errorDisplay.innerHTML = '';
  inputControl.classList.add('success');
  inputControl.classList.remove('error');
};

const isValidEmail = email => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
  const userNameValue = userName.value.trim()
  const userEmailValue = userEmail.value.trim()

  if (userNameValue === '') {
    setError(userName, `<i class="fas fa-times"></i> Username is required`);
  } else {
    setSuccess(userName);
  }

  if (userEmailValue === '') {
    setError(userEmail, `<i class="fas fa-times"></i> Email is required`);
  } else if (!isValidEmail(userEmailValue)) {
    setError(userEmail, `<i class="fas fa-times"></i> Provide a valid email address`);
  } else {
    setSuccess(userEmail);
  }
}
