import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import dogService from '../services/dog-service'
import commentService from '../services/comment-service';
import NavBar from "./NavBar";
import CommentRowDetail from "./commentRow-detail";
import userService from "../services/user-service";
import {Input} from "@chakra-ui/react";

const Details = () => {
    const [dog, setDog] = useState([])
    const {dogId} = useParams()
    const [comments, setComments] = useState([]);
    const [currentUser, setCurrentUser] = useState({});
    const [newComment, setNewComment] = useState({"dogId": dogId})

    useEffect(() => {


        dogService.findDogById(dogId)
            .then(dog => setDog(dog))

        commentService.findCommentsByDogId(dogId)
            .then(comments =>
                setComments(comments))

        userService.profile()
            .then((currentUser) => {
                setCurrentUser(currentUser)
                console.log('inside function', currentUser)
                setNewComment({...newComment, userName: currentUser.userName})
            })





    },[dogId])


    console.log('in detail page', currentUser.userName)



    const createNewComment =()=>{

        commentService.createComment(dogId, newComment)
            .then(newComment => {
                setNewComment(newComment)
            })
    }



    return(
        <div>
            <NavBar/>
            <div className="card mt-5" style={{backgroundImage: `url("https://static9.depositphotos.com/1022647/1081/v/600/depositphotos_10813712-stock-illustration-background-animal-footprints.jpg")` }}>
                <div className="row g-0">
                    <div className="col-md-4 mt-5 mr-4 mr-sm-4 mr-md-0 pl-5">
                        {/*{console.log(dog[0])}*/}
                    {dog[0] &&
                        <img className="img float-right" src={dog[0].url}/>
                    }
                    </div>
                    <div className="col-md-8 pl-5">
                        <div className="card-body text-center">
                            <div>
                                {dog[0] &&
                                    <div>
                                        <h1 class="card-title h1">Breed Data</h1>
                                        <table className="ml-auto mr-auto" id="breed_data_table">
                                            <tr>
                                                <td className="h5">weight:</td>
                                                <td>{dog[0]['breeds'][0]['weight']['imperial']}</td>
                                            </tr>
                                            <tr>
                                                <td className="h5">height:</td>
                                                <td>{dog[0]['breeds'][0]['height']['imperial']}</td>
                                            </tr>
                                            <tr>
                                                <td className="h5">id:</td>
                                                <td>{dog[0]['breeds'][0]['id']}</td>
                                            </tr>
                                            <tr>
                                                <td className="h5">name:</td>
                                                <td>{dog[0]['breeds'][0]['name']}</td>
                                            </tr>
                                            <tr>
                                                <td className="h5">coutnry_code:</td>
                                                <td>{dog[0]['breeds'][0]['country_code']}</td>
                                            </tr>
                                            <tr>
                                                <td className="h5">bred_for:</td>
                                                <td>{dog[0]['breeds'][0]['bred_for']}</td>
                                            </tr>
                                            <tr>
                                                <td className="h5">breed_group:</td>
                                                <td>{dog[0]['breeds'][0]['breed_group']}</td>
                                            </tr>
                                            <tr>
                                                <td className="h5">life_span:</td>
                                                <td>{dog[0]['breeds'][0]['life_span']}</td>
                                            </tr>
                                            <tr>
                                                <td className="h5">temperament:</td>
                                                <td>{dog[0]['breeds'][0]['temperament']}</td>
                                            </tr>
                                            <tr>
                                                <td className="h5">origin:</td>
                                                <td>{dog[0]['breeds'][0]['origin']}</td>
                                            </tr>
                                            <tr>
                                                <td className="h5">reference_image_id:</td>
                                                <td>{dog[0]['breeds'][0]['reference_image_id']}</td>
                                            </tr>
                                        </table>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <br/>
            <div className="row">
                <div className="col-1">
                    Users
                </div>
                <div className="col-11">
                    Comments
                </div>
            </div>

            <div>
                <ul className="list-group">
                    {
                        comments.map(comment =>
                            <li key={comment._id} className="list-group-item">


                                <CommentRowDetail
                                    {...comment}/>


                            </li>
                        )
                    }
                </ul>
            </div>
            <br/>
            <form>
                <div className="form-group">
                    <label htmlFor="comment">Leave your comment</label>
                    <input type="text" className="form-control" id = "comment" placeholder="Comment"
                           onChange={(e) => {setNewComment({...newComment, comment: e.target.value})
                               console.log('newcooment', newComment)
                           }}
                           value={newComment.comment}/>
                    <br/>

                    <button onClick={() => createNewComment(dogId, newComment)}
                        type="submit" className="btn btn-primary">submit</button>
                </div>
            </form>
        </div>
    )
}

export default Details