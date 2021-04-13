const USERS_URL = "http://localhost:4001/api";

const signUp = (user) =>
    fetch(`${USERS_URL}/signup/`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const signIn = (name,password) =>
    fetch(`http://localhost:4001/api/users/${name}/${password}`)
        .then(response => response.json())

//might not use
const findAllUsers = () =>
    fetch("http://localhost:4001/api/users")
        .then(response => response.json())

export default {
    signUp, signIn, findAllUsers
}