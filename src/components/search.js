// import React, {useState, useEffect} from 'react'
// import movieService from '../services/movies-service'
// import {Link, useParams, useHistory} from "react-router-dom";
//
// const Search = () => {
//     const {title} = useParams()
//     const [searchTitle, setSearchTitle] = useState("")
//     const [results, setResults] = useState({Search:[]})
//     const history = useHistory()
//     useEffect(() => {
//         setSearchTitle(title)
//         if(title) {
//             movieService.findMovieByTitle(title)
//                 .then(results => setResults(results))
//         }
//     }, [title])
//     return(
//         <div>
//             <h1>Search</h1>
//             <input
//                 onChange={(event) => {
//                     setSearchTitle(event.target.value)
//                 }}
//                 className="form-control"
//                 value={searchTitle}/>
//             <button
//                 onClick={() => {history.push(`/search/${searchTitle}`)}}
//                 className="btn btn-primary btn-block">
//                 Search
//             </button>
//             <ul className="list-group">
//                 {
//                     results.Search.map(movie =>
//                         <li className="list-group-item" key={movie.imdbID}>
//                             <Link to={`/details/${movie.imdbID}`}>
//                             {movie.Title}
//                             </Link>
//                         </li>
//                     )
//                 }
//             </ul>
//         </div>
//     )
// }
//
// export default Search
import React, {useState, useEffect} from 'react'
// import movieService from '../services/movies-service'
import dogService from '../services/dog-service';
import {Link, useParams, useHistory} from "react-router-dom";
import { Image } from 'react-bootstrap'
const Search = () => {
    const {title} = useParams()
    const [searchName, setSearchName] = useState("")
    const [results, setResults] = useState([])
    const [img, setImg] = useState([])
    const history = useHistory()
    // console.log(history)
    useEffect(() => {
        setSearchName(title)
        if(title) {
            dogService.findDogsByName(title)
                .then(results => {
                    // console.log(results)
                    // setResults(results)
                    // const dogs = {}
                    const dogs = [];
                    results.map(dog => {
                        // dogService.findImgById(dog.reference_image_id)
                        dogService.findImgById(dog.reference_image_id)
                            .then(image => {
                                dog['image'] = image
                                console.log(dog);
                                setResults([...results, dog])
                            })
                    })
                    // setImg(arr)
                })
            // console.log(setResults(results))
        }
    }, [title])
    // useEffect(() => {
    //     setSearchName(searchName)
    //     if(searchName) {
    //         dogService.findDogsByName(searchName)
    //             .then(results => setResults(results))
    //     }
    // }, [searchName])
    // console.log("name is:", title)
    return(
        <div>
            <p class="h1 text-center">Search</p>
            <form className="d-flex justify-content-center">
                <input onChange={(event) => {
                    setSearchName(event.target.value)
                    // console.log(event.target.value)
                    // console.log('search name is:',searchName)
                }} 
                className="form-control me-2 w-50" placeholder="Search" aria-label="Search"
                value={searchName}/>
                <button onClick={() => {history.push(`/search/${searchName}`)}} className="btn btn-outline-primary">Search</button>
            </form>
            {/* <input
                onChange={(event) => {
                    setSearchName(event.target.value)
                    // console.log(event.target.value)
                    // console.log('search name is:',searchName)
                }}
                className="form-control"
                value={searchName}/>
            <button
                onClick={() => {history.push(`/search/${searchName}`)}}
                className="btn btn-primary btn-block">
                Search
            </button> */}
            {/* <ul className="list-group"> */}
            <div className="row pt-4 pl-4 ml-5 ml-md-0">
                {
                    // JSON.stringify(Search)
                    
                    results.map(dog =>
                        // <li className="list-group-item" key={dog.id}>
                        <div>
                            {/* <Link to={`/details/${dog.id}`}>
                                {dog.name}
                            </Link> */}
                            {dog.image &&
                                <div className="col-bg-12 pl-2 pt-2">
                                    <div className="card text-center" style={{width: '18rem'}}>
                                    <Image className="card-img-top img" src={dog.image.url? dog.image.url:"https://www.barkva.org/wp-content/uploads/2021/01/Photo-Not-Available-dog.gif"}/>
                                        <div class="card-body">
                                            <h5 className="card-title">
                                                <Link style={{color: 'blue'}} to={`/details/${dog.id}`}>
                                                    {dog.name}
                                                </Link>
                                            </h5>
                                            {/* <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                            {/* <a href="#" class="btn btn-primary">Click</a> */}
                                        </div>
                                    </div>
                                </div>
                            }
                         </div>
                        // </li>
                    )
                }
            </div>
            {/* </ul> */}
        </div>
    )
}
export default Search