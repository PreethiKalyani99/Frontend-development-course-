
function displayPrices(includeTax) {
    const dishes = [
        { name: "Italian pasta", price: 9.55 },
        { name: "Rice with veggies", price: 8.65 },
        { name: "Chicken with potatoes", price: 15.55 },
        { name: "Vegetarian Pizza", price: 6.45 }
    ]
    const taxRate = 0.2
    console.log(includeTax ? "Prices with 20% tax:" : "Prices without tax:")
    dishes.map(dish => {
        const taxAmount = dish.price * taxRate
        const totalPrice = includeTax ? dish.price + taxAmount : dish.price
        console.log(`Dish: ${dish.name} Price (incl.tax): $ ${totalPrice.toFixed(2)}`)
    })
}

displayPrices(true)
console.log('\n')
displayPrices(false)
