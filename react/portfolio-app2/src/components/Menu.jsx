
export function Menu({href,style,title,click}) {
    return (
         <a href={href} 
            className={style}
            onClick={()=>{click(title)}}>{title}</a>
    );
}