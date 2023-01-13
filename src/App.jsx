import "./App.css";
import Sidebar from "./components/sidebar/sidebar";
import { Route, Routes } from "react-router-dom";
import Cats from "./components/cats/cats";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<Sidebar/>}>
          <Route path="*" element={<Cats />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
