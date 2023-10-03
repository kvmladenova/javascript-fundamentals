function hotelRoom (input) {
    let months = input [0];
    let nigthCount = Number (input[1]);
    let studioPrice = 0;
    let apartamentPrice = 0;

    switch (months) {
        case 'May':
        case 'October':
            studioPrice = 50;
            apartamentPrice = 65;
            if (nigthCount > 7 && nigthCount < 14){
                studioPrice -= studioPrice * 0.05;
            } else if (nigthCount > 14){
                studioPrice -= studioPrice * 0.30;
            }
            if (nigthCount > 14){
                apartamentPrice -= apartamentPrice * 0.10;
            }
            console.log(`Apartment: ${(nigthCount * apartamentPrice).toFixed(2)} lv.`);
            console.log(`Studio: ${(nigthCount * studioPrice).toFixed(2)} lv.`);
            break;
        case 'June':
        case 'September':
            studioPrice = 75.20;
            apartamentPrice = 68.70;
            if (nigthCount > 14){
                studioPrice -= studioPrice * 0.20;
            } 

            if (nigthCount > 14){
                apartamentPrice -= apartamentPrice * 0.10;
            }
            console.log(`Apartment: ${(nigthCount * apartamentPrice).toFixed(2)} lv.`);
            console.log(`Studio: ${(nigthCount * studioPrice).toFixed(2)} lv.`);
             break;
         case 'July':
         case 'August':
             studioPrice = 76;
            apartamentPrice = 77;
             if (nigthCount > 14){
                apartamentPrice -= apartamentPrice * 0.10;
            }
            console.log(`Apartment: ${(nigthCount * apartamentPrice).toFixed(2)} lv.`);
            console.log(`Studio: ${(nigthCount * studioPrice).toFixed(2)} lv.`);
             break;
        }
}
hotelRoom (["August",
"20"])


