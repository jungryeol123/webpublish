import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext.js';
import { axiosData } from '../utils/dataFetch.js';
import { cartItemsAddInfo, getTotalPrice, cartItemsCheck, updateCartItemsQty } from '../utils/cart.js';

/**
 * CartContext를 제어하는 함수를 가진 커스텀 훅
 */
export function useCart() {
    //CartContext의 값을 가져오는 작업
    const { setCartCount,setCartList,cartList,cartCount } = useContext(CartContext); 

    //컨텍스트 객체의 값을 변경하는 함수 정의
    //장바구니 아이템

    const addCart = (cartItem) => {
        //pid, size가 동일한 경우 qty증가, cartItems 없는 경우 새로 추가
        // setCartItems([...cartItems, cartItem]);
        setCartList(cartItemsCheck(cartList,cartItem))
        setCartCount(cartCount + 1);
      }
      //장바구니 출력 : 장바구니 아이템 <-- 이미지, 상품명, 상품가격 추가
      const showCart = () =>{
        const fetch = async() => {
                    const jsonData = await axiosData("/data/products.json");
                    setCartList(cartItemsAddInfo(jsonData, cartList));
                    // setTotalPrice(getTotalPrice(jsonData,items))
                }
                fetch();
      }
    return { addCart,showCart }
}

