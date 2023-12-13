import { useContext, createContext, useState, Children, useEffect } from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({});
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const decoded = jwtDecode(token)
        setUser(decoded)
        setIsAuth(true)
        }
        
    }, [isAuth])

    const values = {
        user,
        isAuth
    }


    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )

}

const useAuthContext = () => {
    const context = useContext(AuthContext)
    return context
}

export {
    AuthProvider,
    AuthContext,
    useAuthContext
}