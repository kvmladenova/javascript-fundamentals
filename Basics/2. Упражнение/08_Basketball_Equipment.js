function basketballEquipment (insetArray){
    let yearTax = Number (insetArray[0]);
    let shouesPrice = yearTax*0.6;
    let suit = shouesPrice*0.8;
    let ball = suit/4;
    let accesoaries = ball/5;

    let price=yearTax+shouesPrice+suit+ball+accesoaries;

    console.log(price);
}

basketballEquipment(["550"])