//숫자 증가 함수
    function increment() {
    // alert('increment');
        let number = document.querySelector("#number").textContent; //form -> input;
    
    // number = parseInt(number);
    //0보다 크면 1증가
    // if(number >= 0) {
        document.querySelector("#number").textContent = ++number;
        // }
        
        
        
    }
    //숫자 감소 함수
    function decrement() {
        let number = document.querySelector("#number").textContent; //form -> input;
        if (number > 0) {
            document.querySelector("#number").textContent = --number;
        }
    }
    
    //숫자 증감 함수
    function counter(button) {
        let number = document.querySelector("#number").textContent; //form -> input;
        if(button === 'increment') {
            document.querySelector("#number").textContent = ++number
        } else if (button === 'decrement') {
            if(number > 0){
            document.querySelector("#number").textContent = --number
            }
        }

}