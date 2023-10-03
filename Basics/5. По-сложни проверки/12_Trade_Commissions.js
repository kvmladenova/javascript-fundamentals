function tradeCommissions (input){
    let city = input [0];
    let sale = Number (input[1]);
    let commissions = 0;

    switch (city){
        case 'Sofia':
            if (sale >=0 && sale <=500){
                commissions = sale * 0.05;
                console.log(commissions.toFixed(2));
            } else if (sale > 500 && sale <= 1000){
                commissions = sale * 0.07;
                console.log(commissions.toFixed(2));
            } else if (sale > 1000 && sale <= 10000){
                commissions = sale * 0.08;
                console.log(commissions.toFixed(2));
            } else if (sale > 10000){
                commissions = sale * 0.12;
                console.log(commissions.toFixed(2));
            } else {
                console.log('error');
            }
            
            break;
        case 'Varna':
            if (sale >=0 && sale <=500){
                commissions = sale * 0.045;
                console.log(commissions.toFixed(2));
            } else if (sale > 500 && sale <= 1000){
                commissions = sale * 0.075;
                console.log(commissions.toFixed(2));
            } else if (sale > 1000 && sale <= 10000){
                commissions = sale * 0.10;
                console.log(commissions.toFixed(2));
            } else if (sale > 10000){
                commissions = sale * 0.13;
                console.log(commissions.toFixed(2));
            } else {
                console.log('error');
            }
          
            break;
        case 'Plovdiv':
            if (sale >=0 && sale <=500){
                commissions = sale * 0.055;
                console.log(commissions.toFixed(2));
            } else if (sale > 500 && sale <= 1000){
                commissions = sale * 0.08;
                console.log(commissions.toFixed(2));
            } else if (sale > 1000 && sale <= 10000){
                commissions = sale * 0.12;
                console.log(commissions.toFixed(2));
            } else if (sale > 10000){
                commissions = sale * 0.145;
                console.log(commissions.toFixed(2));
            } else {
                console.log('error');
            }
            
            break;
        default:
            console.log('error');
            break;
    }
}

tradeCommissions (["Plovdiv", "-20"])