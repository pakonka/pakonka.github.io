import { Route, Routes } from "react-router-dom";
import { DefaultLayoutMovie } from "./layouts/DefaultLayoutMovie";
import { HomeMoviePage } from "./pages/HomeMoviePage";
import { PopularMoviePage } from "./pages/PopularMoviePage";
import { Scrollbars } from "react-custom-scrollbars";

import "./App.css";
const App = () => {
  return (
    <div className="bg-[#1e1e2a]">
      <Scrollbars
        renderThumbHorizontal={(props) => (
          <div {...props} style={{ backgroundColor: "#ffb43a" }} />
        )}
        renderThumbVertical={(props) => (
          <div {...props} style={{ backgroundColor: "#ffb43a" }} />
        )}
        style={{ width: 1537, height: 800 }}
        className="bg-[#1e1e2a] z-50"
      >
        <Routes>
          <Route path="" element={<DefaultLayoutMovie />}>
            <Route path="" element={<HomeMoviePage />} />
            <Route path="popular" element={<PopularMoviePage />} />
          </Route>
        </Routes>
      </Scrollbars>
    </div>
  );
};

export default App;
