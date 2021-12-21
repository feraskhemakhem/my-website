import './App.css';
// import the different pages, based on https://www.youtube.com/watch?v=xMNhDf5-hvk
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Resume from './Pages/Resume';
import {Route} from 'react-router-dom';
// import navbar
import NavBar from './NavBar/NavBar';
import FootBar from './FootBar/FootBar';

function App() {
  return (
  <div className="App">
    <NavBar />
    <Route exact path="/my-website/" component={Home} />
    <Route exact path="/my-website/projects" component={Projects} />
    <Route exact path="/my-website/resume" component={Resume} />
    <FootBar />
  </div>
  );
}

export default App;
