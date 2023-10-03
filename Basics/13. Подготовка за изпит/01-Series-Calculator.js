function seriesCalculator (input){
    let movieName = input [0];
    let seasonsCount = Number (input[1]);
    let episodesCount = Number (input[2]);
    let timeEpisode = Number (input[3]);

    let episodeWithReclama = timeEpisode * 1.20;
    let spesialEpisode = seasonsCount * 10;

    let total = episodeWithReclama * episodesCount * seasonsCount + spesialEpisode;

    console.log(`Total time needed to watch the ${movieName} series is ${total} minutes.`);

}
seriesCalculator (["Lucifer","3","18","55"]);