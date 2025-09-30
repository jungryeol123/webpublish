import { Children, createContext, useState } from "react";

//1. AuthContext 생성
export const AuthContext = createContext();

//2. AuthContext의 Provider 생성
export const AuthProvider = ({children}) => {
    //로그인 결과 저장
    const [isLogin, setIsLogin ] = useState(false);

    return (
        <AuthContext.Provider
                    value={ {isLogin, setIsLogin} }>
            {children}
        </AuthContext.Provider>
    );
}