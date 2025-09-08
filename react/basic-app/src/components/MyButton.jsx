// export function MyButton(props) {       //props = {name:"회원가입"}
//     return (
//         <button className="mybutton" type = "button" >{props.name}</button>
//     );
// } 두 가지 방법
export function MyButton({name,type,style}) {
    return (
        <button className={style} type = {type} >{name}</button>
    );
}