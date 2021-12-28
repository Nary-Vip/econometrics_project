import Navbar from './components/Navbar';
import Restaurant from './components/Restaurant';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Result from './components/Result';
import Home from './components/Home';
import LoanPredictor from './components/LoanPredictor';

function App() {
  return (
    <div className="max-w-h-screen App">
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="" element={<Home/>}/>
        <Route exact path="/restaurent" element={<Restaurant/>}/>
        <Route exact path="/loan" element={<LoanPredictor/>}/>
        <Route exact path="/result" element={<Result/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
