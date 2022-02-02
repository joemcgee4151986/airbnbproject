import Group from './group.png';
import './App.css';
import React from 'react'
import Fade from 'react-reveal/Zoom';





export default function Body() {
    return(
        <div>
            <Fade>
        <img src = {Group} className="photo-grid" alt="Group" />
        </Fade>
        </div>
    )
}