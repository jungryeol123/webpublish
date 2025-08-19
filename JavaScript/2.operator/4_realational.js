/**
 * 비교 연산자 : > , < , >= , <= , ==(값비교), ===(값,데이터 비교)
 */

console.log(3>2);   //true
console.log(3<2);   //false
console.log(3>=2);  //true
console.log(3<=2);  //false
console.log(3 == '3');  //true
console.log(3 === '3');  //false
console.log(3 == 'A');  //false (3 == 67(A의 아스키코드 값))
console.log(3 === 'a');  //false

let obj1 = {
    name : '홍길동',
}

let obj2 = {
    name : '홍길동',
}
console.log(`참조형 -------`);
console.log(obj1 == obj2); //false (주소값 비교이기 때문)
console.log(obj1.name == obj2.name); //true
console.log(typeof obj1 == typeof obj2); //true
