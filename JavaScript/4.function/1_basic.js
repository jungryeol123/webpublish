/**
 * 함수 정의 : 자바스크립트의 함수는 object 이다
 * 1. 일반적인 함수 정의
 * function 함수명(매개변수) {
 *      실행 코드 생성;
 *      return 반환값;
 * }
 * 
 * 2. const 함수명 = (매개변수) => {
 *      실행 코드 생성;
 *      return 반환값;
 * }
 * 
 * 3. 자바스크립트 엔진은 빌트인 함수를 포함하고 있다.
 * - 예) parseInt() , parseDouble()
 * 호출 방법 : 함수명(파라미터)
 */

// 빌트인 함수 parseInt(정수값 변환);

let str = '10.123';
let number = parseInt(str);
let float = parseFloat(str);
console.log(str, typeof str);
console.log(number, typeof number);
console.log(float, typeof float);

// 두 수를 입력받아, 합계를 출력

let num1 = 100;
let num2 = 20;
console.log(`sum = ${num1 + num2};`);

//함수를 이용하여 두 수의 합계를 출력
//함수 호출 : 호이스팅 작업
sum1();
function sum1() {
    let num1 = 100;
    let num2 = 120;
    console.log(`함수호출 : sum1 = ${num1 + num2};`);
    
}
function sum2(num1, num2) {
    result = (`매개변수 함수 호출 : sum2 = ${num1 + num2};`);
    console.log(result);
}
sum2(2,4);
sum2(100,120);

//Arrow 함수 생성
const sum3 = (num1,num2) => {
    result = (`매개변수 함수 호출 : sum3 = ${num1 + num2};`);
    console.log(result);
}
sum3(500,600);