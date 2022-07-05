import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import ProExperienceTimeline from './components/pages/ProExperienceTimeline'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/professional-experience' exact component={ProExperienceTimeline}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
