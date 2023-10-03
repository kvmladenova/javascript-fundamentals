function easterLunch (input){
    let easterbread = Number (input[0]);
    let eggs = Number (input[1]);
    let biscuit = Number (input[2]);

    let totalPriceForEaster = easterbread * 3.2 + eggs * 4.35 + eggs * 12 * 0.15 + biscuit * 5.40;

    console.log(totalPriceForEaster.toFixed(2));
}
easterLunch (["3","2","3"])