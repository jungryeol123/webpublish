export function Project({style, img, msg, title}) {
    return (
        <img className={style} src={img} alt={msg}/>
    );
}

export function Projects({projects}) {
  
    return (
        <ul className="projects">
            {projects.map(item =>
                <li className="project">
                    <Project style ="project-img"
                             img = {item.img}
                             msg = {item.msg}/>
                    <div className="project-metadata">
                        <h3 className="project-metadata-title">{item.msg}</h3>
                        <p>Clone Coding with HTML, CSS</p>
                    </div>
                </li>

            )}
            </ul>
                
    );
}


