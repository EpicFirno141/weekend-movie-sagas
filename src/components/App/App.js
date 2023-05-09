import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import Header from '../Header/Header';
import { useSelector } from 'react-redux';
import Details from '../Details/Details';

function App() {
  const movie = useSelector(store => store.movie);

  return (
    <div className="App">
      <Header />
      <Router>        
        <Route exact path="/" >
          <MovieList />
        </Route>
        
        {/* Details page */}
        <Route exact path='/details/:id'>
          <Details />
        </Route>
        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
