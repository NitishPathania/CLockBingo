import logo from './logo.svg';
import './App.css';
import Watch from './Component/WatchFolder/Watch';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import AllPage from './Component/AllPages/AllPage';
import Bingo from './Component/BingoFolder/Bingo';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<AllPage />}
          ></Route>
           <Route
            path="/watch"
            element={<Watch />}
          ></Route>
          <Route
            path="/bingo"
            element={<Bingo />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
