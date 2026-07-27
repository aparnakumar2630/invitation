import { BrowserRouter, Routes, Route } from "react-router-dom";

import TempleEntry from "./components/TempleEntry/TempleEntry";
import WeddingCountdown from "./components/Countdown/WeddingCountdown";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        Temple opening page
        <Route
          path="/"
          element={<TempleEntry />}
        />

      </Routes>
    </BrowserRouter>
    // <WeddingCountdown/>
  );
}

export default App;