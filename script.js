const form = document.getElementById("form");
const email = document.querySelector(".ping-email");

const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const span = document.querySelector(".ping-check");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (email.value == "") {
    span.innerHTML = "Please enter an email";
  } else if (!pattern.test(email.value)) {
    span.innerHTML = "Check your email again";
    email.style.border = "1px solid hsl(354, 100%, 66%)";
  } else {
    span.innerHTML = "";
    email.style.border = "1px solid  hsl(223, 87%, 63%)";
  }
});
