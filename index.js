// heart icon functionality 

 function increaseHeart(){
    const availableHeart = parseInt(document.getElementById("available-heart").innerText)

    const totalNewAvailableHeart = availableHeart + 1

    document.getElementById("available-heart").innerText=totalNewAvailableHeart
}




