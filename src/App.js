import './App.css';
import './components/navbar.css'
import Home from './components/home';
import Work from './components/work';
import Touch from './components/touch';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <>
      <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/work" element={<Work />} />
                <Route
                    path="/contact"
                    element={<Touch />}
                />
            </Routes>
        </Router>
    </>
  );
}

export default App;
