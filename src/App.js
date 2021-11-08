import { Route, Routes } from "react-router-dom";
import OdjelList from "./OdjelList";
import Nesto from "./nesto";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<OdjelList />} exact />
        <Route path="/nesto" element={<Nesto />} />
      </Routes>
    </div>
  );
}

export default App;
