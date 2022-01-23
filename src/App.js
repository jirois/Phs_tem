import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from "./components/navbar";
import Sidebar from './components/sidebar';


function App() {
  return (
    <Router>
      <Sidebar />
      <Navbar />
    </Router>
  );
}

export default App;
