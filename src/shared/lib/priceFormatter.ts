export default (price: number) => {
    let stringPrice = price.toString()
    let resultPrice = ""
    let j = 1

    for(let i = stringPrice.length - 1; i >= 0; i--) {
        resultPrice += stringPrice[i]
        if(j % 3 === 0) {
            resultPrice += " "
        }
        j++
    }

    return resultPrice.split("").reverse().join("").trim()
}