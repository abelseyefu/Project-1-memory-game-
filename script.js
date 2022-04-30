const timer = document.getElementById("timer")
let card1 = document.querySelector(`[data-card = "diamonds-A"]`)
// let card1 = document.getElementById("diamonds-A")
let card2 = document.getElementById(`[data-card = "diamonds-A"]`)
let card3 = document.getElementById("hearts-A")
let card4 = document.getElementById("joker-red")
let card5 = document.getElementById("spades-A")
let card6 = document.getElementById("hearts-A1")
let card7 = document.getElementById("clubs-A1")
let card8 = document.getElementById("diamonds-A1")
let card9 = document.getElementById("spades-A1")
let card10 = document.getElementById("joker-red1")

let cardArry = [card1, card2, card3, card4, card5, card5, card6, card7, card8, card9, card10]



// // function gameFunction(params) {
//     let matching = document.querySelectorAll(".cards").addEventListener("click", function show(e) {
//         return 
//     })

// console.log(card4)
cardArry.forEach((card)=>{
card.addEventListener("click", function (e) {
    console.log(e.target.id)
    card.setAttribute("src", "")
    card.setAttribute("class", e.target.id)
})
})


console.log(card1)