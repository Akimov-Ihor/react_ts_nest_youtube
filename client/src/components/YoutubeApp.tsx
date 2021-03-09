import React from 'react';
import {Login} from "./Login/Login";


import './YoutubeApp.css';

export const YoutubeApp:React.FC =()=> {
  return (
    <div className="youtubeApp">
      <Login/>
    </div>
  );
}


