let loginDetails = JSON.parse(localStorage.getItem("usercred")) || []
console.log(loginDetails)

function loginsucess() {


    let flag = false;
    let mobile = document.querySelector("#mobile").value;
    if (mobile == 007) {
        window.location.href = "/admin.html"
    } else {
        for (var i = 0; i < loginDetails.length; i++) {
            if (loginDetails[i].mobile == mobile) {
                flag = true;
            }
        }
    }
    if (flag === true) {
        let otimep = random();
        alert(otimep);
        let enter = prompt("Enter OTP");
        if (enter != null && Number(enter) === otimep) {
            setTimeout(function () {
                alert("Login sucessfull")
                window.location.href = "index.html"
            }, 0);
        } else {
            alert("Invalid OTP");
            window.location.href = "login.html";
        }
    } else {
        alert("Wrong Credentials");
    }

}

function random() {
    var otp = Math.round(1000 + Math.random() * 8999);
    return otp;
}