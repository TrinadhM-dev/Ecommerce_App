import React from "react";
import './App.css';
import LandingPage from "./stores/pages/LandingPages";
import {Routes,Route} from "react-router-dom";
import Watches from "./stores/components/Watches";
import MobilePage from "./stores/pages/MobilePage";
  import AcPage from "./stores/pages/AcPage";
import ComputerPage from "./stores/pages/ComputerPage";
import WatchPage from "./stores/pages/WatchPage";
import Fridges from "./stores/pages/Fridges";
import FurniturePage from "./stores/pages/FurniturePage";
import BookPages from "./stores/pages/BookPages";
import MenPages from "./stores/pages/MenPages";
import Kitchen from "./stores/pages/KitchenPage";
import WomenPages from "./stores/pages/WomenPages";

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
      <Route path="/kitchens" element={<Kitchen />}></Route>
     </Routes>
   
  </div>)
}

export default App;