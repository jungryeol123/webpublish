import { useState, useRef,useContext } from 'react';
import { useNavigate,Link} from 'react-router-dom';
import { FaUser } from "react-icons/fa6";
import { FaLock } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { getLogin } from '../features/auth/authAPI.js';
import '../styles/utilities/login.css'


export function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const idRef = useRef(null);
    const pwdRef = useRef(null);
    const [formData, setFormData] = useState({id:'', pwd:''});
    const [errors, setErrors] = useState({id:'', pwd:''});
    

    const handleFormChange = (e) => {
        const { name, value } = e.target; 
        setFormData({...formData, [name]:value});
        setErrors({id:'', pwd:''});
    }

    const handleLoginSubmit = async(e) => {
        e.preventDefault();
        const param = {
            idRef: idRef,
            pwdRef: pwdRef,
            setErrors: setErrors,
            errors: errors
        }

        const succ = await dispatch(getLogin(formData,param));        //비동기식 처리 후 isLogin 변경
        if(succ) {
            alert("로그인 성공!!");
            navigate("/");
        } else {
            alert("로그인 실패!!");
            setFormData({id:"",pwd:""});
            idRef.current.focus();
        }
    }
    
    return (
    <div className="content">
        <div className="center-layout login-form">
            <h1 className="center-title">로그인</h1>
            <form onSubmit={handleLoginSubmit}>
                <ul>
                    <li>
                        <div className="login-form-input">
                            <FaUser />
                            <input  type="text" 
                                    name="id" 
                                    value={formData.id}
                                    ref={idRef}
                                    onChange={handleFormChange}
                                    placeholder="아이디를 입력해주세요" />
                        </div>
                        <span style={{color:"red", fontSize:"0.8rem"}}>{errors.id}</span>
                    </li>
                    <li>
                        <div className="login-form-input">
                            <FaLock />
                            <input  type="password" 
                                    name="pwd" 
                                    value={formData.pwd}
                                    ref={pwdRef}
                                    onChange={handleFormChange}
                                    placeholder="패스워드를 입력해주세요" />
                        </div>
                        <span style={{color:"red", fontSize:"0.8rem"}}>{errors.pwd}</span>
                    </li>
                    <li>
                        <button type="submit"
                                className="btn-main-color"                                
                                >로그인</button>
                    </li>
                    <li>
                        <button type="submit"
                                className="btn-main-color"                                
                                >회원가입</button>
                    </li>
                    <li>
                        <div className="links">
                             <Link to="/find-user-id">아이디 찾기</Link>
                            <span>|</span>
                            <Link to="/find-password">비밀번호 찾기</Link>
                        </div>
                    </li>
                    <li>
                        <button className="btn-main-color-naver">네이버 로그인</button>
                    </li>
                </ul>
            </form>
        </div>
    </div>
    );
}