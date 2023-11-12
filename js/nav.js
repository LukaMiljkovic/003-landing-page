let clickLink1 = document.querySelector(".clickableLink1");
let clickLink2 = document.querySelector(".clickableLink2");
let clickLink3 = document.querySelector(".clickableLink3");
let product = document.querySelector(".product");
let solutions = document.querySelector(".solutions");
let learning = document.querySelector(".learning");

let arrowDown1 = document.getElementById("arrowDown1");
let arrowDown2 = document.getElementById("arrowDown2");
let arrowDown3 = document.getElementById("arrowDown3");

clickLink1.addEventListener("click", ()=> {
    arrowDown1.classList.toggle("arrowSpin");
    product.classList.toggle("navstuffShow");
    solutions.classList.remove("navstuffShow");
    learning.classList.remove("navstuffShow");
});

clickLink2.addEventListener("click", ()=> {
    arrowDown2.classList.toggle("arrowSpin");
    solutions.classList.toggle("navstuffShow");
    product.classList.remove("navstuffShow");
    learning.classList.remove("navstuffShow");
});
clickLink3.addEventListener("click", ()=> {
    arrowDown3.classList.toggle("arrowSpin");
    learning.classList.toggle("navstuffShow");
    solutions.classList.remove("navstuffShow");
    product.classList.remove("navstuffShow");
});
