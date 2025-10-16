import { useRef, useState } from "react";
import '../styles/login.css'

export function Login() {
    const [formData, setFormData] = useState({id:"",pwd:""})
    const idRef = useRef(null);
    const pwdRef = useRef(null);

return (
    <div>
        <h1>로그인</h1>
        <form>
            <ul>
                <li >
                    <div><input type="text"
                                name="id"
                                ref={idRef}
                                value={formData.id}
                                placeholder="아이디를 입력해주세요"></input></div>
                </li>
                <li >
                    <div><input type="password"
                                name="pwd"
                                ref={pwdRef}
                                value={formData.pwd}
                                placeholder="패스워드를 입력해주세요"></input></div>
                </li>
                <li >
                    
                    <div>
                        <a href="">아이디 찾기</a>
                        <a href="">비밀번호 찾기</a>
                    </div>
                </li>
                <li >
                    <button type="submit">로그인</button>
                </li>
                <li>
                    <button type="submit">회원가입</button>
                </li>
            </ul>
        </form>
    </div>
    );
} 