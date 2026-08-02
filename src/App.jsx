import { BrowserRouter, Routes, Route } from "react-router-dom";

import TempleEntry from "./components/TempleEntry/TempleEntry";
import WeddingCountdown from "./components/Countdown/WeddingCountdown";
import PurpleEntry from "./components/PurpleEntry/PurpleEntry";
import CurtainEntry from "./components/CurtainEntry/CurtainEntry";

function App() {
  return (
    // <BrowserRouter>
    //   <Routes>

    //     Temple opening page
    //     <Route
    //       path="/"
    //       element={<TempleEntry />}
    //     />

    //   </Routes>
    // </BrowserRouter>
    // <PurpleEntry/>
    // <WeddingCountdown/>
    <CurtainEntry/>
  );
}

export default App;