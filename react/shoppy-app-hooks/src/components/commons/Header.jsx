import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { useState,useEffect,useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext.js"; 
import { useAuth } from "../../hooks/useAuth.js";

export function Header() {
    const { handleLogout } = useAuth();
    const { isLogin } = useContext(AuthContext);
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
                {!isLogin &&
                <Link to="/login"><button type="button">로그인</button></Link>
                }
                {isLogin &&
                    <button type="button"
                            onClick={ handleLogout }>로그아웃</button>
                }
                <Link to="/signup">
                    <button type="button">회원가입</button>
                </Link>
                { isLogin &&
                <Link to="/support">
                    <button type="button">고객센터</button>
                </Link>
                }

                
            </nav>
            </div>
        </div>
    );
}