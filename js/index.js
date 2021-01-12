
// onClick functions
function clickGUI() {

 window.location.replace("gui.html");

}

function getContactInfo() {

 alert("You can contact me on discord at: Itchs#7216. My DMs are open to anyone (just don't be a jerk)");

}

function signUp() {

  window.location.replace("signup.html");

}

function login() {

  window.location.replace("login.html");

}

// Modal stuff
var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})