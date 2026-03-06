import apiConfig from "../services/apiConfig";
const baseUrl = 'http://localhost:4040/api';

const Login = async (data) => {
    try {
        const res = await apiConfig.api.post(`${baseUrl}/signIn`, data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        });
        console.log(res);
        return res.data;
    } catch (err) {
        console.log("err", err)
    }
}

const signUp = async (data) => {
    try {
        const res = await apiConfig.api.post(`${baseUrl}/signup`, data, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        return res.data;
    } catch (err) {
        console.log("err", err)
    }
}


const apiService = {
    Login,
    signUp
}

export default apiService;