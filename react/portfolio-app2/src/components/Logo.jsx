import { Avatar } from "./Avatar.jsx";

export function Logo({img, name}) {
    return (
        <div className="header-logo">
            <Avatar src={img} 
                    alt ="Header logo" 
                    className="header-logo-img"/>
            <h3 className="header-logo-title">{name}</h3>
        </div>
         
    );
}