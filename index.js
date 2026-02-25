




function getElement(id){
    const element = document.getElementById(id)
    return element
}
// heart icon functionality 
 function increaseHeart(){
    const availableHeart = parseInt(getElement("available-heart").innerText)

    const totalNewAvailableHeart = availableHeart + 1

    getElement("available-heart").innerText=totalNewAvailableHeart
}

// call button functionality
getElement('service-box').addEventListener('click', function(e){
    if(e.target.className.includes('call-btn')){
        // alert('cart button clicked')
        const callButton = e.target

        const serviceName = callButton.parentNode.parentNode.children[1].children[0].innerText
        const serviceNumber = callButton.parentNode.parentNode.children[1].children[2].innerText

        const availableCoin = parseInt(getElement("available-coin").innerText)
         
        if(availableCoin<20){
            alert("❌ Insufficient coins. A minimum of 20 coins is required to make a call.")
            return
        }

        const NewAvailableCoin = availableCoin - 20 
        getElement("available-coin").innerText = NewAvailableCoin

         alert("📞 Calling " + serviceName + " " + serviceNumber +" ...")

          const historyContainer = getElement('history-container')

          const newHistory = document.createElement('div')
          newHistory.innerHTML = `
          <div class="rounded-xl bg-gray-100 flex justify-between items-center
                        p-4">
                          
                          <div class="">
                            <h2 class="font-bold">${serviceName}</h2>
                            <h2 class="">${serviceNumber}</h2>
                          </div>
                          <span class="text-xl text-black-400">
                ${new Date().toLocaleTimeString()}
            </span>
                        </div>
          `
          historyContainer.append(newHistory)

    }
})

// clear button function 
getElement('clear-btn').addEventListener('click', function(){
    const historyContainer = getElement('history-container')
    historyContainer.innerHTML = ""
})

// copy button function 
getElement('service-box').addEventListener('click', function(e){
    if(e.target.className.includes('copy-btn')){
        const copyButton = e.target
        const hotlineNumber = copyButton.parentNode.parentNode.children[1].children[2].innerText

        navigator.clipboard.writeText(hotlineNumber).then(function(){
            alert("The number has been copied: "+ hotlineNumber)

        })
        
        const copyCount = getElement('copy-count').innerText
        const currentCopyCount = Number(copyCount) + 1
        getElement('copy-count').innerText = currentCopyCount
    }
})
