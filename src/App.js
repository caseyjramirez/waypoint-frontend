import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Welcome from './pages/Welcome'
import NotFound from "./pages/NotFound";
import LoginContent from "./components/welcomeComponents/loginSideBar";
import SignupContent from "./components/welcomeComponents/signupSideBar";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome />}>
            <Route path="/" element={<LoginContent />}></Route>
            <Route path="/signup/*" element={<SignupContent />}></Route>
          </Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
