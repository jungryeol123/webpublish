import { useEffect, useState } from "react";

export function Counter({click,total,init}) {
    const [number,setNumber] = useState(0);
    
    const handleClickIncrement= () => {
        if(number < 10) {
            setNumber(number+1);
            click("+");
        } else setNumber(number);
        
    }
    const handleClickDecrement= () => {
        if(number>0) {
            setNumber(number-1);
            click("-");
        } else setNumber(0);
        
    }
    const handleClickInit= () => {
        click(0);   //부모의 click 함수 호출
        setNumber(init);
    }
    //useEffect : Counter 컴포넌트 로딩 시 최초에 처름 실행되는 함수
    //값이 변경될 때마다 재호출
    // 형식 : useEffect(콜백함수, dependencies);
    useEffect(()=>{
        setNumber(0);
    },[init]);
    
    return (
        <div className="counter-container">
        <div >
            <span className="number">{number}</span>
            <span >/</span>
            <span className="total-number">{total}</span>
        </div>
            <div>
                <button onClick  = {handleClickDecrement} type = "button">(-)감소</button>
                <button onClick  = {handleClickIncrement} type = "button">(+)증가</button>
                <button onClick  = {handleClickInit} type = "button">(초기화)</button>
            </div>
        </div>
    );
}