function changeBureau (input){
    let bitCount = Number (input[0]);
    let juanaCount = Number (input[1]);
    let commisionPro = Number (input[2]);

    let bitcointInLeva = bitCount * 1168;
    let juanaInLeva = juanaCount * 0.15 * 1.76;

    let totalInLeva = bitcointInLeva + juanaInLeva;
    let totalInEuro = totalInLeva / 1.95;
    let commision = (totalInEuro * commisionPro)/100;

    let total = totalInEuro - commision;
    console.log(total.toFixed(2));
}
changeBureau (["1",
"5",
"5"])
