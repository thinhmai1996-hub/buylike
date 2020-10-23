document.getElementById("style").href = "/assets/css/style.css?v=" + Math.random();

function handleSubmit() {
    event.preventDefault();
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let loginPasswordError = document.getElementById("login_password-error")
        .classList;
    let loginEmailError = document.getElementById("login-email-error");
    let loginForm = document.getElementById("login-form");

    password === ""
        ? loginPasswordError.remove("d-none")
        : loginPasswordError.add("d-none");
    if (email === "") {
        loginEmailError.classList.remove("d-none");
    } else if (!email.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
        loginEmailError.innerHTML = "Enter valid email address";
        loginEmailError.classList.remove("d-none");
    } else {
        loginEmailError.classList.add("d-none");
        loginEmailError.innerHTML = "Please enter email";
        alert("Đăng Nhập Thành Công !");
        loginForm.reset();
    }
}
