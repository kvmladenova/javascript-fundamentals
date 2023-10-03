function fishTank (insertArray){
    let length = Number (insertArray [0]);
    let width = Number (insertArray[1]);
    let height = Number (insertArray[2]);
    let percent = Number (insertArray[3]);

    let volume = length*width*height;
    let volumeL = volume*0.001;
    let space = percent/100;
    
    console.log(volumeL*(1-space));

}

fishTank(["105 ","77 ","89 ","18.5 "]);