function echoType (parameter){
    let param = typeof parameter;
    console.log(param);

    if (param == 'string' || param == 'number'){
        console.log(parameter);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}

echoType ('Hello, JavaScript!');
echoType (18);
echoType (null)