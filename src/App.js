import React from 'react';
import Fire from './Fire';
import FetchDataFromFirebase from './Getdata';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  

  return (
  
      <BrowserRouter>
      <Routes>
        
          <Route index element={<Fire />} />
          <Route path="FetchDataFromFirebase" element={<FetchDataFromFirebase />} />
          
       
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
