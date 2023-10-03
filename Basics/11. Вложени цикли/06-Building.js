function building (input){
    let floorCount = Number (input[0]);
    let roomsPerFloor = Number (input[1]);

    for (let curFloor = floorCount; curFloor >=1; curFloor--){
        let curFloorRooms = '';

        for (let curRoom = 0; curRoom < roomsPerFloor; curRoom++){
           if (curFloor === floorCount){
            curFloorRooms +=  `L${curFloor}${curRoom} `;
           } else if ( curFloor % 2 ===0){
            curFloorRooms +=  `O${curFloor}${curRoom} `;
           } else {
            curFloorRooms +=  `A${curFloor}${curRoom} `;
           }
        } 
        console.log(curFloorRooms);
    }
}
building(["6","4"])