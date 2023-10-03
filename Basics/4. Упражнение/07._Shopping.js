function shopping (input){
    let budget = Number (input[0]);
    let videoCard = Number (input[1]);
    let procesor = Number (input[2]);
    let ram = Number (input [3]);

    let sumVideoCard = videoCard * 250;
    let sumProcesor = (0.35 * sumVideoCard) * procesor;
    let sumRAM = (0.1 * sumVideoCard * ram);

    let sum = sumVideoCard + sumProcesor + sumRAM;
    if (videoCard>procesor){
        sum = sum - 0.15 * sum;
    }

    if (sum < budget){
        console.log(`You have ${(budget-sum).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(sum-budget).toFixed(2)} leva more!`);
    }
}
shopping (["900","2","1","3"]);