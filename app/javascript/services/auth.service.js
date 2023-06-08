import axios from "axios";

const signin = async(email, password) => {
    return axios
        .post("/login", { 'user': { email, password  } })
        .then((response) => {
            if(response.headers['authorization']) {
                localStorage.setItem('token', response.headers['authorization']);

                console.log(response.headers['authorization'])
            }
            return response.data;
        }).catch(function (error) {
            throw error;
            })
    }

const logout = async() => {
    console.log(localStorage.getItem('token')   )

    return axios.delete("/logout", { headers :{ 'Authorization': localStorage.getItem('token') }})
    .then(function (response) {
        console.log(response.data)
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
