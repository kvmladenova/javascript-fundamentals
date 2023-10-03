function cinemaTickets (input){
    let index = 0;

    let command = input[index];
    index ++;

    let studentTicketsCount = 0;
    let standartTicketsCount = 0;
    let kidsTicketsCount = 0;
 
    while (command != 'Finish'){
        let filmName = command;
               
        let freePlace = Number (input[index]);
        index++;

        let command1 = input[index];
        index ++;

        let takenPlaces = 0;

        while (command1 != 'End'){
            let ticketType = command1;

            if (ticketType === 'student'){
                studentTicketsCount++;
            } else if ( ticketType === 'standard'){
                standartTicketsCount++;
            } else if (ticketType === 'kid') {
                kidsTicketsCount++;
            }

            takenPlaces++;

            if (takenPlaces === freePlace){
                break;
            }

            command1 = input[index];
            index++;
                      
        }
            let persentFullPerFilm = (takenPlaces / freePlace)*100;
            console.log(`${filmName} - ${persentFullPerFilm.toFixed(2)}% full.`);
     
            command = input [index];
            index++;
        }

       let totalTickets = standartTicketsCount+studentTicketsCount+kidsTicketsCount;
       console.log(`Total tickets: ${totalTickets}`);
       
       let studentTicketsPercent = (studentTicketsCount / totalTickets)*100;
       let standartTicketsPercent = (standartTicketsCount / totalTickets)*100;
       let kidTicketsPercent = (kidsTicketsCount / totalTickets)*100;

       console.log(`${studentTicketsPercent.toFixed(2)} % student tickets.`);
       console.log(`${standartTicketsPercent.toFixed(2)} % standard tickets.`);
       console.log(`${kidTicketsPercent.toFixed(2)} % kids tickets.`);

    }
cinemaTickets (["Taxi","10", "standard", "kid", "student", "student", "standard", "standard", "End", "Scary Movie", "6", "student", "student", "student", "student", "student", "student", "Finish"]);