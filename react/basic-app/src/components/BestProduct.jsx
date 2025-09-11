import { useState,useEffect } from "react";
import { BestProductImage } from "./shared/BestProductImage.jsx";
import { BestProductContent } from "./shared/BestProductContent.jsx";
import { fetchData } from "../util/commonData.js";
// import { BestProductImage } from "./shared/BestProductImage.jsx";

/**
 * 베스트 상품 컴포넌트
 */
export function BestProduct() {
    
    // const productItems = bestProductList.filter((item,index)=> !(index === 0) );  //[]
    // let product = bestProductList[0];
    
    const [cartCount, setCartCount] = useState(0);
    const [bestProductList, setBestProductList] = useState([]);
    const handleCartCount = () => {
        setCartCount(cartCount + 1);
    }
    // 컴포넌트 호출 시 데이터 로딩, 비동기 처리 --> useEffect Hooks 함수
    useEffect(()=>{
        // fetch("/data/best_products.json")
        // .then((response)=> response.json())
        // .then(jsonData => setBestProductList(jsonData))
        // .catch(error => console.log(error));
        
        //둘다 사용 가능
        
        const fetch = async () => {
            const result = await fetchData("/data/best_products.json");
                console.log(result);
                setBestProductList(result);
        }
        fetch();
        
    },[]);

    return (
        <>
            <h2>베스트 상품 --- 🛒({cartCount})</h2>
            <ul className="best-product">
                {bestProductList.map((product,index)=>
                    (index === 0) ?
                        <li key = {index}><BestProductImage 
                            img = {product.img}
                            style={{width:"600px",height: "820px"}}
                            rank = {product.rank}
                            like = {product.like}
                            cartCount = {handleCartCount}
                            /></li>
                    : <li key={index}><BestProductItem 
                            item = {product}
                            cartCount = {handleCartCount}
                            /></li>
                )} 
            </ul>
        </>
    );
}
/**
 * 베스트 상품 아이템 컴포넌트
 */
export function BestProductItem({item,cartCount}) {
    
    return (
        <>
        <div>
            <BestProductImage 
                    img = {item.img}
                    style={{width:"200px",height:"300px"}}
                    rank={item.rank}
                    like = {item.like}
                    icon={"😊"}
                    cartCount = {cartCount}
                    />
            <BestProductContent 
                    title = {item.title}
                    sale = {item.sale}
                    price = {item.price}
                    like = {item.like}
                    icon = "👍"
                    />
        </div>
        </>
    );
}
