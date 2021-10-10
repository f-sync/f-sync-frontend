function GenerateFakeInventory(inventory) {
    let fakeInventory = [];
    // console.log(fakeInventory)
    // console.log(inventory)
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
    let newProduct = {
        name: item.name,
        id: item.id,
        size: possibleSizes[randomNum],
        color: possibleColors[randomNum2],
        quantity: item.quantity
    }
    fakeInventory.push(newProduct)
    })
    return fakeInventory
}

export default GenerateFakeInventory