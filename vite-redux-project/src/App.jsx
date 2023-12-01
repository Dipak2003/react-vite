import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import { Medium, Hard, Reference } from "./components/Rough";
import Home from "./components/Home";
import Simple from "./components/simple/Simple";
const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
 
        <Route path="prlv">
          {/* Simple Route */}
          <Route path="simple" element={<Simple />}></Route>

          {/* Medium Route */}
          <Route path="medium" element={<Medium />}></Route>

          {/* hard Route */}
          <Route path="hard" element={<Hard />}></Route>

          {/* reference Route */}
          <Route path="reference" element={<Reference />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
