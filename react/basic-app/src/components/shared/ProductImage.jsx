/**
 * 상품이미지 컴포넌트
 */
import { Image } from "../commons/Image.jsx";

export function ProductImage({img,style}) {
    const {width,height} = style;
    return (
        <Image img = {img} 
            width={style.width} 
            height={style.height}/>
    );
}