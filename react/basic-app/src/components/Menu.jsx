/**
 * 메뉴 컴포넌트
 */

// export function Menu(props) {
//     return(
//         <a href="#"
//             style={{color:props.color,background:props.bg}}>{props.title}</a>
//     );
// }

export function Menu({title,color, bg, href}) {
    return(
        <a className="menu" 
        href={href}
        style={{color :color, background : bg}}>{title}</a>
    );
}

