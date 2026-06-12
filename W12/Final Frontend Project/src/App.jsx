
import './App.css'

import MovieCard from './components/MovieCard'
function App() {
 
  return (
      //Component Composition
      <>
    <MovieCard
    title="Inception"
    genre="Scifi"
    rating={4.8}
    duration="2h 28m"
    poster="https://picsum.photos/300/300?1"/>

     <MovieCard
    title="Toxic"
    genre="Action"
    rating={9.8}
    duration="2h 28m"
    poster="https://picsum.photos/300/300?2"/>
    <MovieCard
    title="RCB"
    genre="Action"
    rating={9.8}
    duration="2h 28m"
    poster="https://picsum.photos/300/300?3"/>
      </> 

  );
}

export default App