// // Memory Cost
// document.getElementById('extra-memory').addEventListener('click', function(){
//    getMemoryValue()
// })

// // Get the Extra memory cost
// let products = document.getElementById('default-memory').addEventListener('click', function(){
   
// })
// let extraMemoryPrice = parseInt(180)
// function getMemoryValue(){
//    const memoryValue = document.getElementById('memory-extra-cost')
//    const memoryCost = memoryValue.innerText = extraMemoryPrice
   
// }

// // Default Price
// const defaultPrice = document.getElementById('default-price')


// Default Best Price
const defaultPrice = document.getElementById('default-price').innerText

// Update Total
function calculateUpdateTotal(num){
   const productPrice = Number(defaultPrice)
   const memoryPrice = Number(memoryCost.innerText)
   const storagePrice = Number(storageCost.innerText)
   const deliveryFee = Number(deliveryCost.innerText)

   const subTotal = productPrice + memoryPrice + storagePrice + deliveryFee
   
   // Show the sub total in html
   document.getElementById('sub-total').innerText = subTotal

   // Grand Total
   const total = subTotal
   // Show the sub total in html
   document.getElementById('grand-total').innerText = total
   
}
   // Promo Code
   const promoInputValue = document.getElementById('coupon-btn')
   promoInputValue.addEventListener('click', function(){
      const promoInputText = document.getElementById('coupon-code').value
      promoInputText.value = ''
      if(promoInputText == 'stevekaku'){
         const discount =Number(calculateUpdateTotal() / 20)
         return discount
      }else{
         console.log('Coupon Code is Invalid')
      }
      
})

// Memory 
const minimumMemoryPrice = document.getElementById('default-cost')
const extraMemoryPrice = document.getElementById('extra-cost')
// get the 
const memoryCost = document.getElementById('memory-extra-cost')

// Event Listener and function of Memory
minimumMemoryPrice.addEventListener('click', function(){
   const minimumMemoryCost = parseInt(0)
   // Show the value in html
   memoryCost.innerText = minimumMemoryCost
   calculateUpdateTotal()
})
extraMemoryPrice.addEventListener('click', function(){
   const extraMemoryCost = parseInt(180)
    // Show the value in html
    memoryCost.innerText = extraMemoryCost
    calculateUpdateTotal()
})

// Storage 
const minimumStoragePrice = document.getElementById('default-ssd-cost')
const extraTwenty = document.getElementById('twenty-cost')
const extraFifty = document.getElementById('fifty-cost')
// get the 
const storageCost = document.getElementById('extra-storage-cost')
// Event Listener and function of Storage
minimumStoragePrice.addEventListener('click', function(){
   const minimumStorageCost = parseInt(0)
   // Show the value in html
   storageCost.innerText = minimumStorageCost
   calculateUpdateTotal()
})
extraTwenty.addEventListener('click', function(){
   const extraTwentyCost = parseInt(100)
    // Show the value in html
    storageCost.innerText = extraTwentyCost
    calculateUpdateTotal()
})
extraFifty.addEventListener('click', function(){
   const extraFiftyCost = parseInt(180)
    // Show the value in html
    let storagePrice = storageCost.innerText = extraFiftyCost
    calculateUpdateTotal(storagePrice)
})

// Delivery 
const freeDelivery = document.getElementById('free-delivery')
const expressDelivery = document.getElementById('express-delivery')

// get the
const deliveryCost = document.getElementById('delivery-cost')

// Event Listener and function of Delivery
freeDelivery.addEventListener('click', function(){
   const freeShippingCost = 0
   // Show the value in html
   deliveryCost.innerText = freeShippingCost
   calculateUpdateTotal()
})
expressDelivery.addEventListener('click', function(){
   const expressShippingCost = 20
   // Show the value in html
   deliveryCost.innerText = expressShippingCost
   calculateUpdateTotal()
})

 
