import axios from "axios";

const signin = async(email, password) => {
    return axios.post("api/v1/auth/signin", { 'user': { email, password  } })
    .then(function (response) {
        console.log(response.data)
        if(response.headers['authorization']) {
            localStorage.setItem('token', response.headers['authorization']);
        }

    })
    .catch(function (error) {
        console.error(error)
        throw error;
    });

    }

const logout = async() => {
    return axios.delete("api/v1/auth/signout", {}, { headers : {  'Accept': '*/*', 'Authorization': localStorage.getItem('token'), "content-type": "application/x-www-form-urlencoded"  } })
    .then(function (response) {
        console.log(response.data)
        localStorage.setItem('token', response.headers['authorization']);
        return response.data;
    })
    .catch(function (error) {
        console.error(error)
        throw error;
    });
}

const authService = {
    signin, logout
}

export default authService;
