function repeatString (str, count){
 let newStr = ' ';
 for (let i = 1; i <= count; i++){
    newStr += str;
 }
 return newStr;
}
console.log(repeatString ("abc", 3));
console.log(repeatString ("String", 2));