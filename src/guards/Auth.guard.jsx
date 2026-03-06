import { Navigate } from "react-router-dom";
import { isLoggedIn } from "../services/globalServices";

const AuthGuard = ({ children }) => {   // children must be in case sesitive
    if(!isLoggedIn()){
        return <Navigate to ='/login' replace />
    }
    return children
}

export default AuthGuard;