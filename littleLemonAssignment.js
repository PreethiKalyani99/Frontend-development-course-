
function getPrices(includeTax) {
    const dishData = [
        { name: "Italian pasta", price: 9.55 },
        { name: "Rice with veggies", price: 8.65 },
        { name: "Chicken with potatoes", price: 15.55 },
        { name: "Vegetarian Pizza", price: 6.45 }
    ]
    const taxRate = 0.2
    console.log(includeTax ? "Prices with 20% tax:" : "Prices without tax:")
    dishData.map(dish => {
        const taxAmount = dish.price * taxRate
        const finalPrice = includeTax ? dish.price + taxAmount : dish.price
        console.log(`Dish: ${dish.name} Price (incl.tax): $ ${finalPrice.toFixed(2)}`)
    })
}

getPrices(true)
console.log('\n')
getPrices(false)
