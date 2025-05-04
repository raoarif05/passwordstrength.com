let pass = document.getElementById('password');
let msg = document.getElementById('message');
let passinput = document.getElementById('passWordInput');

pass.addEventListener('input', () => {
    if(pass.value.length == 0) {
        msg.innerHTML = "Type Your Password Above";
        msg.style.color = "#c7c7c7";
        passinput.style.borderColor = "#2b7987";
    } else if(pass.value.length > 0 && pass.value.length < 6) {
        msg.innerHTML = "Password is Weak";
        msg.style.color = "red";
        passinput.style.borderColor = "red";
    } else if(pass.value.length > 5 && pass.value.length < 8) {
        msg.innerHTML = "Password is Medium";
        msg.style.color = "yellow";
        passinput.style.borderColor = "yellow";
    } else if(pass.value.length >= 9) {
        msg.innerHTML = "Password is Strong";
        msg.style.color = "#9acd32";
        passinput.style.borderColor = "#9acd32";
    }
})