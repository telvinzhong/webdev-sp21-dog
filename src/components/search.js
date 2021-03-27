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

const Search = () => {
    const {title} = useParams()
    const [searchName, setSearchName] = useState("")
    const [results, setResults] = useState([])
    const history = useHistory()
    // console.log(history)
    useEffect(() => {
        setSearchName(title)
        if(title) {
            dogService.findDogsByName(title)
                .then(results => setResults(results))
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
            <h1>Search</h1>
            <input
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
            </button>
            <ul className="list-group">
                {
                    // JSON.stringify(results)
                    // JSON.stringify(Search)
                    results.map(dog =>
                        <li className="list-group-item" key={dog.id}>
                            <Link to={`/details/${dog.id}`}>
                                {dog.name}
                                {dog.id}
                            </Link>
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
export default Search