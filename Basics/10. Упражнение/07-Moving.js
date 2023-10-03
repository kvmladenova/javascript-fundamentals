function moving (input) {
    let width = Number (input[0]);
    let height = Number (input[1]);
    let length = Number (input [2])

    let size = width * height * length;
    let freeSpace = 0;

    let index = 3;

    while (freeSpace < size){
        if (input[index] === 'Done') {
            break;
        } 
        freeSpace += Number(input[index]);
        index++;
    }

    if (input[index] === 'Done' && freeSpace < size) {
        console.log(`${size - freeSpace} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${freeSpace - size} Cubic meters more.`);
    }
}
moving (["10", 
"1",
"2",
"4", 
"6",
"Done"])

