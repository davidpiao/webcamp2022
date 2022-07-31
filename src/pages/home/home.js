import React, { useEffect, useState } from "react"
import "./home.css"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import MovieList from "../../components/movieList/movieList";

const Home = () => {

    const [ popularMovies, setPopularMovies ] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=b0d9dbccf7edafe8eef07c2693cd100b&language=ko-KR")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])

    // 이건 다른거
    // const movietext = "now_playing";
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     const fetchMovies = async () => {
    //         const response = await movieapi
    //             .get('${movieText}?apiKey=b0d9dbccf7edafe8eef07c2693cd100b&language=ko-KR')
    //             .catch((err) => {
    //                 console.log("error: ", err);
    //             });
    //             dispatchEvent(addMovies(response.data));    
    //         };
    //     fetchMovies();
    // }, []);

    return (
        <>
            <div className="poster">
                {/* carousel */}
                <Carousel
                    showThumbs={false}
                    autoPlay={true}
                    transitionTime={3}
                    infiniteLoop={true}
                    showStatus={false}
                >
                    {
                        popularMovies.map(movie => (
                            //carousel에 들어가는 props
                            <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                                <div className="posterImage">
                                    <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                                </div>
                                <div className="posterImage__overlay">
                                    <div className="posterImage__title">{movie ? movie.title: ""}</div>
                                    <div className="posterImage__runtime">
                                        {movie ? movie.release_date : ""}
                                        <span className="posterImage__rating">
                                            {movie ? movie.vote_average :""}
                                            <i className="fas fa-star" />{" "}
                                        </span>
                                    </div>
                                    <div className="posterImage__description">{movie ? movie.overview : ""}</div>
                                </div>
                            </Link>
                        ))
                    }
                </Carousel>
                <MovieList />
            </div>
        </>
    )
}

export default Home