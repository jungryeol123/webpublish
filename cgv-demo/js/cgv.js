
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
        console.log(this.getId(),this.getPwd());
    }
}

class Member {
    #id;
    #pwd;
    constructor (id, pwd) {
        this.#id = id;
        this.#pwd = pwd;
    }

    getId = () => this.#id;
    setId = (id) => this.#id = id;
    getPwd = () => this.#pwd;
    setPwd = (pwd) => this.#pwd = pwd;
    display = () => {
        console.log(this.getId(),this.getPwd());
    }
}
class JoinMember extends Member {
    constructor(id,pwd,name,phone,emailname,emaildomain) {
        super(id,pwd);
        this.name = name;
        this.phone = phone;
        this.emailname = emailname;
        this.emaildomain = emaildomain;
    }

    display = ( ) => {
        console.log(this.getId(),this.getPwd(),this.name,this.phone,this.emailname,this.emaildomain);
    }
}


//로그인 함수
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
            user.display();
        } else {
            alert('로그인 실패 - 아이디와 비밀번호를 다시 확인하세요')
        }
    }
}

//회원가입 함수
function signupCheck() {
    let id = document.querySelector('#id');
    let pwd = document.querySelector('#pwd');
    let cpwd = document.querySelector('#cpwd');
    let name = document.querySelector('#name');
    let phone = document.querySelector('#phone');
    let emailname = document.querySelector('#emailname');
    let emaildomain = document.querySelector('#emaildomain');

    if (id.value === '') {
        alert('아이디를 입력해주세요');
        id.focus();
    }   else if (pwd.value === '') {
        alert('패스워드를 입력해 주세요');
        pwd.focus();
    } else if (cpwd.value === '') {
        alert('패스워드를 다시 입력해주세요');
        cpwd.focus();
    } else if (name.value === '') {
        alert('이름을 입력해주세요');
        name.focus();
    } else if (phone.value === '') {
        alert('전화번호를 입력해주세요')
        phone.focus();
    } else if (emailname.value === '') {
        alert('이메일를 입력해주세요')
        emailname.focus();
    } else if (emaildomain.value === 'default') {
        alert('이메일 도메인을 입력하세요');
        emaildomain.focus();
    } else {
        // console.log(id.value, pwd.value,cpwd.value,name.value,phone.value,emailname.value,emaildomain.value);
        let member = new JoinMember(
            id.value, 
            pwd.value,
            name.value,
            phone.value,
            emailname.value,
            emaildomain.value);
            member.display();
    }
}