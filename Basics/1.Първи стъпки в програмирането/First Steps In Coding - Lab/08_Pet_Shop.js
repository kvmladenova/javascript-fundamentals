function petShop (input){
    let dogCount = Number(input [0]);
    let catCount = Number(input [1]);
    // let dogPrice = dogCount*2.50;
    // let catPrice = catCount*4;
    // let sum = dogPrice+catPrice;
    let result = `${dogCount*2.50+catCount*4} lv.`;
    console.log(result);

}

petShop (["5 ","4 "]);