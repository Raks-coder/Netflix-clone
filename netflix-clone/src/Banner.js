import React from 'react'
import axios from './axios';
import requests from './requests';
import './Banner.css';

function Banner() {
    const [movie, setMovie] = React.useState([]);

    React.useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]);
            return request;
        }
        fetchData();
    }, [])

    console.log(movie);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str;
    }

    return (
       <header className="banner"
       style={{
           backgroundSize: 'cover',
              backgroundImage: `url(    
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition: 'center center'
         }}>
        <div className="banner__contents">
           {/* title */}
           <h1 className="banner__title">{movie?.name || movie?.title || movie?.original_name}</h1>
           {/* Div - 2 buttons */}
           <div className="banner__buttons">
                {/* button 1 */}
                <button className="banner__button">Play</button>
                {/* button 2 */}
                <button className="banner__button">My List</button>
            </div>
            <div>
                {/* description */}
                <h1 className="banner__description">{truncate(movie?.overview,150)}</h1>
            </div>
            <div className="banner__fadeBottom"></div>
        </div>
           
       </header>
    )
}

export default Banner
