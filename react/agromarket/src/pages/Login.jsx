import { useRef, useState } from "react";

export function Login() {
    const [formData, setFormData] = useState({id:"",pwd:""})
    const idRef = useRef(null);
    const pwdRef = useRef(null);

return (
    <div>
        <h1>로그인</h1>
        <span>농수산물 온라인도매시장</span>
        <p>농수산물 온라인도매시장 이용을 위해서는 회원 이용신청을 통한 이용승인 절차가 필요합니다</p>
        <form>
            <ul>
                <li style={{listStyle : "none"}}>
                    <span >일반 로그인</span>
                </li>
                <li style={{listStyle : "none"}}>
                    <div><input type="text"
                                name="id"
                                ref={idRef}
                                value={formData.id}
                                placeholder="아이디를 입력해주세요"></input></div>
                </li>
                <li style={{listStyle : "none"}}>
                    <div><input type="password"
                                name="pwd"
                                ref={pwdRef}
                                value={formData.pwd}
                                placeholder="패스워드를 입력해주세요"></input></div>
                </li>
                <li style={{listStyle : "none"}}>
                    <button type="submit">로그인</button>
                </li>
                <li style={{listStyle : "none"}}>
                    <div>
                        <input type="checkbox" name="stats" />
                        <label >아이디 저장</label>
                    </div>
                    <div>
                        <a href="">회원가입</a>
                        <a href="">아이디 찾기</a>
                        <a href="">비밀번호 찾기</a>
                    </div>
                </li>
            </ul>
        </form>
    </div>
    );
} 