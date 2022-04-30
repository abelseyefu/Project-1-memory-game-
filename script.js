const timer = document.getElementById("timer")
let card1 = document.querySelector(`[data-card = "diamonds-A"]`)
// let card1 = document.getElementById("diamonds-A")
let card2 = document.querySelector(`[data-card = "clubs-A"]`)
let card3 = document.querySelector(`[data-card = "hearts-A"]`)
let card4 = document.querySelector( `[data-card = "joker-red"]`)
let card5 = document.querySelector( `[data-card = "spades-A"]`)
let card6 = document.querySelectorAll(`[data-card = "hearts-A"]`)[1]
let card7 = document.querySelectorAll(`[data-card = "clubs-A"]`)[1]
let card8 = document.querySelectorAll(`[data-card = "diamonds-A"]`)[1]
let card9 = document.querySelectorAll(`[data-card = "spades-A"]`)[1]
let card10 = document.querySelectorAll(`[data-card = "joker-red"]`)[1]

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