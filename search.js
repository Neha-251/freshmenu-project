let searchBox;
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
        price.innerText = "₹ 250"
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
        }, 2000);
        document.querySelector(".searchFoodResults").style.display = "block";
        document.querySelector(".topCata").style.display = "none";
    } else {
        document.querySelector(".searchFoodResults").style.display = "none";
        document.querySelector(".topCata").style.display = "block";
    }


}
function sideCart({ strMeal, strMealThumb, price }) {
    document.querySelector(".cartmain").style = `
    grid-template-areas: "c c c c c c c c c s s s ";
    `;
    document.querySelector(".sideCartMain").style.display = "block";
    document.querySelector(".container").style.width = "90%";

    var cart = JSON.parse(localStorage.getItem("CartData")) || []
    let cartData = {
        strMeal,
        strMealThumb,
        price: price.innerText
    }
    appendCart(cartAppend)
    cart.push(cartData)
    localStorage.setItem("CartData", JSON.stringify(cart));

    console.log(cartData)

}

let cartAppend = JSON.parse(localStorage.getItem("CartData")) || [];

function appendCart(cartAppend) {
    let sideCartData = document.querySelector(".sideCart");

    document.querySelector(".sideCart").innerHTML = "";
    document.querySelector("#cartLength").innerHTML = `${cartAppend.length} items`;

    cartAppend.map(function (elem, index) {
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






let counterDisplayElem = document.querySelector('#count');
let counterMinusElem = document.querySelector('#dec');
let counterPlusElem = document.querySelector('#inc');

let counter = 1;


counterPlusElem.addEventListener("click", () => {
    counter++;
    counterDisplayElem.innerHTML = counter;
});

counterMinusElem.addEventListener("click", () => {
    counter--;
    counterDisplayElem.innerHTML = counter;
});




function dec(index) {

    if (counter <= 1) {
        cartAppend.splice(index, 1);
        localStorage.setItem("CartData", JSON.stringify(cartAppend));
        appendCart(cartAppend)
    }
}


// const successCallback = (position) => {

//     console.log(position);
// }
// const errorCallback = (error) => {

//     console.error(error);
// }
// navigator.geolocation.getcurrentPosition(successCallback, errorCallback);