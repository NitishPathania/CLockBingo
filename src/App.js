import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  BrowserRouter,
} from "react-router-dom";
import AllPage from "../src/BingoWatch/Component/AllPages/AllPage"
import Watch from "../src/BingoWatch/Component/WatchFolder/Watch"
import Game from "../src/TicTacToe/Game/Game"
import Bingo from "../src/BingoWatch/Component/BingoFolder/Bingo"
import MainPage from "../src/AmazonClone/MainPage"
import RoutingSecurity from "../src/AmazonClone/Components/Security/RoutingSecurity"
import CartData from './AmazonClone/Components/ModalCart/CartData';
import Sign from './AmazonClone/Components/SignPage/Sign';
import Login from "../src/AmazonClone/Components/Login/Login"
import SecNextCardd from "../src/AmazonClone/Components/Sellers/SecNextCard/SecNextCardd"
import ParticularCard from "../src/AmazonClone/Components/Sellers/Shoes/PartiCularCard/ParticularCard"
import Gifted from "../src/AmazonClone/Components/Gifted/Gifted"
import Wishted from "../src/AmazonClone/Components/Wishted/Wishted"
import Movers from "../src/AmazonClone/Components/Movers/Movers"
import Realeases from "../src/AmazonClone/Components/Releases/ReleasesPage/Realeases"
import Sellers from './AmazonClone/Components/Sellers/Sellers';
import NavbarBestSeller from "../src/AmazonClone/Components/BestSellers/NavbarBestSeller"
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
           <Route
            path="/tictactoe"
            element={<Game />}
          ></Route>
           {/* <Route exact path="/bestsellernavbar" 
        element={< RoutingSecurity Components={NavbarBestSeller} />}> */}
             <Route exact path="/bestsellernavbar" 
        element={< NavbarBestSeller />}> 
            <Route index path="sellers" element={<Sellers />} />
            <Route path="releases" element={<Realeases/>} />
            <Route path="movers" element={<Movers />} />
            <Route path="wishted" element={<Wishted />} />
            <Route path="gifted" element={<Gifted />} />
            <Route path="particularcard/:id" element={<ParticularCard/>} />
            <Route path="secnextcardd/:id" element={<SecNextCardd/>} />
           
          </Route>
          
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/cartdata" element={<CartData/>} />
  {/* <Route path="/mainpage" element={< RoutingSecurity Components={MainPage} />} /> */}
   <Route path="/mainpage" element={< MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
