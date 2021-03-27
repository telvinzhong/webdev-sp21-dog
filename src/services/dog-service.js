// export const findMovieByTitle = (title) =>
//     fetch(`http://www.omdbapi.com/?s=${title}&apikey=4a249f8d`)
//         .then(response => response.json())
//
// export const findMovieById = (imdbID) =>
//     fetch(`http://www.omdbapi.com/?i=${imdbID}&apikey=4a249f8d`)
//         .then(response => response.json())
//
// export default {
//     findMovieByTitle,
//     findMovieById
// }
const findDogsByName = (name) => {
    return fetch(`https://api.thedogapi.com/v1/breeds/search?q=${name}&api_key=d78f75ba-028d-49c7-943d-8560c0a9ed6e`)
        .then(response => response.json())
}

const findAllDogs = () => {
    return fetch(`https://api.thedogapi.com/v1/breeds?api_key=d78f75ba-028d-49c7-943d-8560c0a9ed6e`)
        .then(response => response.json())
}


const findDogById = (dogId) => {
   return fetch(`https://api.thedogapi.com/v1/images/search?breed_id=${dogId}&api_key=d78f75ba-028d-49c7-943d-8560c0a9ed6e`)
       .then(response => response.json())
}

export default {
    findDogsByName, findAllDogs, findDogById
}