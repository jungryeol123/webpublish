// import { AvatarImage } from "./AvatarImage.jsx";


//Avatar 이미지 + 이름
export function Avatar ({img,name}) {
    return (
        <div className = "avatar">
            <AvatarImage img = {img} style = "avatar-img-circle"/>
            <p>{name}</p>
        </div>
    );
}

//Avatar 배열 가져오기
export function AvatarList({list, className}) {
    return (
        <div className = {className}>
        { list.map((item, i)=> <Avatar key={i} img = {item.img} name = {item.name}/> )}
        </div>
    );
}

//Avatar 이미지 가져오기
export function AvatarImage({img, style}) {
    return(
        <img src={img} className= {style}></img>
    );
}

//Avatar 이미지 + 스타일
export function AvatarImageList({imgList}) {
    return(
        <div>
        { imgList.map((item,index) => 
            <img key={index} src={item.img} className= {item.style}></img>
        )}
        </div>
    );
}


