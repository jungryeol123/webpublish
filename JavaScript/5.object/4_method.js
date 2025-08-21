/**
 * 객체를 생성하는 함수 : 생성자 함수
 * 일반함수를 정의하는 형식으로 사용해야함
 * 
 * 객체의 메소드 정의
 * : 함수를 정의하여 메소드 구현
 */
const fruits = {
    //field
    name : 'apple',
    emoji : '🍎',

    //method
    getName : function () {
        return this.name;    
    },
    getEmoji : function () {
        return this.emoji;    
    },
    display : function () {
        console.log(this.name, this.emoji);
    }
}
console.clear();
console.log(fruits);
console.log(fruits.display);
fruits.display();  // ()유무 차이 : 없을 땐 주소 값, 있을 경우 실행까지
console.log(fruits.getName());


function Apple(name, emoji) {
    this.name = name;
    this.emoji = emoji;

    display = () => {
        console.log(this.name,this.emoji);
    }
}

let redApple = new Apple('사과','🍎');
console.log(redApple);
redApple.display();



// const apple = (name, emoji) => {
//     this.name = name;
//     this.emoji = emoji;
// }


