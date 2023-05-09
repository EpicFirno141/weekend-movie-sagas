import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList'
import AppBarMenu from '../AppBar/AppBar';

function App() {
  return (
    <div className="App">
      <AppBarMenu />
      <Router>        
        <Route exact path="/" >
          <MovieList />
        </Route>
        
        {/* Details page */}

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
