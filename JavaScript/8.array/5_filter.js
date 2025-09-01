/**
 * 배열의 값을 순회하여 콜백함수를 적용하고, 그 조건에 맞는 결과를 새로운 배열객체로 리턴
 * - 배열.map(콜백함수);
 */
let objects = [
    {name : '홍길동', age : 10},
    {name : '이순신', age : 20},
    {name : '김유신', age : 30}
];

let fruits = new Array('🍎','🍋','🍋','🍏','🍇');


let objects2 = objects.filter(item => item.name === '이순신');
console.log(objects2);

const searchCount = (array,item) => {
    // let result = array.filter(sitem => sitem === item);
    // return result.length;
    return array.filter(sitem => sitem === item).length;
    

}
console.log(`count => ${searchCount(fruits,'🍋')}`);
