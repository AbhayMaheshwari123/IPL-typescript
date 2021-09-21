import { createUseStyles } from "react-jss";
interface color{
    [key:string]:any
}

const data:color={
    'chennai-super-kings':{background: 'linear-gradient( 136deg,#fdb913,#f85c00)'},
    "delhi-capitals":{background: 'linear-gradient(136deg ,#004c93,#0358a7)'},
    "mumbai-indians":{background: 'linear-gradient( 136deg,#005da0,#003a63)'},
    "rajasthan-royals":{background: 'linear-gradient( 136deg,#2d4d9d,#172e5e)'},
    "kings-xi-punjab":{background: 'linear-gradient(136deg,#aa4545,#740f0b)'},
    "royal-challengers-bangalore":{background: 'linear-gradient(136deg,#000,#464646)'},
    "sunrisers-hyderabad":{background: 'linear-gradient(136deg,#fb643e,#b81c25)'},
    "kolkata-knight-riders":{background: 'linear-gradient(136deg,#70458f,#3d2057)'},
}

const TeamCardcolor =createUseStyles(data);
export default TeamCardcolor