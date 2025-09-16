
export function Avatar({img, msg, style}) {
    return (
        <img src={img} alt={msg} className={style}/>
    );
}