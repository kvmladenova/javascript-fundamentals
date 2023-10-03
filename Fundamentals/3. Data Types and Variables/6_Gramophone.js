function gramophone (bandName, albumName, thirdSong){
    let duration = (albumName.length * bandName.length) * thirdSong.length / 2;
    
    let rotation = Math.ceil(duration / 2.5);
    // let rotation = duration / 2.5;

    console.log(`The plate was rotated ${rotation} times.`);
}
gramophone ('Black Sabbath', 'Paranoid','War Pigs');
gramophone ('Rammstein', 'Sehnsucht','Engel');