import { Avatar } from "./Avatar.jsx";
export function AvatarList({list, className}) {
    return (
        <div className = {className}>
        { list.map((item)=> <Avatar img = {item.img} name = {item.name}/> )}
        </div>
    );
}