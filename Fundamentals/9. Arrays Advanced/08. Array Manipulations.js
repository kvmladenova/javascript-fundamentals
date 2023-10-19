function arrayManupilations (arrInput){
    let arr = arrInput.shift().split(' ').map(Number);
    
    for (let i = 0; i < arrInput.length; i++){
        let[command, firstNum, secondNum] = arrInput[i].split(' ');

        firstNum = Number(firstNum);
        secondNum = Number (secondNum);

        switch (command){
            case 'Add':
                add (firstNum);
                break;
            case 'Remove':
                remove(firstNum);
                break;
            case 'RemoveAt':
                removeAt(firstNum)
                break;
            case 'Insert':
                insert (firstNum, secondNum)
                break;
        }
    }

    function add(el){
        arr.push(el);
    }
    
    function remove (el){
        arr = arr.filter(item => item !== el);
    }

    function removeAt (index){
        if (index >=0 && index < arr.length){
        arr.splice(index, 1);
    }
    }

    function insert (num, index){
        if (index >=0 && index <= arr.length){
        arr.splice (index, 0, num)
    }
    }
    console.log(arr.join(' '));
}
arrayManupilations( ['4 19 2 53 6 43',

'Add 3',

'Remove 2',

'RemoveAt 1',

'Insert 8 3'])