import { Counter } from "./components/Counter.jsx";
import './App.css'
import { useState } from "react";

// 자식 > 부모(누적합) > 자식(결과 전송)

export default function App() {
    const [total, setTotal] = useState(0);     //변수의 상태관리
    const [init, setInit] = useState(0);    //자식 초기화 : 0,1 값을 toggle

    const click = (type) => {           //자식 컴포넌트의 클릭이벤트 결과 자겨오기
        if(type === "+") setTotal(total + 1);
        else if (type === "-") setTotal(total-1);
        else if (type === 0) {
            setTotal(0);
            setInit(!init);
        }
    }
    

    return (
        <>
        <h1>Counter Test</h1>
        <Counter click = {click} total = {total} init = {init}/>
        <Counter click = {click} total = {total} init = {init}/>
        </>
    );
}