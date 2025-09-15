import { initForm } from '../../util/init';
import { validateLoginCheck2 } from '../../util/validate';
import './cgvSignup.css';
import React, { useState,useRef,useMemo } from 'react';


export function Signup() {
    const initArray = ['id', 'pwd', 'cpwd','name','phone','emailName','emailDomain'];

    const refs = useMemo(() => {    //Hooks 비동기식 처리 진행
        return initArray.reduce((acc,cur) => {
            acc[`${cur}Ref`] = React.createRef();
            return acc;
        },{});
    });
    const [form,setForm] = useState(initForm(initArray));
    const [msg,setMsg] = useState(initForm(initArray));
    
    // const [form,setForm] = useState({id:'',pwd:'',cpwd:'',name:'',phone:'',emailName:'',emailDomain:''});
    // const [msg,setMsg] = useState({id:'',pwd:'',cpwd:'',name:'',phone:'',emailName:'',emailDomain:''});
    // const [error,setError] = useState('');

    // const refs = {
    //     idRef : useRef(null),
    //     pwdRef : useRef(null),
    //     cpwdRef : useRef(null),
    //     nameRef :useRef(null),
    //     phoneRef : useRef(null),
    //     emailNameRef :useRef(null),
    //     emailDomainRef : useRef(null),
    //     msgidRef : useRef(null),
    //     msgpwdRef : useRef(null),
    //     msgcpwdRef : useRef(null),
    //     msgnameRef : useRef(null),
    //     msgphoneRef : useRef(null),
    //     msgemailNameRef : useRef(null),
    //     msgemailDomainRef : useRef(null)
    // }
    const handleChangeForm = (e) => {
        const { name,value } = e.target;
        setForm({...form, [name]:value});
        setMsg({id:'',pwd:'',cpwd:'',name:'',phone:'',emailName:'',emailDomain:''} )
    }
    const handleResetForm = () => {
        setForm({id:'',pwd:'',cpwd:'',name:'',phone:'',emailName:'',emailDomain:''});
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if(validateLoginCheck2(refs,setMsg)) {
            console.log("submit ===>",form);
        }
    }

    return (
    <div className="content">
        <div className="join-form center-layout">
            <h1 className="center-title">회원가입(React)</h1>
            <form onSubmit={handleSubmit}>
                <ul>
                    <li>
                        <label for="" ><b>아이디</b></label>
                            <span ref={refs.msgidRef}>{msg.id}</span>
                        <div>
                            <input type="text" 
                                    name="id" 
                                    ref={refs.idRef}
                                    onChange={handleChangeForm}
                                    value={form.id}
                                    placeholder = "아이디 입력(6~20자)" />
                            <button type="button" 
                                  > 중복확인</button>
                            <input type="hidden" id="idCheckResult" value="default" />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>비밀번호</b></label>
                            <span ref={refs.msgpwdRef}>{msg.pwd}</span>
                        <div>
                            <input type="password" 
                                    name="pwd"
                                    ref={refs.pwdRef}
                                    value={form.pwd}
                                    placeholder="비밀번호 입력(문자,숫자,특수문자 포함 6~12자)"
                                    onChange={handleChangeForm}
                                    />
                        </div>
                    </li>
                    <li>
                        <label for=""><b>비밀번호 확인</b></label>
                            <span ref={refs.msgcpwdRef}>{msg.cpwd}</span>
                        <div>
                            <input type="password" 
                                    name="cpwd"
                                    value={form.cpwd}
                                    ref={refs.cpwdRef}
                                    onChange={handleChangeForm}
                                    placeholder="비밀번호 재입력"/>
                        </div>
                    </li>
                    <li>
                        <label for=""><b>이름</b></label>
                            <span ref={refs.msgnameRef}>{msg.name}</span>
                        <div>
                            <input type="text" 
                                    name="name"
                                    ref={refs.nameRef}
                                    value={form.name}
                                    onChange={handleChangeForm}
                                    placeholder="이름을 입력해주세요"/>
                        </div>
                    </li>
                    <li>
                        <label for=""><b>전화번호</b></label>
                            <span ref={refs.msgphoneRef}>{msg.phone}</span>
                        <div>
                            <input type="text" 
                                    name="phone"
                                    ref={refs.phoneRef}
                                    value={form.phone}
                                    onChange={handleChangeForm}
                                    placeholder="휴대폰 번호 입력('-' 포함)"/>
                        </div>
                    </li>
                    <li>
                        <label for=""><b>이메일 주소</b></label>
                            <span ref={refs.msgemailNameRef}>{msg.emailName}</span>
                            <span style={{color:"red",fontSize:"12px"}} ref={refs.msgemailDomainRef}>{msg.emailDomain}</span>
                        <div>
                            <input type="text" 
                                    name="emailName"
                                    ref={refs.emailNameRef}
                                    onChange={handleChangeForm}
                                    value={form.emailName}
                                    placeholder="이메일 주소"/>
                            <span>@</span>       
                            <select name="emailDomain"
                                    ref = {refs.emailDomainRef}
                                    value={form.emailDomain}
                                    onChange={handleChangeForm}
                                    >
                                        
                                <option value="default">선택</option>
                                <option value="naver.com">naver.com</option>
                                <option value="gmail.com">gmail.com</option>
                                <option value="daum.net">daum.net</option>
                            </select>
                        </div>
                    </li>
                    <li>
                        <button type="submit">가입하기</button>
                        <button type="reset" onClick={handleResetForm}>다시쓰기</button>
                    </li>
                </ul>
            </form>
        </div>
    </div>
    );
}

