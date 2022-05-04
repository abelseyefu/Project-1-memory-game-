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

let clicks = 0
let selectedCards = []
cardArry.forEach((card) => {
    card.addEventListener("click", function (e) {
        console.log(e.target.id)
        card.setAttribute("src", "")
        card.setAttribute("class", e.target.id)
        clicks += 1
        // if #of clicks =1 
        if (clicks == 1) {
            // start timer
            console.log(selectedCards)

            selectedCards.push(e.target)
            

        } else if (clicks == 2) {
            console.log(selectedCards)
            setTimeout(() => {
                selectedCards.push(e.target)
                flipCards()
            }, 100)
            function flipCards() {
                if (selectedCards[0].dataset.card != selectedCards[1].dataset.card) {
                    console.log(selectedCards)
                    selectedCards[0].classList.add("back-red")
                    selectedCards[1].classList.add('back-red')
                }
                    clicks = 0
                    selectedCards = []
            }
        }
        // start timer
        // push card into selectedCards 
        // else if # of clicks =2 
        // check to see if its a match 
        // if its a match then cards show
        // if not then they dont
        // reset the clicks = 0 
        // reset selectedCard = 0
    })
})



