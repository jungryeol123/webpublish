/**
 * 구구단 출력 : 2 ~ 9 단
 */

for (i = 1; i <= 9; i++) {
    rows = ''
    for (j = 2; j <= 9; j++) {
        rows += (`${j} * ${i} = ${i*j}\t`);
    }
    console.log(rows);
    
}

/**
 *  *
 *  **
 *  ***
 *  ****
 *  *****
 *  초록 사과 찍기, 3행 줄만 빨간 사과 출력 
 */

for (i = 1; i <=5; i++) {
    let output = '';
    for (j = 1; j <= i; j++) {
        if (i === 3){
            output += '🍎'
        } else {
            output += `🍏`
        }
        

    }
    console.log(output);
}

