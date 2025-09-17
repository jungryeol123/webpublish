
export function Article({children, style}) {
    return (
        <article className={style}>
            {children}
        </article>
    );
}

export function SkillsTitle({title}) {
    return (
        <h3 class="skill-title">{title}</h3>
    );
}

export function CodingSkills ({skills}) {

    return (
        <ul>
            {skills && skills.map(skill =>
            <li class="bar">
                <div class="bar-title">
                    <span>{skill.title}</span>
                    <span>{skill.value}</span>
                </div>
                <div class="bar-bg">
                    <div class="bar-value" style={{width:skill.width}}></div>
                </div>
            </li>
            )}
        </ul>
    );
}