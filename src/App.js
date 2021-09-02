import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/About';
import Hompage from './pages/Hompage';
import Skills from './pages/Skills';

function App() {
  return (
    <div className="w-full min-h-screen bg-blue-400">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Hompage pageName="Rayzor Starter Template" />
          </Route>
          <Route path="/about">
            <About pageName="About" />
          </Route>
          <Route path="/skills">
            <Skills pageName="Skills" />
          </Route>
          <Route path="*">
            <h1 className="text-center p-10">Page Not found bro</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
