/**
 * 사원클래스 정의
 * 사원 번호(#), 사원명, 나이를 입력받아 객체를 생성
 */

class Employee {
    #empno

    constructor(empno, name, age) {
        this.#empno = empno;
        this.name = name;
        this.age = age;
    }
    setEmpno = (empno) => { this.#empno = empno};
    setName = (name) => { this.name = name};
    setAge = (age) => { this.age = age};

    getEmpno = () => { return this.#empno};
    getName = () => { return this.name};
    getAge = () => { return this.age};

    getObject = () => { 
    return {  
           empno : this.#empno,
           name : this.name,
           age : this.age
        }
    }

    display = () => {
        console.log(this.#empno, this.name, this.age);
    }
}
let hong = new Employee('E0001', '홍길동','20');
let park = new Employee('E0002', '박정민','30');
hong.setAge(55);
hong.setName('홍길순');
console.log(hong.getEmpno());
console.log(hong.getName());
console.log(hong.getAge());
hong.display();
console.log(hong.getObject());

let empList = [];
empList.push(hong.getObject());
empList.push(park.getObject());
console.log(empList);
console.log(`empList = ${empList}`);
