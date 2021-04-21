const USER_API = "http://localhost:4001/api/users";

const profile = () => {
    return fetch(`${USER_API}/profile`, {
        method: "POST",
        credentials: "include"
    }).then(response => response.json())
}

const otherProfile = (userName) => {
    console.log('userName inside the service:', userName)
    return fetch(`${USER_API}/profile/${userName}`, {
        method: "GET"
    }).then(response => response.json())
}



const updateProfile = (currentUser)=>{
    return fetch(`${USER_API}/profile`, {
        method: "PUT",
        body: JSON.stringify(currentUser),
        credentials: "include",
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

const login = (credentials) => {
    return fetch(`${USER_API}/login`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}

const logout = () => {
    return fetch(`${USER_API}/logout`, {
        method: "POST",
        credentials: "include"
    }).then(response => response.json())
}

const signup = (credentials) => {
    return fetch(`${USER_API}/signup`, {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(credentials),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())
}


export default {
    signup, login, logout, profile, updateProfile, otherProfile
}