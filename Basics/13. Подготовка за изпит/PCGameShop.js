function pcGameSHop (input){
    let gameSale = Number (input[0]);
    let hearthstoneCount = 0;
    let forniteCount = 0;
    let overwatchCount = 0;
    let otherCount = 0;
    let totalCount = 0;

    for (let i = 1; i <= gameSale; i++){
        let gameName = input [i];
        switch (gameName){
            case 'Hearthstone':
                hearthstoneCount++;
                break;
            case 'Fornite':
                forniteCount++;
                break;
            case 'Overwatch':
                overwatchCount++
                break;
            default:
                otherCount++;
                break;
       }
       totalCount++;
    }
    console.log(`Hearthstone - ${((hearthstoneCount/totalCount)*100).toFixed(2)}%`);
    console.log(`Fornite - ${((forniteCount/totalCount)*100).toFixed(2)}%`);
    console.log(`Overwatch - ${((overwatchCount/totalCount)*100).toFixed(2)}%`);
    console.log(`Others - ${((otherCount/totalCount)*100).toFixed(2)}%`);

}
pcGameSHop(["4","Hearthstone","Fornite","Overwatch","Counter-Strike"])