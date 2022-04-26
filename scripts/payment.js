//btn id= addbtn
let btn = document.getElementById("addbtn")
btn.onclick = () => {
    getWeather()

}

async function getWeather() {
    try {
        let city = document.getElementById("inputaddress").value;


        let responce = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ddc894a0a38425be12ca6bbf79cb31e5&units=metric`
        );

        let data = await responce.json()
        //showWhether(data);
        addMap(city)
        console.log("data:", data);
    } catch (err) {
        console.log("err:", err);
    }

}

function addMap(city) {




    let n = document.querySelector("#divmap")
    n.innerHTML = ` <iframe class="gmap_iframe"
              frameborder="0" 
              scrolling="no" 
              marginheight="0"
               marginwidth="0"
               height="100%"
               width="100%"
               src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=${city}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
             </iframe>`




}



document.querySelector("#sub").addEventListener("click", check_details);
function check_details() {
    var card_nbr = document.querySelector("#card_nbr").value;
    var exp_mon = document.querySelector("#expiry_month").value;
    var exp_year = document.querySelector("#expiry_year").value;
    var name_on = document.querySelector("#name").value;
    var cvv = document.querySelector("#cvv").value;
    if (
        card_nbr.length == 0 ||
        exp_mon.length == 0 ||
        exp_year.length == 0 ||
        name_on.length == 0 ||
        cvv.length == 0
    ) {
        alert("enter all details,all fileds are mandatory");
    } else {
        if (cvv.length == 3 && card_nbr.length == 12) {
            window.location.href = "/thankyou..html";
        } else {
            alert("Invalid card details...");
        }

        document.querySelector("#card_nbr").value = "";
        document.querySelector("#expiry_month").value = "";
        document.querySelector("#expiry_year").value = "";
        document.querySelector("#name").value = "";
        document.querySelector("#cvv").value = "";
    }
}
var cart = JSON.parse(localStorage.getItem("CartData")) || [];
appendCart(cart);
function appendCart(cart) {
    let sideCartData = document.querySelector(".sideCart");

    document.querySelector(".sideCart").innerHTML = "";

    cart.map(function (elem, index) {
        let div = document.createElement("div");
        div.setAttribute("class", "sideCartDiv");

        let p = document.createElement("p");
        p.setAttribute("id", "searchHistory");
        p.innerText = elem.strMeal;

        let div2 = document.createElement("div");

        let price = document.createElement("p");
        price.innerText = elem.price;
        let span = document.createElement("span");

        let btn1 = document.createElement("button");
        btn1.setAttribute("id", "dec");
        btn1.innerHTML = "-";
        btn1.addEventListener("click", function () {
            dec(index);
        });

        let btn2 = document.createElement("button");
        btn2.setAttribute("id", "count");
        btn2.innerHTML = 1;

        let btn3 = document.createElement("button");
        btn3.setAttribute("id", "inc");
        btn3.innerHTML = "+";

        span.append(btn1, btn2, btn3);

        div2.append(price, span);
        div.append(p, div2);
        sideCartData.append(div);
    });
}

function cartTotal() {
    var cTotal = document.querySelector("#bag_total");
    var c2Total = document.querySelector("#payable");
    var parsedData = JSON.parse(localStorage.getItem("CartData"));
    var cartTotal = 0;
    parsedData.map((data) => {
        cartTotal += Number(data.price);
    });

    cTotal.innerHTML = `₹ ${cartTotal}`;
    c2Total.innerHTML = `₹ ${cartTotal}`;
    console.log(cartTotal);
}
cartTotal();
function dec(index) {
    cart.splice(index, 1);
    localStorage.setItem("CartData", JSON.stringify(cart));
    appendCart(cart);
    cartTotal();
}




document.getElementById("homeimg").addEventListener("click", function () {
    window.location.href = "index.html"
})

document.getElementById("help_div").addEventListener("click", function () {
    window.location.href = "help.html"
})





