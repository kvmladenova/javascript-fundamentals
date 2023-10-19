function loadingBar (num){
    
    if (num == 100){
        console.log("100% Complete!");
        console.log("[%%%%%%%%%%]");
    } else {
        let digit = num / 10;
              
        console.log(num + '% ' + '[' + '%'.repeat(digit) + '.'.repeat(10-digit) + ']');
        console.log("Still loading...");
    }
}
loadingBar (30);
// loadingBar (50);
// loadingBar (100);