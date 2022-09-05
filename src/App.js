import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'
import ProExperienceTimeline from './components/pages/ProExperienceTimeline'
import Resume from './components/pages/Resume'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/professional-experience' exact component={ProExperienceTimeline}/>
        <Route path='/resume' exact component={Resume}/>
      </Switch>
    </Router>
    </>
  );
}

export default App;
