function palindromeInt (arr){
    for (let curNum of arr){
        let isPalindrome = checkIsPalindrome(curNum);
        console.log(isPalindrome);
    }

    function checkIsPalindrome (num){
        let numStr = String (num);
        let reversedNumStr='';

        for (let i = numStr.length - 1; i >= 0; i --){
            let curChar = numStr [i];
            reversedNumStr += curChar;
        }
        let isPalindrome = numStr == reversedNumStr;
        return isPalindrome;
    }
}
palindromeInt ([123,323,421,121]);
// palindromeInt ([32,2,232,1010]);