/**
 * 베스트 상품 이미지 컴포넌트
 */
import { ProductImage } from "./ProductImage.jsx";
import { Icon } from "../commons/Icon.jsx";

export function BestProductImage({img,style,rank,like,icon,cartCount}) {
     const handleAddCart = () => {
        cartCount();
     }
    return (
        <div className="best-product-img">
            <ProductImage img = {img} style = {style}/>
            {/* <span className = "best-product-img-no">{rank}</span> */}
            <Icon value = {rank}
                  bg = "#000"
                  color = "#fff"
                  radius = "0"
                  width = "10px"
                  height = "20px"
                  />
            { (like)? 
            <span className = "best-product-img-like" onClick={handleAddCart}>{icon}</span> : ""}
        </div>
    );
}