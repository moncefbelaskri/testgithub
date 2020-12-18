var password1;
var msg;

function password() {
    password1 = document.getElementById("mdp").value;
    if (password1.match(/[0-9]/g) &&
        password1.match(/[A-Z]/g) &&
        password1.match(/[a-z]/g) &&
        password1.length >= 10) {
        window.location.href = 'hard.html';
    } else { window.location.href = 'easy.html'; }


}