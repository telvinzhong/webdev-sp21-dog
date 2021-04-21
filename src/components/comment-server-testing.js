import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import commentService from '../services/comment-service'

const CommentServerTesting = () => {
    const [comment, setComment] = useState();
    const commentObj1 = {"userName" : "jimmy", "comment" : "cute!" }
    const dogId = '1'
    const commentId = "608025dc63d81fa0b20b9015"
    const newComment = {'comment':'ugly doggie!'}
    const userName = 'jimmy'
    useEffect(() => {
        // commentService.createComment( dogId, commentObj1)
        //     .then((comment)=>{
        //         console.log(comment)
        //         setComment(comment);
        //     })
        // commentService.deleteComment(commentId)
        //     .then((comment)=>{
        //         console.log(comment)
        //     })
        // commentService.updateComment(commentId, newComment)
        //     .then((comment)=>{
        //         console.loog(comment)
        //     })
        // commentService.findCommentsByDogId(dogId)
        //     .then((comments)=>{
        //         console.log(comments)
        //     })
        //  commentService.findCommentsById(commentId)
        //     .then((comments)=>{
        //         console.log(comments)
        //     })
    }, [])
    return(
        <div>
            {/* <h1>Testing</h1>
            {JSON.stringify(comment)} */}
        </div>
    );
}

export default CommentServerTesting;