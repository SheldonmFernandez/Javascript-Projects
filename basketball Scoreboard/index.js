let homeStoreEl = document.getElementById("home-score")
let guestStoreEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}

function increaseHomeScoretwo(){
    homeScore += 2
    homeStoreEl.textContent = homeScore
}

function increaseHomeScorethree(){
    homeScore += 3
    homeStoreEl.textContent = homeScore
}

function increaseGuestScoreOne(){
    guestScore +=1
    guestStoreEl.textContent = guestScore
}

function increaseGuestScoretwo(){
    guestScore +=2
    guestStoreEl.textContent = guestScore
}

function increaseGuestScorethree(){
    guestScore +=3
    guestStoreEl.textContent = guestScore
}