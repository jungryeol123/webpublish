/**
 * 
 */
function step1(initNo) {
    let result1 = initNo + 1;
    return Promise.resolve(result1);
}

function step2(initNo) {
    let result2 = initNo + 1;
    return Promise.resolve(result2);
}

function step3(initNo) {
    let result3 = initNo + 1;
    return Promise.resolve(result3);
}

step1(0)
    .then((result1) => {    //result1 = 1
        console.log(`result1 => ${result1}`);
        return step2(result1);
    })
    .then((result2) => {
        console.log(`result2 => ${result2}`);
        return step3(result2);
    })
    .then((result3) => {
        console.log(`result3 => ${result3}`);
    })
    .catch(error => console.log(error));