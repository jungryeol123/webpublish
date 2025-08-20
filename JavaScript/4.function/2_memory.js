/**
 * 함수 생성 및 호출
 */
// 문자 --> 숫자 변환 함수
import { toNumber } from "../commons/util.js";

// add(100,200);
// add(100,'200');

// function add(num1,num2) {
//     if (typeof (num1 && num2) === 'string') {
//         console.log(`add : ${parseInt(num1) + parseInt(num2)}`);
//     } else {
//         console.log(`add : ${num1 + num2}`);
        
//     }
// }




// const min = (num1, num2) => {
//     // num1 이나 num2 둘 중 하나라도 문자열이면 변환 시도!
//     if (typeof num1 === 'string' || typeof num2 === 'string') {
//         const converted = toNumber(num1, num2); // 변환된 값을 받아와야지!
//         num1 = converted.num1; // min 함수의 num1을 업데이트!
//         num2 = converted.num2; // min 함수의 num2를 업데이트!
//     }

//     if(num1 > num2) {
//         console.log(`min : ${num1 - num2}`);
//     } else {
//         console.log(`값이 올바르지 않습니다.`);
//     }
// }

// min(200,100);
// min('200',100);
// min(200,100);
// min('300',100);

// const min = (num1, num2) => {
//     let obj = toNumber(num1, num2);
//     if(obj.num1 > obj.num2) {
//         console.log(`min = ${obj.num1 - obj.num2}`);        
//     } else {
//         console.log(`값이 올바르지 않습니다.~`);                
//     }
// }


// function toNumber(num1, num2) { 
//     let obj = { 
//         num1 : parseInt(num1), 
//         num2 : parseInt(num2) } 
//         return ; 
//     } 
// const min = (num1, num2) => { 
//     if (typeof (num1 && num2) === 'string') { 
//         toNumber(num1, num2); 
//     } if(num1 > num2) { 
//         console.log(min : ${num1 - num2}); 
//     } else { 
//         console.log(값이 올바르지 않습니다.); 
//     } 
// } 
// min(200,100); 
// min('200',100);

function min2 (num1, num2) {
    let obj = undefined;
    if(num1 > num2) {
        if((typeof num1 === 'string') || (typeof num2 === 'string')) {
            obj = toNumber(num1,num2);
            console.log(obj.num1 - obj.num2);
        } else {
            console.log(num1 - num2);
        }
    }
}
