
import './App.css';

import Bike from './bike.png';
import Wedding from './wedding.png';
import Swimmer from './swimmer.png';
export default function Footer(){
    return(
    <div>
        <img src = {Swimmer} className="swim" alt="Swimmer" />
        <img src = {Wedding} className="marriage" alt="Wedding" />
    <img src = {Bike} className="bicycle" alt="Bike" />

 
    </div>
    )
}