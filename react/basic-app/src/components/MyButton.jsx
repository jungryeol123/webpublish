// export function MyButton(props) {       //props = {name:"회원가입"}
//     return (
//         <button className="mybutton" type = "button" >{props.name}</button>
//     );
// } 두 가지 방법
export function MyButton({name,type,style,handleProps}) {
    const handleClick = () => {
        console.log(`(자식)버튼 클릭 ---> ${name}`);
        handleProps(`버튼 클릭 ---> ${name}`);
    }
    return (
        //이벤트 호출 시 함수여도 괄호 생략
        <button className={style} onClick={handleClick} type = {type} >{name}</button>
    );
}