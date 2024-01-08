const hamburger = document.querySelector("#hamburger")
const manu = document.querySelector("#manu")
const hLinks = document.querySelectorAll("#hLink")
const moon = document.querySelector("#moon")
const body = document.querySelector("body")
const lineA = document.getElementById("lineA")
const lineB = document.getElementById("lineB")
const lineC = document.getElementById("lineC")
// console.log("not ", manu)
// console.log("body",body)
hamburger.addEventListener("click", () => {
    manu.classList.toggle("hidden")
    console.log("clicked", manu)
    hamburger.classList.toggle("bg-white")

    // // Log the current class list to help debug
    // console.log("Current classes:", lineA.classList);
    // lineA.classList.toggle("bg-white");
    // lineB.classList.toggle("bg-white");
    // lineC.classList.toggle("bg-white");
    // // Log the updated class list after toggling
    // console.log("Updated classes:", lineA.classList);
})

hLinks.forEach(link => {
    link.addEventListener("click", () => {
        manu.classList.toggle("hidden")
        hamburger.classList.toggle("bg-white")
    })
})
moon.addEventListener("click", () => {
    body.classList.toggle("dark")
//    console.log("updated ",body)   
})