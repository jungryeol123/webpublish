
export function Title({title}) {
    return (
        <h2 className="title">{title}</h2>
    );
}

export function SubTitle({title}) {
    return (
        <p className="description">{title}</p>
    );
}


export function Description({style}) {
    return (
        <p className={style}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
               Debitis dolorem ducimus incidunt quod quo. Exercitationem quas aliquid dolor harum fugiat nisi, 
               rerum officiis nostrum ipsam repellat esse pariatur asperiores nobis.</p>
    );
}
export function BottomDescription({description}) {
    return (
        <p>Junior Software Engineer Judy's Portfolio - All right reserved</p>
    );
}

