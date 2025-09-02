/**
 * Map : key, value한 쌍으로 저장
 * - set(key,value) : 데이터 추가
 * - get(key) : 데이터 출력
 * - has(key) : 데이터 존재 확인
 * - delete(key) : 데이터 삭제
 */

let fruitsMap = new Map();
fruitsMap.set('apple', '🍎');
fruitsMap.set('orange', '🍊');

console.log(fruitsMap);
console.log(fruitsMap.get('apple'));
console.log(fruitsMap.has('orange'));
console.log(fruitsMap.has('lemon'));
console.log(fruitsMap.delete('apple'));
console.log(fruitsMap);

fruitsMap.set('apple', '🍎');
fruitsMap.set('orange', '🍊'); //중복된 데이터 저장 X
console.log(fruitsMap);
