import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import dogService from '../services/dog-service'
import NavBar from "./NavBar";

const Details = () => {
    const [dog, setDog] = useState([])
    const {dogId} = useParams()
    useEffect(() => {
        dogService.findDogById(dogId)
            .then(dog => setDog(dog))
    },[dogId])
    return(
        // <div>
            
        //     {dog[0] &&
        //         <div>
        //             <img src={dog[0].url} width="400" height="400"/>
        //             <h2>
        //                 Breed Data
        //             </h2>
        //             <table id="breed_data_table">
        //                 <tr>
        //                     <td>weight</td>
        //                     <td>{dog[0]['breeds'][0]['weight']['imperial']}</td>
        //                 </tr>
        //                 <tr>
        //                     <td>height:</td>
        //                     <td>{dog[0]['breeds'][0]['height']['imperial']}</td>
        //                 </tr>
        //                 <tr>
        //                     <td>id:</td>
        //                     <td>{dog[0]['breeds'][0]['id']}</td>
        //                 </tr>
        //                 <tr>
        //                     <td>name:</td>
        //                     <td>{dog[0]['breeds'][0]['name']}</td>
        //                 </tr>
        //                 <tr>
        //                     <td>coutnry_code:</td>
        //                     <td>{dog[0]['breeds'][0]['country_code']}</td>
        //                 </tr>
        //                 <tr>
        //                     <td>bred_for:</td>
        //                     <td>{dog[0]['breeds'][0]['bred_for']}</td>
        //                 </tr>
        //                 <tr>
        //                     <td>breed_group:</td>
        //                     <td>{dog[0]['breeds'][0]['breed_group']}</td>
        //                 </tr>
        //                 <tr>
        //                     <td>life_span:</td>
        //                     <td>{dog[0]['breeds'][0]['life_span']}</td>
        //                 </tr>
        //                 <tr>
        //                     <td>temperament:</td>
        //                     <td>{dog[0]['breeds'][0]['temperament']}</td>
        //                 </tr>
        //                 <tr>
        //                     <td>origin:</td>
        //                     <td>{dog[0]['breeds'][0]['origin']}</td>
        //                 </tr>
        //                 <tr>
        //                     <td>reference_image_id:</td>
        //                     <td>{dog[0]['breeds'][0]['reference_image_id']}</td>
        //                 </tr>
        //             </table>
        //         </div>
        //     }
        // </div>
        <div>
            <NavBar/>
            <div className="card mt-5" style={{backgroundImage: `url("https://static9.depositphotos.com/1022647/1081/v/600/depositphotos_10813712-stock-illustration-background-animal-footprints.jpg")` }}>
                <div className="row g-0">
                    <div className="col-md-4 mt-5 mr-4 mr-sm-4 mr-md-0 pl-5">
                        {console.log(dog[0])}
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
            <div className="table-responsive">
                <table className="table table-striped text-nowrap">
                    <thead>
                    <tr>
                        <th>Username</th>
                        <th>Comment</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>Bob</td>
                        <td>Good dog.</td>

                    </tr>
                    <tr>
                        <td>Matt</td>
                        <td>I like it!</td>
                    </tr>
                    <tr>
                        <td>Lina</td>
                        <td>Tell me more.</td>
                    </tr>

                    </tbody>
                </table>
            </div>
            <form>
                <div className="form-group">
                    <label htmlFor="comment">Leave your comment</label>
                    <input type="text" className="form-control" id = "comment" placeholder="Comment"/>
                    <button type="submit" className="btn btn-primary btn-group-justified">submit</button>
                </div>
            </form>
        </div>
    )
}

export default Details