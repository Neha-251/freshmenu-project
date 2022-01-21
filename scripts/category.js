import header from "../components/header.js"
var head = document.getElementById("header");
head.innerHTML = header();


async function categoryData() {

    try {

        //let response_paneer = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=paneer`);   //Filter by main ingredient

        //www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata //Search meal by name
        //let response_2 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=burger`);   //Filter by Category
        //Search meal by name

        let response_buyOne = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`);    //Filter by Area

        let response_rice = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=rice`);
        let response_noodles = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=noodle`);
        let response_pasta = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=pasta`);
        let response_biriyani = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=rice`);
        let response_salad = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=salad`);
        let response_keto = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken`);
        let response_burger = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=burger`);


        let response_breakfast = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=breakfast`);
        let response_snacks = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=Chinese`);


        let response_sandwitches = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=bread`);
        let response_sides = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=starter`);;
        let response_desserts = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=dessert`);


        let data_buyOne = await response_buyOne.json();
        let data_rice = await response_rice.json();
        let data_noodle = await response_noodles.json();
        let data_pasta = await response_pasta.json();
        let data_biriyani = await response_biriyani.json();
        let data_fit = await response_salad.json();
        let data_keto = await response_keto.json();
        let data_burger = await response_burger.json();
        let data_breakfast = await response_breakfast.json();
        let data_snacks = await response_snacks.json();
        let data_sandwitches = await response_sandwitches.json();
        let data_sides = await response_sides.json();
        let data_desserts = await response_desserts.json();

        console.log("data_buyOne", data_buyOne);
        console.log("data_rice", data_rice);
        console.log("data_noodle", data_noodle);
        console.log("data_pasta", data_pasta);
        console.log("data_biriyani", data_biriyani);
        console.log("data_fit", data_fit);
        console.log("data_keto", data_keto);
        console.log("data_burger", data_burger);
        console.log("data_breakfast", data_breakfast);
        console.log("data_snacks", data_snacks);
        console.log("data_sandwitches", data_sandwitches);
        console.log("data_sides", data_sides);
        console.log("data_desserts", data_desserts);


        appendBuyone(data_buyOne);
        appendRice(data_rice);
        appendNoodle(data_noodle);
        appendPasta(data_pasta);
        appendBiriyani(data_biriyani);
        appendFit(data_fit);
        appendKeto(data_keto);
        appendBurger(data_burger);
        appendBreakfast(data_breakfast);
        appendSnacks(data_snacks);
        appendSandwitches(data_sandwitches);
        appendSides(data_sides);
        appendDesserts(data_desserts);
    }
    catch (error) {
        console.log("error", error);
    }

}

categoryData();

let buyOne = document.getElementById('buyOne');

const appendBuyone = (data_1) => {

    let { meals } = data_1;



    meals.forEach((elem) => {

        let { strMeal } = elem;
        let { strMealThumb } = elem;

        let main_div = document.createElement('div');
        main_div.setAttribute('id', "maindiv");

        let img = document.createElement('img');
        img.setAttribute("id", "main_div_img");

        let sub_div1 = document.createElement('div');
        sub_div1.setAttribute("id", "sub_div1");

        let sub_div2 = document.createElement('div');
        sub_div2.setAttribute("id", "sub_div2");

        let sub_div2_div1 = document.createElement('div');
        sub_div2_div1.setAttribute("id", "sub_div2_div1");

        let sub_div2_div2 = document.createElement('div');
        sub_div2_div2.setAttribute("id", "sub_div2_div2");


        img.src = strMealThumb;
        sub_div1.innerHTML = strMeal;

        sub_div2_div1.innerHTML = "₹" + " " + 150;

        sub_div2_div2.innerHTML = "Add";
        sub_div2_div2.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb }))
        });

        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        buyOne.append(main_div);

    });


}

let rice = document.getElementById('rice');

const appendRice = (data_1) => {

    let { meals } = data_1;

    let i = 100;

    meals.forEach((elem) => {

        let { strMeal } = elem;
        let { strMealThumb } = elem;

        let main_div = document.createElement('div');
        main_div.setAttribute('id', "maindiv");

        let img = document.createElement('img');
        img.setAttribute("id", "main_div_img");

        let sub_div1 = document.createElement('div');
        sub_div1.setAttribute("id", "sub_div1");

        let sub_div2 = document.createElement('div');
        sub_div2.setAttribute("id", "sub_div2");

        let sub_div2_div1 = document.createElement('div');
        sub_div2_div1.setAttribute("id", "sub_div2_div1");

        let sub_div2_div2 = document.createElement('div');
        sub_div2_div2.setAttribute("id", "sub_div2_div2");


        img.src = strMealThumb;
        sub_div1.innerHTML = strMeal;

        sub_div2_div1.innerHTML = "₹" + " " + i;
        i = i + 60;
        sub_div2_div2.innerHTML = "Add";

        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        rice.append(main_div);

    });
}

let noodle = document.getElementById('noodle');

const appendNoodle = (data_1) => {

    let { meals } = data_1;

    let i = 90;

    meals.forEach((elem) => {

        let { strMeal } = elem;
        let { strMealThumb } = elem;

        let main_div = document.createElement('div');
        main_div.setAttribute('id', "maindiv");

        let img = document.createElement('img');
        img.setAttribute("id", "main_div_img");

        let sub_div1 = document.createElement('div');
        sub_div1.setAttribute("id", "sub_div1");

        let sub_div2 = document.createElement('div');
        sub_div2.setAttribute("id", "sub_div2");

        let sub_div2_div1 = document.createElement('div');
        sub_div2_div1.setAttribute("id", "sub_div2_div1");

        let sub_div2_div2 = document.createElement('div');
        sub_div2_div2.setAttribute("id", "sub_div2_div2");


        img.src = strMealThumb;
        sub_div1.innerHTML = strMeal;

        sub_div2_div1.innerHTML = "₹" + " " + i;
        i = i + 50;
        sub_div2_div2.innerHTML = "Add";

        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        noodle.append(main_div);

    });


}
let pasta = document.getElementById('pasta');

const appendPasta = (data_1) => {

    let { meals } = data_1;

    let i = 90;

    meals.forEach((elem) => {

        let { strMeal } = elem;
        let { strMealThumb } = elem;

        let main_div = document.createElement('div');
        main_div.setAttribute('id', "maindiv");

        let img = document.createElement('img');
        img.setAttribute("id", "main_div_img");

        let sub_div1 = document.createElement('div');
        sub_div1.setAttribute("id", "sub_div1");

        let sub_div2 = document.createElement('div');
        sub_div2.setAttribute("id", "sub_div2");

        let sub_div2_div1 = document.createElement('div');
        sub_div2_div1.setAttribute("id", "sub_div2_div1");

        let sub_div2_div2 = document.createElement('div');
        sub_div2_div2.setAttribute("id", "sub_div2_div2");


        img.src = strMealThumb;
        sub_div1.innerHTML = strMeal;

        sub_div2_div1.innerHTML = "₹" + " " + i;
        i = i + 50;
        sub_div2_div2.innerHTML = "Add";

        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        pasta.append(main_div);

    });
}

let biriyani = document.getElementById('biriyani');

const appendBiriyani = (data_1) => {

    let { meals } = data_1;

    let i = 90;

    meals.forEach((elem) => {

        let { strMeal } = elem;
        let { strMealThumb } = elem;

        let main_div = document.createElement('div');
        main_div.setAttribute('id', "maindiv");

        let img = document.createElement('img');
        img.setAttribute("id", "main_div_img");

        let sub_div1 = document.createElement('div');
        sub_div1.setAttribute("id", "sub_div1");

        let sub_div2 = document.createElement('div');
        sub_div2.setAttribute("id", "sub_div2");

        let sub_div2_div1 = document.createElement('div');
        sub_div2_div1.setAttribute("id", "sub_div2_div1");

        let sub_div2_div2 = document.createElement('div');
        sub_div2_div2.setAttribute("id", "sub_div2_div2");


        img.src = strMealThumb;
        sub_div1.innerHTML = strMeal;

        sub_div2_div1.innerHTML = "₹" + " " + i;
        i = i + 50;
        sub_div2_div2.innerHTML = "Add";

        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        biriyani.append(main_div);

    });


}

let fit = document.getElementById('fit');

const appendFit = (data_1) => {

    let { meals } = data_1;

    let i = 90;

    meals.forEach((elem) => {

        let { strMeal } = elem;
        let { strMealThumb } = elem;

        let main_div = document.createElement('div');
        main_div.setAttribute('id', "maindiv");

        let img = document.createElement('img');
        img.setAttribute("id", "main_div_img");

        let sub_div1 = document.createElement('div');
        sub_div1.setAttribute("id", "sub_div1");

        let sub_div2 = document.createElement('div');
        sub_div2.setAttribute("id", "sub_div2");

        let sub_div2_div1 = document.createElement('div');
        sub_div2_div1.setAttribute("id", "sub_div2_div1");

        let sub_div2_div2 = document.createElement('div');
        sub_div2_div2.setAttribute("id", "sub_div2_div2");


        img.src = strMealThumb;
        sub_div1.innerHTML = strMeal;

        sub_div2_div1.innerHTML = "₹" + " " + i;
        i = i + 50;
        sub_div2_div2.innerHTML = "Add";

        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        fit.append(main_div);

    });


}

let keto = document.getElementById('keto');

const appendKeto = (data_1) => {

    let { meals } = data_1;

    let i = 90;

    meals.forEach((elem) => {

        let { strMeal } = elem;
        let { strMealThumb } = elem;

        let main_div = document.createElement('div');
        main_div.setAttribute('id', "maindiv");

        let img = document.createElement('img');
        img.setAttribute("id", "main_div_img");

        let sub_div1 = document.createElement('div');
        sub_div1.setAttribute("id", "sub_div1");

        let sub_div2 = document.createElement('div');
        sub_div2.setAttribute("id", "sub_div2");

        let sub_div2_div1 = document.createElement('div');
        sub_div2_div1.setAttribute("id", "sub_div2_div1");

        let sub_div2_div2 = document.createElement('div');
        sub_div2_div2.setAttribute("id", "sub_div2_div2");


        img.src = strMealThumb;
        sub_div1.innerHTML = strMeal;

        sub_div2_div1.innerHTML = "₹" + " " + i;
        i = i + 50;
        sub_div2_div2.innerHTML = "Add";

        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        keto.append(main_div);

    });


}

let burger = document.getElementById('burger');

const appendBurger = (data_1) => {

    let { meals } = data_1;

    let i = 90;

    meals.forEach((elem) => {

        let { strMeal } = elem;
        let { strMealThumb } = elem;

        let main_div = document.createElement('div');
        main_div.setAttribute('id', "maindiv");

        let img = document.createElement('img');
        img.setAttribute("id", "main_div_img");

        let sub_div1 = document.createElement('div');
        sub_div1.setAttribute("id", "sub_div1");

        let sub_div2 = document.createElement('div');
        sub_div2.setAttribute("id", "sub_div2");

        let sub_div2_div1 = document.createElement('div');
        sub_div2_div1.setAttribute("id", "sub_div2_div1");

        let sub_div2_div2 = document.createElement('div');
        sub_div2_div2.setAttribute("id", "sub_div2_div2");


        img.src = strMealThumb;
        sub_div1.innerHTML = strMeal;

        sub_div2_div1.innerHTML = "₹" + " " + i;
        i = i + 50;
        sub_div2_div2.innerHTML = "Add";

        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        burger.append(main_div);

    });


}

let breakfast = document.getElementById('breakfast');

const appendBreakfast = (data_1) => {

    let { meals } = data_1;

    let i = 90;

    meals.forEach((elem) => {

        let { strMeal } = elem;
        let { strMealThumb } = elem;

        let main_div = document.createElement('div');
        main_div.setAttribute('id', "maindiv");

        let img = document.createElement('img');
        img.setAttribute("id", "main_div_img");

        let sub_div1 = document.createElement('div');
        sub_div1.setAttribute("id", "sub_div1");

        let sub_div2 = document.createElement('div');
        sub_div2.setAttribute("id", "sub_div2");

        let sub_div2_div1 = document.createElement('div');
        sub_div2_div1.setAttribute("id", "sub_div2_div1");

        let sub_div2_div2 = document.createElement('div');
        sub_div2_div2.setAttribute("id", "sub_div2_div2");


        img.src = strMealThumb;
        sub_div1.innerHTML = strMeal;

        sub_div2_div1.innerHTML = "₹" + " " + i;
        i = i + 50;
        sub_div2_div2.innerHTML = "Add";

        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        breakfast.append(main_div);

    });


}
let snacks = document.getElementById('accompaniments');

const appendSnacks = (data_1) => {

    let { meals } = data_1;

    let i = 90;

    meals.forEach((elem) => {

        let { strMeal } = elem;
        let { strMealThumb } = elem;

        let main_div = document.createElement('div');
        main_div.setAttribute('id', "maindiv");

        let img = document.createElement('img');
        img.setAttribute("id", "main_div_img");

        let sub_div1 = document.createElement('div');
        sub_div1.setAttribute("id", "sub_div1");

        let sub_div2 = document.createElement('div');
        sub_div2.setAttribute("id", "sub_div2");

        let sub_div2_div1 = document.createElement('div');
        sub_div2_div1.setAttribute("id", "sub_div2_div1");

        let sub_div2_div2 = document.createElement('div');
        sub_div2_div2.setAttribute("id", "sub_div2_div2");


        img.src = strMealThumb;
        sub_div1.innerHTML = strMeal;

        sub_div2_div1.innerHTML = "₹" + " " + i;
        i = i + 50;
        sub_div2_div2.innerHTML = "Add";

        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        snacks.append(main_div);

    });


}
let sandwitches = document.getElementById('sandwitches');

const appendSandwitches = (data_1) => {

    let { meals } = data_1;

    let i = 90;

    meals.forEach((elem) => {

        let { strMeal } = elem;
        let { strMealThumb } = elem;

        let main_div = document.createElement('div');
        main_div.setAttribute('id', "maindiv");

        let img = document.createElement('img');
        img.setAttribute("id", "main_div_img");

        let sub_div1 = document.createElement('div');
        sub_div1.setAttribute("id", "sub_div1");

        let sub_div2 = document.createElement('div');
        sub_div2.setAttribute("id", "sub_div2");

        let sub_div2_div1 = document.createElement('div');
        sub_div2_div1.setAttribute("id", "sub_div2_div1");

        let sub_div2_div2 = document.createElement('div');
        sub_div2_div2.setAttribute("id", "sub_div2_div2");


        img.src = strMealThumb;
        sub_div1.innerHTML = strMeal;

        sub_div2_div1.innerHTML = "₹" + " " + i;
        i = i + 50;
        sub_div2_div2.innerHTML = "Add";

        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        sandwitches.append(main_div);

    });


}
let sides = document.getElementById('sides');

const appendSides = (data_1) => {

    let { meals } = data_1;

    let i = 90;

    meals.forEach((elem) => {

        let { strMeal } = elem;
        let { strMealThumb } = elem;

        let main_div = document.createElement('div');
        main_div.setAttribute('id', "maindiv");

        let img = document.createElement('img');
        img.setAttribute("id", "main_div_img");

        let sub_div1 = document.createElement('div');
        sub_div1.setAttribute("id", "sub_div1");

        let sub_div2 = document.createElement('div');
        sub_div2.setAttribute("id", "sub_div2");

        let sub_div2_div1 = document.createElement('div');
        sub_div2_div1.setAttribute("id", "sub_div2_div1");

        let sub_div2_div2 = document.createElement('div');
        sub_div2_div2.setAttribute("id", "sub_div2_div2");


        img.src = strMealThumb;
        sub_div1.innerHTML = strMeal;

        sub_div2_div1.innerHTML = "₹" + " " + i;
        i = i + 50;
        sub_div2_div2.innerHTML = "Add";

        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        sides.append(main_div);

    });


}
let desserts = document.getElementById('desserts');

const appendDesserts = (data_1) => {

    let { meals } = data_1;

    let i = 90;

    meals.forEach((elem) => {

        let { strMeal } = elem;
        let { strMealThumb } = elem;

        let main_div = document.createElement('div');
        main_div.setAttribute('id', "maindiv");

        let img = document.createElement('img');
        img.setAttribute("id", "main_div_img");

        let sub_div1 = document.createElement('div');
        sub_div1.setAttribute("id", "sub_div1");

        let sub_div2 = document.createElement('div');
        sub_div2.setAttribute("id", "sub_div2");

        let sub_div2_div1 = document.createElement('div');
        sub_div2_div1.setAttribute("id", "sub_div2_div1");

        let sub_div2_div2 = document.createElement('div');
        sub_div2_div2.setAttribute("id", "sub_div2_div2");


        img.src = strMealThumb;
        sub_div1.innerHTML = strMeal;

        sub_div2_div1.innerHTML = "₹" + " " + i;
        i = i + 50;
        sub_div2_div2.innerHTML = "Add";

        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        desserts.append(main_div);

    });


}



//sliding part

//slides = rice, noodle, pasta, biriyani, fit, keto, burger, breakfast, snacks, sandwitches, sides, desserts


// let C1 = document.getElementById('C1');
// let C2 = document.getElementById('C2');
// let C3 = document.getElementById('C3');
// let C4 = document.getElementById('C4');
// let C5 = document.getElementById('C5');
// let C6 = document.getElementById('C6');
// let C7 = document.getElementById('C7');
// let C8 = document.getElementById('C8');
// let C9 = document.getElementById('C9');
// let C10 = document.getElementById('C10');
// let C11 = document.getElementById('C11');
// let C12 = document.getElementById('C12');
// let C13 = document.getElementById('C13');

// let category_img = document.getElementById('category_image');

// C1.addEventListener("click", () => {
//     category_img.style.transform = 'translate(0%)';
// });
// C2.addEventListener("click", () => {
//     category_img.style.transform = 'translate(8%)';
// });
// C3.addEventListener("click", () => {
//     category_img.style.transform = 'translate(-16%)';
// });
// C4.addEventListener("click", () => {
//     category_img.style.transform = 'translate(-50%)';
// });
// C5.addEventListener("click", () => {
//     category_img.style.transform = 'translate(0%)';
// });
// C6.addEventListener("click", () => {
//     fit.style.transform = 'translate(0%)';
// });
// C7.addEventListener("click", () => {
//     keto.style.transform = 'translate(0%)';
// });
// C8.addEventListener("click", () => {
//     burger.style.transform = 'translate(0%)';
// });
// C9.addEventListener("click", () => {
//     breakfast.style.transform = 'translate(0%)';
// });
// C10.addEventListener("click", () => {
//     snacks.style.transform = 'translate(0%)';
// });
// C11.addEventListener("click", () => {
//     sandwitches.style.transform = 'translate(0%)';
// });
// C12.addEventListener("click", () => {
//     sides.style.transform = 'translate(0%)';
// });
// C13.addEventListener("click", () => {
//     desserts.style.transform = 'translate(0%)';
// });




//cart
var cart = JSON.parse(localStorage.getItem("CartData")) || []
function sideCart({ strMeal, strMealThumb }) {
    document.querySelector(".cartmain").style = `
    grid-template-areas: "c c c c c c c c c s s s ";
    `;
    document.querySelector(".sideCartMain").style.display = "block";
    document.querySelector(".container").style.width = "100%";
    document.querySelector(".secondpart").style.width = "110%";
    document.querySelector(".secondpart").style.marginLeft = "-6%";

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
alsolike()
async function alsolike() {
    try {


        let res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian`
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


document.getElementById("search_div").addEventListener("click", function () {
    window.location.href = "search.html"
})