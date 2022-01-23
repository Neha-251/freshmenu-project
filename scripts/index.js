import header from "../components/header.js"
var head = document.getElementById("header");
head.innerHTML = header();

import footer from "../components/footer.js"
var foot = document.getElementById("footer");
foot.innerHTML = footer();



var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var slide = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    for (i = 0; i < slide.length; i++) {
        slide[i].className = slide[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    slide[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 3 seconds
}



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

        sub_div2_div1.innerHTML = "₹" + " " + 249;

        sub_div2_div2.innerHTML = "Add";
        sub_div2_div2.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb }))
        });

        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        buyOne.append(main_div);

        img.addEventListener("click", () => {

            let { idMeal } = elem;
            //strMealId = JSON.stringify(strMealId);

            localStorage.setItem("mealId", idMeal);

            window.location.href = "mealpage.html";

        });

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
        sub_div2_div2.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb }))
        });

        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        rice.append(main_div);

        img.addEventListener("click", () => {

            let { idMeal } = elem;
            //strMealId = JSON.stringify(strMealId);

            localStorage.setItem("mealId", idMeal);

            window.location.href = "mealpage.html";

        });
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
        sub_div2_div2.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb }))
        });

        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        noodle.append(main_div);

        img.addEventListener("click", () => {

            let { idMeal } = elem;
            //strMealId = JSON.stringify(strMealId);

            localStorage.setItem("mealId", idMeal);

            window.location.href = "mealpage.html";

        });

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
        sub_div2_div2.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb }))
        });

        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        pasta.append(main_div);

        img.addEventListener("click", () => {

            let { idMeal } = elem;

            localStorage.setItem("mealId", idMeal);

            window.location.href = "mealpage.html";

        });

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
        sub_div2_div2.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb }))
        });
        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        biriyani.append(main_div);

        img.addEventListener("click", () => {

            let { idMeal } = elem;
            //strMealId = JSON.stringify(strMealId);

            localStorage.setItem("mealId", idMeal);

            window.location.href = "mealpage.html";

        });

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
        sub_div2_div2.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb }))
        });

        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        fit.append(main_div);

        img.addEventListener("click", () => {

            let { idMeal } = elem;

            localStorage.setItem("mealId", idMeal);

            window.location.href = "mealpage.html";

        });

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
        sub_div2_div2.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb }))
        });

        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        keto.append(main_div);

        img.addEventListener("click", () => {

            let { idMeal } = elem;

            localStorage.setItem("mealId", idMeal);

            window.location.href = "mealpage.html";

        });

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
        sub_div2_div2.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb }))
        });

        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        burger.append(main_div);

        img.addEventListener("click", () => {

            let { idMeal } = elem;

            localStorage.setItem("mealId", idMeal);

            window.location.href = "mealpage.html";

        });

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
        sub_div2_div2.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb }))
        });

        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        breakfast.append(main_div);

        img.addEventListener("click", () => {

            let { idMeal } = elem;

            localStorage.setItem("mealId", idMeal);

            window.location.href = "mealpage.html";

        });

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
        sub_div2_div2.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb }))
        });

        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        snacks.append(main_div);

        img.addEventListener("click", () => {

            let { idMeal } = elem;

            localStorage.setItem("mealId", idMeal);

            window.location.href = "mealpage.html";

        });

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
        sub_div2_div2.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb }))
        });

        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        sandwitches.append(main_div);

        img.addEventListener("click", () => {

            let { idMeal } = elem;

            localStorage.setItem("mealId", idMeal);

            window.location.href = "mealpage.html";

        });

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
        sub_div2_div2.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb }))
        });
        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        sides.append(main_div);

        img.addEventListener("click", () => {

            let { idMeal } = elem;

            localStorage.setItem("mealId", idMeal);

            window.location.href = "mealpage.html";

        });

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
        sub_div2_div2.addEventListener("click", function () {
            sideCart(({ strMeal, strMealThumb }))
        });
        main_div.append(img, sub_div1, sub_div2);

        sub_div2.append(sub_div2_div1, sub_div2_div2);

        desserts.append(main_div);

        img.addEventListener("click", () => {

            let { idMeal } = elem;

            localStorage.setItem("mealId", idMeal);

            window.location.href = "mealpage.html";

        });

    });


}




//cart pages
var cart = JSON.parse(localStorage.getItem("CartData")) || []
function sideCart({ strMeal, strMealThumb }) {
    document.querySelector(".cartmain").style = `
    grid-template-areas: "c c c c c c c c c s s s ";
    `;
    document.querySelector(".sideCartMain").style.display = "block";
    document.querySelector(".container").style.width = "100%";
    document.querySelector(".secondpart").style.width = "110%";
    document.querySelector(".secondpart").style.marginLeft = "-6%";
    document.querySelector("#category_list").style.marginLeft = "50px";
    document.querySelector("#category_image").style.marginLeft = "0%";
    document.querySelector("#category_image").style.width = "80%";
    document.querySelector("#dodiv1").style.marginLeft = "4%";
    document.querySelector("#dodiv2").style.marginLeft = "52px";
    document.querySelector("#inp").style.width = "380px";

    var carimg = document.querySelectorAll(".carimg")
    for (let i = 0; i < carimg.length; i++) {
        carimg[i].style.width = "30%";
        carimg[i].style.height = "35%";
    }


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
    document.querySelector("#cartlength").innerHTML = cart.length;

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


document.getElementById("search_div").addEventListener("click", function () {
    window.location.href = "search.html"
})
document.getElementById("help_div").addEventListener("click", function () {
    window.location.href = "help.html"
})
var cartdiv = document.getElementById("cart_div");

cartdiv.addEventListener("click", function () {
    document.querySelector(".cartmain").style = `
    grid-template-areas: "c c c c c c c c c s s s ";
    `;
    document.querySelector(".sideCartMain").style.display = "block";
    document.querySelector(".container").style.width = "100%";
    document.querySelector(".secondpart").style.width = "110%";
    document.querySelector(".secondpart").style.marginLeft = "-6%";
    document.querySelector("#category_list").style.marginLeft = "50px";
    document.querySelector("#category_image").style.marginLeft = "0%";
    document.querySelector("#category_image").style.width = "80%";
    document.querySelector("#dodiv1").style.marginLeft = "4%";
    document.querySelector("#dodiv2").style.marginLeft = "52px";
    document.querySelector("#inp").style.width = "380px";

    var carimg = document.querySelectorAll(".carimg")
    for (let i = 0; i < carimg.length; i++) {
        carimg[i].style.width = "30%";
        carimg[i].style.height = "35%";
    }



    localStorage.setItem("CartData", JSON.stringify(cart));
    appendCart(cart)
    cartTotal()

});


document.getElementById("homeimg").addEventListener("click", function () {
    window.location.href = "index.html"
})
document.getElementById("offers_div").addEventListener("click", function () {
    window.location.href = "offer.html"
})