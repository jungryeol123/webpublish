/**
 * forEach 메소든느 Iterator 심볼 객체를 상속한 객체에서 제공됨
 * - 배열.forEach(callbackFn);
 * - element, index, array
 */
let fruits = new Array('🍎','🍊','🍋','🍏','🍇');
fruits.forEach((element, index, array) => {
    console.log(element,index,array);
});
fruits.forEach((element) => console.log(element));

//🍋을 🍇로 교체
console.clear();

fruits.forEach((element,index) => {
    if(element === '🍋') {
        fruits.splice(index,1,'🍇');
    }
});
console.log(fruits);


 