function christmasPreparation (input){
    let decorationPaper = Number (input[0]);
    let cloth = Number (input [1]);
    let glue = Number (input [2]);
    let discount = Number (input [3]);

    let decorationPaperPrice = decorationPaper * 5.80;
    let clothPrice = cloth * 7.20;
    let gluePrice = glue * 1.20;

    let totalPrice = decorationPaperPrice + clothPrice + gluePrice;

    let totalPriceWithDiscount = totalPrice - (totalPrice * discount) / 100;

    console.log(totalPriceWithDiscount.toFixed(3));
}
christmasPreparation (["4","2","5","13"])
