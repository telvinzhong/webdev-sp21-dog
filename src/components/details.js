import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import dogService from '../services/dog-service'

const Details = () => {
    const [dog, setDog] = useState([])
    const {dogId} = useParams()
    useEffect(() => {
        dogService.findDogById(dogId)
            .then(dog => setDog(dog))
    },[dogId])
    return(
        <div>
            {dog[0] &&
                <div>
                    <img src={dog[0].url} width="400" height="400"/>
                    <h2>
                        Breed Data
                    </h2>
                    <table id="breed_data_table">
                        <tr>
                            <td>weight</td>
                            <td>{dog[0]['breeds'][0]['weight']['imperial']}</td>
                        </tr>
                        <tr>
                            <td>height:</td>
                            <td>{dog[0]['breeds'][0]['height']['imperial']}</td>
                        </tr>
                        <tr>
                            <td>id:</td>
                            <td>{dog[0]['breeds'][0]['id']}</td>
                        </tr>
                        <tr>
                            <td>name:</td>
                            <td>{dog[0]['breeds'][0]['name']}</td>
                        </tr>
                        <tr>
                            <td>coutnry_code:</td>
                            <td>{dog[0]['breeds'][0]['country_code']}</td>
                        </tr>
                        <tr>
                            <td>bred_for:</td>
                            <td>{dog[0]['breeds'][0]['bred_for']}</td>
                        </tr>
                        <tr>
                            <td>breed_group:</td>
                            <td>{dog[0]['breeds'][0]['breed_group']}</td>
                        </tr>
                        <tr>
                            <td>life_span:</td>
                            <td>{dog[0]['breeds'][0]['life_span']}</td>
                        </tr>
                        <tr>
                            <td>temperament:</td>
                            <td>{dog[0]['breeds'][0]['temperament']}</td>
                        </tr>
                        <tr>
                            <td>origin:</td>
                            <td>{dog[0]['breeds'][0]['origin']}</td>
                        </tr>
                        <tr>
                            <td>reference_image_id:</td>
                            <td>{dog[0]['breeds'][0]['reference_image_id']}</td>
                        </tr>
                    </table>
                </div>
            }
        </div>
    )
}

export default Details