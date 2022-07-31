import React, { useState } from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {

    // const [term, setTerm] = useState("");
    // const dispatch = useDispatch();
    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     console.log(term)
    //     useDispatch(fetchAsyncMovies(term));
        
    // };

    // const [searchTerm, setSearchTerm] = useState('');
    // const [{state, loading, error}, fetchMovies] =  useHomeFetch(searchTerm);


    // const SEARCH_API = "https://api.themoviedb.org/3/search/movie?api_key=b0d9dbccf7edafe8eef07c2693cd100b&language=ko-KR&page=1&query="
    // const handleOnSubmit = (e) => {
    //     e.preventDefault();

    //     // fetch(SEARCH_API+searchTerm)
    //     //     .then((res) => res.json())
    //     //     .then((data) => {
    //     //         setMovies(data.results);
    //     //     })
    // };

    // const handleOnChange = (e) => {
    //     setSearchTerm(e.target.value);
    // }
    // const searchMovies = (search) => {
    //     const endpoint = search ? "https://api.themoviedb.org/3/search/movie?api_key=b0d9dbccf7edafe8eef07c2693cd100b&language=ko-KR&page=1&query=" + search  : "https://api.themoviedb.org/3/search/popular?api_key=b0d9dbccf7edafe8eef07c2693cd100b&language=ko-KR&page=1&query=";
    //     setSearchTerm(search);
    //     // fetchMovies(endpoint);
    // }

    return (
        <div className="header">
            <div className="headerLeft">
                <Link to="/"><img className="header__icon" src="http://davidpiao.dothome.co.kr/web/logo.jpg" /></Link>
                <Link to="/movies/popular" style={{textDecoration: "none"}}><span>인기 신작 영화</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration: "none"}}><span>인기 영화 랭킹</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration: "none"}}><span>예정작</span></Link>
                <Link to="/movies/watchlist" style={{textDecoration: "none"}}><span>내 워치리스트</span></Link>
            </div>
            <div className="headerRight">
                <Link to="/movies/search" style={{textDecoration: "none"}}><span>검색</span></Link>
                <Link to="/movies/login" style={{textDecoration: "none"}}><span>로그인</span></Link>
            </div>
        </div>
    )
}

export default Header