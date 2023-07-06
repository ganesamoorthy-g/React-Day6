import {  Routes, Route } from "react-router-dom";
import NavBar from "./Component/NavBar";
import FullStackDevelopment from "./Component/FullStackDevelopment";
import DataScience from "./Component/DataScience";
import CyberSecurity from "./Component/CyberSecurity";
import Career from "./Component/Career";
import Home from "./Component/Home";


function App() {
  return (
    <>
      <NavBar />
      <div id="wrapper">
        <Routes>
          <Route path="/ home" element={<Home />} />
          <Route path="/fsd" element={<FullStackDevelopment />} />
          <Route path="/data-science" element={<DataScience />} />
          <Route path="/cyber-security" element={<CyberSecurity />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </div>
      </>
  );
}

export default App;
