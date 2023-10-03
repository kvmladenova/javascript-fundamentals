function yardGreening (input){
    let yard = Number(input[0]);

    let finalPrice = yard*7.61;
    let discountPrice = finalPrice*0.18;

    console.log(`The final price is: ${finalPrice-discountPrice} lv.`);
    console.log(`The discount is: ${discountPrice} lv.`);
}

yardGreening(["550"]);