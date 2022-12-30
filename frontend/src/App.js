// import logo from './logo.svg';
// import './App.css';
import LoginComponent from "./component/login";
import DaftarComponent from "./component/daftar";
import DashboardComponent from "./component/dashboard";
import DataUserComponent from "./component/dataUser";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthContextProvider } from "./component/shared/AuthContext";

function App() {
  return (
    <div className="App">
      {/* <AuthContextProvider> */}
      <Router>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/daftar" element={<DaftarComponent />} />
          <Route path="/dataUser" element={<DataUserComponent />} />
          <Route path="/dashboard" element={<DashboardComponent />} />
        </Routes>
      </Router>
      {/* <Router>
          <Routes></Routes>
        </Router> */}
      {/* </AuthContextProvider> */}
    </div>
  );
}

export default App;
