import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import HomeSection from './pages';
import SignIn from './pages/SignIn';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<HomeSection />} exact='true' />
        <Route path='/signin' element={<SignIn />} exact='true' />

      </Switch>
    </Router>
  );
}

export default App;
