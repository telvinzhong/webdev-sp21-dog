const findDogsByName = (name) => {
    return fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}&api_key=d78f75ba-028d-49c7-943d-8560c0a9ed6e`)
        .then(response => response.json())
}

const findAllDogs = () => {
    return fetch(`https://api.thedogapi.com/v1/breeds?api_key=d78f75ba-028d-49c7-943d-8560c0a9ed6e`)
        .then(response => response.json())
}


//const findDogByDogID = (dogID) => {
//    return fetch()
//        .then(response => response.json())
//}

export default {
    findDogsByTitle, findDogByDogID
}