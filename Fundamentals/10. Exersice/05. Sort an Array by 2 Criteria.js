function sortAnArraybyTwoCriteria (arr){
    let sortArr = arr.sort((a,b) => a.localeCompare(b));
    let finalArr = arr.sort((a,b)=> a.length - b.length)
    console.log(sortArr.join('\n'));

}
sortAnArraybyTwoCriteria(['alpha','beta','gamma']);
// sortAnArraybyTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);