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
            {/* {dog[0] &&
                <img src={dog[0].url}/>
            } */}
            <h2>Bread</h2>
            <p>
                {/* {movie.Plot} */}
            </p>
            <h2>Cast</h2>
            <ul className="list-group">
                {/* {
                    movie.Actors && movie.Actors.split(",").map(actor =>
                    <li className="list-group-item">
                        {actor}
                    </li>)
                } */}
            </ul>
            {/* {JSON.stringify(dog)} */}
        </div>
    )
}

export default Details