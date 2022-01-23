document.querySelector("#regForm").addEventListener("submit", chekcforblank);
var user_details = JSON.parse(localStorage.getItem("usercred")) || [];
console.log(user_details)

function chekcforblank(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value

    var userobj = {
        // email: email,
        mobile: mobile,
    };


    user_details.push(userobj);
    localStorage.setItem("usercred", JSON.stringify(user_details));
    alert("Sign up Successful")
    window.location.href = "login.html"
}