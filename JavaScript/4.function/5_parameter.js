/**
 * 함수 호출 --> 파라미터 --> 함수의 매개변수에 매핑
 * Rest Parameter(레스트 파라미터) : 여러 개의 파라미터를 전송 시 사용
 * Spread operator(스프레드 연산자 : ...)
 */

console.log(add(1,2));
console.log(add(1,2,3,4,5,6,7,8));
console.log(add(1,2,3,4,5,6,7,8,45,23,5,6));


function add(... numbers) {
    // let sum = 0;
    // for (i = 0; i < numbers.length; i++) {
        // sum += numbers[i]; 
        // }
        
        // let sum = numbers.reduce((acc, cur) => {
            //     return acc+cur;             //실행문 한줄일때는 return 과 {} 생략 가능
            // }) ;
            let sum = numbers.reduce((acc, cur) => acc+cur);
            return sum;
        }
        
console.log(add2(1,2,3));
console.log(add2(1,2,3,4,5,6,7,8));
console.log(add2(1,2,3,4,5,6,7,8,45,23,5,6));
        
function add2(a,b, ... numbers) {
    let c = numbers.reduce((acc, cur) => acc+cur);
    let sum = a + b + c;

    return sum;
}