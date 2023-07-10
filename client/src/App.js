import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import LandingPage from './components/landingPage/LandingPage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </div>
    </BrowserRouter>
  );
};

export default App;
