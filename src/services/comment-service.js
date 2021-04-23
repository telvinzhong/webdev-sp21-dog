// const COMMENTS_URL = "http://localhost:4001/api";
const COMMENTS_URL = "https://dog-nodejs-server.herokuapp.com/api";

export const createComment = (dogId, commentObj) =>
    fetch(`${COMMENTS_URL}/dogs/${dogId}/comments`, {
        method: "POST",
        body: JSON.stringify(commentObj),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const deleteComment = (commentId) =>
    fetch(`${COMMENTS_URL}/comments/${commentId}`, {
        method: 'DELETE'
    })
        .then(response => response.json());

export const updateComment = (commentId, comment) =>
    fetch(`${COMMENTS_URL}/comments/${commentId}`, {
        method: "PUT",
        body: JSON.stringify(comment),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json());

export const findCommentsByUserName = (userName) =>
    fetch(`${COMMENTS_URL}/users/${userName}/comments`).then(response => response.json())

export const findCommentsByDogId = (dogId) =>
    fetch(`${COMMENTS_URL}/dogs/${dogId}/comments`).then(response => response.json())

export const findCommentsById = (commentId) =>
    fetch(`${COMMENTS_URL}/comments/${commentId}`).then(response => response.json())
        
export default {
    createComment, deleteComment, updateComment, findCommentsByUserName, findCommentsByDogId, findCommentsById
}