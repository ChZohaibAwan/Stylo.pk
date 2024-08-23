import "./style.css";

import Slider from "./components/Slider";
import Counter from "./components/Counter";
import { Bounce, ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";

import Home from "./components/Home";
import EidCollection from "./pages/EidCollection"
import Summer24 from "./pages/Summer24";
import Womenshoes from "./pages/Womenshoes";
import Womenapperal from "./pages/Womenapperal";
import Bags from "./pages/Bags";
import Kids from "./pages/Kids";
import Accessories from "./pages/Accessories";
import Fragrnces from "./pages/Fragrnces";
import Apicalling from "./components/Apicalling";
import 'bootstrap/dist/css/bootstrap.css';
import Productdes from "./pages/Productdes";




function App() {
  return (
    <>
      <MainNavbar />
    <Apicalling/>
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path="/EidCollection" element={<EidCollection />} />
        <Route path="/Summer24" element={<Summer24 />} />
        <Route path="/Womenshoes" element={<Womenshoes />} />
        <Route path="/Womenapperal" element={<Womenapperal />} />
        <Route path="/Bags" element={<Bags />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/Accessories" element={<Accessories />} />
        <Route path="/Fragrnces" element={<Fragrnces />} />
        <Route path="/Products/:id" element={<Productdes />} />
      
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
