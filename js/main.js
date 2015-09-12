var hidden = document.getElementById("email-form");
hidden.style.display = 'none';

function showSignupForm() {
  var cta = document.getElementById("cta");
  cta.style.display = 'none';
  hidden.style.display = '';
}
