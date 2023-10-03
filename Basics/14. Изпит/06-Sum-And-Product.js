function sumAndProduct (input){
let n = Number (input[0]);
let magicNumber = false;
let number = '';

for (let a = 1; a <= 9; a++){
    for (let b=9; b >= 1; b--){
        for (let c = 0; c <= 9; c++){
            for (let d = 9; d >= 0; d--){
                if (a+b+c+d === a*b*c*d && n % 5 === 0){
                    
                    let p1 = a.toString();
                    let p2 = b.toString();
                    let p3 = c.toString();
                    let p4 = d.toString();
                    number = p2 + p1 + p4 + p3;
                    magicNumber = true;
                    break;

                } else if (Math.floor((a*b*c*d)/(a+b+c+d)) === 3 && n % 3 === 0){
                    
                    let p1 = a.toString();
                    let p2 = b.toString();
                    let p3 = c.toString();
                    let p4 = d.toString();
                    number = p3 + p4 + p1 + p2;
                    
                    magicNumber = true;
                    break;
                } 
            }        
        }   
    }
}
if (n % 5 != 0 && n % 3 != 0 && magicNumber == false){
    console.log('Nothing found');
 }
    if(magicNumber == true){
         console.log(number);
     } 

     
}
//sumAndProduct (["123"]) //8191
//sumAndProduct (["145"]) //1412
sumAndProduct (["214"]) //Nothing found