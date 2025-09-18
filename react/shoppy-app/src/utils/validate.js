/**
 * 로그인 폼 체크
 */

export function validateLoginCheck(refs,setMsg) {

    if(refs.idRef.current.value === "") {
        // alert('아이디를 입력해주세요');
        // refs.msgIdRef.current.innerText = '아이디를 입력해주세요';
        setMsg({id: '아이디를 입력해주세요'});
        refs.idRef.current.focus();
        return false;
    } else if (refs.passRef.current.value === "") {
        // alert('패스워드를 입력해주세요');
        // refs.msgPassRef.current.innerText = '패스워드를 입력해주세요'
        setMsg({pass:'패스워드를 입력해주세요'})
        refs.passRef.current.focus();
        return false;
    }
    return true;
}
/**
 * 회원가입 폼 체크
 */
export function validateLoginCheck2(refs,setMsg) {
    if(refs.idRef.current.value === "") {
        setMsg({id:'아이디를 입력해주세요'});
        refs.idRef.current.focus();
        return false;
    } else if (refs.pwdRef.current.value === "") {
        setMsg({pwd:'패스워드를 입력해주세요'})
        refs.pwdRef.current.focus();
        return false;
    } else if (refs.cpwdRef.current.value === "") {
        setMsg({pwd:'패스워드를 한번 더 입력해주세요'})
        refs.cpwdRef.current.focus();
        return false;
    } else if (refs.nameRef.current.value === "") {
        setMsg({name:'이름을 입력해주세요'})
        refs.nameRef.current.focus();
        return false;
    } else if (refs.phoneRef.current.value ==="") {
        setMsg({phone:'전화번호를 입력해주세요'})
        refs.phoneRef.current.focus();
        return false;
    
    } else if (refs.emailNameRef.current.value === "") {
        setMsg({emailName:'이메일을 입력해주세요'});
        refs.emailNameRef.current.focus();
        return false;
    } else if (refs.emailDomainRef.current.value === "default") {
        setMsg({emailDomain : '이메일 도메인을 선택해주세요'})
        refs.emailDomainRef.current.focus();
        return false;
    }
    return true;
}