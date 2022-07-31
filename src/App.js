import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Header from './components/header/Header';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie from './pages/movieDetail/movie';
import Search from './pages/search/search';
import Login from './pages/login/login';
import Register from './pages/login/register';

function App() {
  return (
    <div className="App">
        <Router basename='/web'>
          <Header />
            <Routes>
                <Route index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="movies/:type" element={<MovieList />}></Route>
                <Route path="movies/search" element={<Search />}></Route>
                <Route path="movies/login" element={<Login />}></Route>
                <Route path="movies/register" element={<Register />}></Route>
                <Route path="/*" element={<h1>Error Page</h1>}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
