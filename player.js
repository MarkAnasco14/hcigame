const playAsGuestBtn = document.getElementById("play-as-guest");
const signUpBtn = document.getElementById("sign-up");

playAsGuestBtn.addEventListener("click", () => {
  // Redirect to guest play page
  window.location.href = "guest-play.html";
});

signUpBtn.addEventListener("click", () => {
  // Show sign up form or redirect to sign up page
  // You can implement your own logic here
  alert("Sign Up button clicked!");
});
