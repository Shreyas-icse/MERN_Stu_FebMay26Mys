
import './App.css'

import MovieCard from './components/MovieCard'
import CitySelector from './components/CitySelector';
import MovieSearch from './components/MovieSearch';
import BookButton from './components/BookButton';
import GenreFilter from './components/GenreFilter';
import LoginForm from './components/loginForm';
import SearchShortcut from './components/SearchShortcut';
import AuthStatus from './components/AuthStatus';
import MovieLoader from './components/MovieLoader';
import MovieResults from './components/MovieResult';
function App() {
 
  return (
      //Component Composition
    //   <>
    // <MovieCard
    // title="Inception"
    // genre="Scifi"
    // rating={4.8}
    // duration="2h 28m"
    // poster="https://picsum.photos/300/300?1"/>

    //  <MovieCard
    // title="Toxic"
    // genre="Action"
    // rating={9.8}
    // duration="2h 28m"
    // poster="https://picsum.photos/300/300?2"/>
    // <MovieCard
    // title="RCB"
    // genre="Action"
    // rating={9.8}
    // duration="2h 28m"
    // poster="https://picsum.photos/300/300?3"/>
    <>
    {/* <CitySelector/> */}
    {/* Controlled component */}
    {/* <MovieSearch/>
    <BookButton/>
    <GenreFilter/>
    <LoginForm/>
    <SearchShortcut/> */}
    <AuthStatus/>
    <MovieLoader/>
    <MovieResults/>
   </> 

  );
}

export default App