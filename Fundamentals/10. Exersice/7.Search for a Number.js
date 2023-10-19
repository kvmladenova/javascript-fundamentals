function searchforANumber (arr1, arr2){
    let takeElCount = Number(arr2[0]);
    let deleteELCount = Number(arr2[1]);
    let searchNumber= Number(arr2[2]);

    let newArr = arr1.slice(0,takeElCount);
    // console.log(newArr);
    let deletedArr = newArr.splice(0, deleteELCount);
    // console.log(deletedArr);
    // console.log(newArr);

   let  counter=0;

    for (let i = 0; i < newArr.length; i++)
    {if (newArr[i] == searchNumber){
        counter++;
    }}
    console.log(`Number ${searchNumber} occurs ${counter} times.`);
}
searchforANumber ([5, 2, 3, 4, 1, 6],
    [5, 2, 3])