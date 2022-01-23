import header from "../components/header.js"
var head = document.getElementById("header");
head.innerHTML = header();

import footer from "../components/footer.js"
var foot = document.getElementById("footer");
foot.innerHTML = footer();

var searchBox;
document.getElementById("clearBtn").addEventListener("click", clearData);
function clearData() {
    searchBox = document.getElementById("searchBox").value;

    if (searchBox) {
        document.getElementById("searchBox").value = null
        document.querySelector(".searchFoodResults").style.display = "none";
        document.querySelector(".topCata").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}


let food_waiting;
document.getElementById("searchBox").addEventListener("input", deBounce);
async function foodSearch() {
    try {

        searchBox = document.querySelector("#searchBox").value;

        let res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBox}`
        );
        let data = await res.json();
        let meals = data.meals;
        if (meals == null) {
            document.querySelector(".searchFoodResults").style.display = "none";
            document.querySelector(".error").style.display = "block"
            document.querySelector(".error").style = `display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            margin-top: 40px;`

        } else {
            document.querySelector(".error").style.display = "none"
        }
        appendData(meals);

        console.log(meals);
    } catch (err) {
        console.log("er:", err);
    }
}

function appendData(meals) {

    let searchResult = document.querySelector("#searchResult");
    searchResult.innerHTML = "";
    if (meals == undefined) {
        return false;
    }

    meals.forEach(({ strMeal, strMealThumb }) => {
        let div = document.createElement("div");
        div.setAttribute("class", "productDiv")

        let img = document.createElement("img");
        img.src = strMealThumb;
        let p = document.createElement("p");
        p.setAttribute("id", "searchHistory");
        p.innerText = strMeal;

        let div2 = document.createElement("div");

        let price = document.createElement("p");
        price.innerHTML = "₹ 249";
        let btn = document.createElement("button");
        btn.setAttribute("id", "cartBtn");
        btn.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb, price }))
        });
        btn.innerHTML = "ADD <sup>+</sup>"


        div2.append(price, btn)
        div.append(img, p, div2);
        searchResult.append(div);
    });
}

function deBounce() {

    searchBox = document.getElementById("searchBox").value;

    if (searchBox) {
        if (food_waiting) {
            clearTimeout(food_waiting);
        }


        food_waiting = setTimeout(function () {
            foodSearch();
            alsolike();
        }, 2000);


        document.querySelector(".searchFoodResults").style.display = "block";
        document.querySelector(".topCata").style.display = "none";
        document.querySelector("#continental").style.display = "none";
    } else {
        document.querySelector(".searchFoodResults").style.display = "none";
        document.querySelector(".topCata").style.display = "block";

    }


}


var cart = JSON.parse(localStorage.getItem("CartData")) || []
function sideCart({ strMeal, strMealThumb, price }) {
    document.querySelector(".cartmain").style = `
    grid-template-areas: "c c c c c c c c c s s s ";
    `;
    document.querySelector(".sideCartMain").style.display = "block";
    document.querySelector(".container").style.width = "100%";
    document.querySelector(".secondpart").style.width = "94%";
    document.querySelector("#dodiv1").style.marginLeft = "4%";
    document.querySelector("#dodiv2").style.marginLeft = "52px";
    document.querySelector("#inp").style.width = "380px";

    let cartData = {
        strMeal,
        strMealThumb,
        price: 249
    }
    cart.push(cartData)
    localStorage.setItem("CartData", JSON.stringify(cart));
    appendCart(cart)
    cartTotal()

    console.log(cartData)

}


function appendCart(cart) {
    let sideCartData = document.querySelector(".sideCart");

    document.querySelector(".sideCart").innerHTML = "";

    document.querySelector("#cartLength").innerHTML = `${cart.length} items`;

    cart.map(function (elem, index) {
        let div = document.createElement("div");
        div.setAttribute("class", "sideCartDiv")


        let p = document.createElement("p");
        p.setAttribute("id", "searchHistory");
        p.innerText = elem.strMeal;

        let div2 = document.createElement("div");

        let price = document.createElement("p");
        price.innerText = elem.price
        let span = document.createElement("span");

        let btn1 = document.createElement("button")
        btn1.setAttribute("id", "dec")
        btn1.innerHTML = "-"
        btn1.addEventListener("click", function () {
            dec(index)
        })

        let btn2 = document.createElement("button")
        btn2.setAttribute("id", "count")
        btn2.innerHTML = 1


        let btn3 = document.createElement("button")
        btn3.setAttribute("id", "inc")
        btn3.innerHTML = "+"

        span.append(btn1, btn2, btn3)


        div2.append(price, span)
        div.append(p, div2);
        sideCartData.append(div);
    })

}



function cartTotal() {
    var cTotal = document.querySelector(".total");
    var parsedData = JSON.parse(localStorage.getItem("CartData"));
    var cartTotal = 0;
    parsedData.map((data) => {
        cartTotal += Number(data.price);
    });

    cTotal.innerHTML = `₹ ${cartTotal}`;
    console.log(cartTotal)


}




function dec(index) {

    cart.splice(index, 1);
    localStorage.setItem("CartData", JSON.stringify(cart));
    appendCart(cart)
    cartTotal()

}


document.getElementById("placeOrder").addEventListener("click", function () {
    window.location.href = "paymentbycard.html"
})




// ---alsolike----

async function alsolike() {
    try {

        searchBox = document.querySelector("#searchBox").value;

        let res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?a=American`
        );
        let data = await res.json();
        let meal = data.meals;
        appendLike(meal)
        console.log("also", meal);
    } catch (err) {
        console.log("er:", err);
    }
}

function appendLike(meals) {

    let also = document.querySelector(".alsolike");
    also.innerHTML = "";
    if (meals == undefined) {
        return false;
    }

    meals.forEach(({ strMeal, strMealThumb }) => {
        let div = document.createElement("div");
        div.setAttribute("class", "likeDiv")

        let img = document.createElement("img");
        img.src = strMealThumb;
        let p = document.createElement("p");
        p.innerText = strMeal;

        let div2 = document.createElement("div");

        let price = document.createElement("p");
        price.innerHTML = "₹ 249";
        let btn = document.createElement("button");
        btn.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb, price }))
        });
        btn.innerHTML = "ADD <sup>+</sup>"


        div2.append(p, price)
        div.append(img, div2, btn);
        also.append(div);
    });
}




document.getElementById("close").addEventListener("click", function () {
    document.querySelector(".sideCartMain").style.display = "none";
    document.querySelector(".cartmain").style = `
    grid-template-areas: "c c c c c c c c c c c c ";
    `;
})

document.querySelector(".foodDiv").addEventListener("click", continental);


async function continental() {
    alsolike();
    document.querySelector(".topCata").style.display = "none";
    document.querySelector(".searchFoodResults").style.display = "block";
    try {


        let res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian`

        );
        let Contdata = await res.json();
        let meals = Contdata.meals;

        appendConti(meals);

        console.log("cont", meals);
    } catch (err) {
        console.log("er:", err);
    }



}

function appendConti(meals) {

    let searchResult2 = document.querySelector("#continental");
    searchBox = document.getElementById("searchBox").value = "continental";

    searchResult2.innerHTML = ""
    if (meals == undefined) {
        return false;
    }

    meals.forEach(({ strMeal, strMealThumb }) => {
        let div = document.createElement("div");
        div.setAttribute("class", "productDiv")

        let img = document.createElement("img");
        img.src = strMealThumb;
        let p = document.createElement("p");
        p.setAttribute("id", "searchHistory");
        p.innerText = strMeal;

        let div2 = document.createElement("div");

        let price = document.createElement("p");
        price.innerHTML = "₹ 249";
        let btn = document.createElement("button");
        btn.setAttribute("id", "cartBtn");
        btn.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb, price }))
        });
        btn.innerHTML = "ADD <sup>+</sup>"


        div2.append(price, btn)
        div.append(img, p, div2);
        searchResult2.append(div);
    });
}

document.getElementById("homeimg").addEventListener("click", function () {
    window.location.href = "index.html"
})