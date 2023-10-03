function graduation (input){
    let studentName = input [0];
    let year = 1;
    let index = 1;
    let failCount = 0;
    let gradeSum = 0;

    while (year <= 12){
        let grade = Number (input[index]);
        index ++;
        gradeSum += grade;

        if (grade < 4){
            failCount ++;

            if (failCount > 1){
                break;
            }
         } else {
            year++;
        
        }

        }
        if (failCount >1){
            console.log(`${studentName} has been excluded at ${year} grade`);
        } else {
            let avgGrade = gradeSum/12;
            console.log(`${studentName} graduated. Average grade: ${avgGrade.toFixed(2)}`);
        }

    }

graduation (["Mimi", "5", "6", "5","6", "5", "6", "6", "2", "3"])