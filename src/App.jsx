// 
// 
// 
// 

import React from "react";
import './App.css';
import WomenPages from "./stores/pages/WomenPages";
import TelevisionPage from "./stores/pages/TelevisionPage";
import KitchenPage from "./stores/pages/KitchenPage";
import LandingPage from "./stores/pages/LandingPages";
import {Routes,Route} from "react-router-dom";
import MobilePage from "./stores/pages/MobilePage";
import AcPage from "./stores/pages/AcPage";
import ComputerPage from "./stores/pages/ComputerPage";
import WatchPage from "./stores/pages/WatchPage";
import Fridges from "./stores/pages/Fridges";
import FurniturePage from "./stores/pages/FurniturePage";
import BookPages from "./stores/pages/BookPages";
import MenPages from "./stores/pages/MenPages";
import MusicSpeaker from "./stores/pages/MusicSpeaker";
import MobileSingle from "./singles/MobileSingle";
import ComputerSingle from "./singles/ComputerSingle"
import UserCart from "./stores/UserCart";

const App= ()=>{

  return (<div>
     <Routes>
      <Route path='/' element={ <LandingPage />}/>
      <Route path='/mobiles' element={ <MobilePage />}/>
      <Route path='/acs' element={ <AcPage />}/>
      <Route path='/computers' element={<ComputerPage/>}></Route>
      <Route path='/watches' element={<WatchPage/>}></Route>
      <Route path="/fridges" element={<Fridges />}></Route>
      <Route path="/furnitures" element={<FurniturePage />}></Route>
      <Route path="/books" element={<BookPages/>}></Route>
      <Route path="/men-fashion" element={<MenPages/>}></Route>
      <Route path="/women-wears" element={<WomenPages />}></Route>
      <Route path="/kitchens" element={<KitchenPage />}></Route>
      <Route path="/telvisions" element={<TelevisionPage />}></Route>
      <Route path="/musicspeakers" element={<MusicSpeaker />}></Route>
      <Route path="/cart" element={<UserCart />}></Route>

    {/* Dynamic Routing */}
    <Route path='/mobiles/:id' element={<MobileSingle />} ></Route>
        {/*Routing For Computer Single Page */}
        <Route path='/computers/:id' element={<ComputerSingle />} ></Route>
    
    </Routes>
   
  </div>)
}

export default App;