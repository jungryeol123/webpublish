import { AvatarImage } from "../base/Avatar.jsx";

export function Logo({img,name}) {
    return (
         <div className="header-logo">
            <AvatarImage img={img}
                         msg="header logo"
                         style="header-logo-img"/>
            <h3 className="header-logo-title">{name}</h3>
        </div>
    );
}