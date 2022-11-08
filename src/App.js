import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";
import Quotation from "./components/Quotation/Quotation";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="*" element=
          {
            <div>
              <p>Error! Pàgina no trobada!</p>
              <button>
                <Link to="/">Tornar a inici</Link>
              </button>
            </div>
          }
        />
        <Route path="/quotation" element={<Quotation />} />
        <Route path="/" element={<Welcome />} />
      </Routes>
    </Router>
  );
}

export default App;
