let password = document.getElementById('password');
let confirmPass = document.getElementById('confirm-password');

confirmPass.addEventListener('keyup', e => {
    if (e.target.value !== password.value) {
        e.target.classList.add('error')
    } else {
        e.target.classList.remove('error')
    }
})