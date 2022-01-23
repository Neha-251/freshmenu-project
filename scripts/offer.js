import header from "../components/header.js"
var head = document.getElementById("header");
head.innerHTML = header();

import footer from "../components/footer.js"
var foot = document.getElementById("footer");
foot.innerHTML = footer();


document.getElementById("homeimg").addEventListener("click", function () {
    window.location.href = "index.html"
})