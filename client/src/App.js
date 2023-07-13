import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import LandingPage from './components/landingPage/LandingPage';
import Home from './components/home/Home';
import Detail from './components/detail/Detail';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/home" component={Home} />
        <Route exact path="/videogame/:id" component={Detail} />
      </Switch>
    </div>
    </BrowserRouter>
  );
};

export default App;
