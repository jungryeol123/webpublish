import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { useState,useEffect,useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function Header() {
    
    const { cartCount } = useContext(CartContext);

    return (
        <div className="header-outer">
            <div className="header">
                <Link to="/" className="header-left">
                    <FiShoppingBag />
                    <span>Shoppy-hooks</span>
                </Link>
            <nav className="header-right">
                <Link to="/all">Products</Link>
                <Link to="/cart">MyCart({cartCount})</Link>
                <Link to="/login"><button type="button">로그인</button></Link>
                <Link to="/signup">
                    <button type="button">회원가입</button>
                </Link>
                <Link to="/support">
                    <button type="button">고객센터</button>
                </Link>

                
            </nav>
            </div>
        </div>
    );
}