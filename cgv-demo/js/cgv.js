
class User {
    #id;
    #pwd;

    constructor(id, pwd) {
        this.#id = id;
        this.#pwd = pwd;
    }
    getId = () => this.#id;
    getPwd = () => this.#pwd;
    setId = (id) => this.#id = id;
    setPwd = (pwd) => this.#pwd = pwd;
    display = () => {
        console.log(this.#id,this.#pwd);
    }
}

function loginCheck () {
    const id = document.querySelector('#id');
    const pwd = document.querySelector('#pwd');

    if (id.value === '') {
        alert('아이디를 입력해주세요');
        id.focus();
    } else if (pwd.value === '') {
        alert('패스워드를 입력해주세요');
        pwd.focus();
    } else {
        let user = new User(id.value, pwd.value);
        const did = 'test';
        const dpwd = '1234';

        if (did === user.getId() && dpwd === user.getPwd()) {
            alert('로그인 성공')
        } else {
            alert('로그인 실패 - 아이디와 비밀번호를 다시 확인하세요')
        }
    }
}