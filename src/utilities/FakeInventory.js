function GenerateFakeInventory(inventory, isRetail) {
    // console.log(isRetail)
    // if (isRetail) {
    //     console.log("I'm retail")
    // }
    let fakeInventory = [];
    
    let possibleSizes = ["S", "M", "L"];
    let possibleColors = ["Black", "White", "Red", "Blue", "Pink", "Purple", "Gray", "Yellow"]
    //Attributes: name, id, quantity
    inventory.forEach((item) => {
    // console.log(item)
    let randomNum = Math.floor(Math.random() * (possibleSizes.length - 0) + 0);
    // console.log(randomNum)
    // console.log(possibleSizes[randomNum])
    item["Size"] = possibleSizes[randomNum];
    let randomNum2 = Math.floor(Math.random() * (possibleColors.length - 0) + 0);
    // console.log(randomNum)
    // console.log(possibleColors[randomNum])
    item["Color"] = possibleColors[randomNum2]
    let quantity = 0;
    if (isRetail) {
        quantity = item.quantity
    } else {
        quantity = item.globalQuantity
    }
    let newProduct = {
        name: item.name,
        id: item.id,
        size: possibleSizes[randomNum],
        color: possibleColors[randomNum2],
        quantity: quantity
    }
    fakeInventory.push(newProduct)
    })
    // if (isRetail) {
    //     console.log("Unmodified", inventory)
    //     console.log("modified", fakeInventory);
    // }
    
    return fakeInventory
}

export default GenerateFakeInventory