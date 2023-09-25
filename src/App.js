import { Route, Routes} from "react-router-dom";

import InputsPage from "./pages/inputsPage";

function App() {
  return (
    <Routes>
      <Route exact path='/test' element={<InputsPage />} />
    </Routes>
  );
}

export default App;
