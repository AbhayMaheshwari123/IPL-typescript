import axios from 'axios'
import {useEffect,useState} from 'react'
import useStyles from '../Styling/PlayerCardsStyle'
import Bannercomp from './Banner'
import URL from '../Helper/URL'
import TeamCardcolor from '../Styling/TeamCardcolor'
interface proptyp{
match:{
    url:string
}
}

interface detailtyp{
    image:string 
    name:string
    stats:{
        matches:number
        runs:number 
        wickets:number
    }
}

function Team(props:proptyp) {
    const url=URL[props.match.url.slice(6)]
    const [teamdetail,setteamdetail]=useState<any>();
    const teamname=props.match.url.slice(6)
    const classes=useStyles();
    const colorclass=TeamCardcolor();
    useEffect(() => {
        async function fetchteamdata(){
            if(url){
                await axios.get(url).then((res)=>{
                    setteamdetail(res.data)
                }).catch(()=>{
                    setteamdetail("Error")
                })
                
            }else{
                setteamdetail("Invalid Path")

            }
            
                
        };
        fetchteamdata();
    }, [url])
    
    return (
        <>{teamdetail&& <>
                <Bannercomp teamName={teamname} />

            <div className={classes.container}>
                {teamdetail.players.map((detail:detailtyp)=>{
                    return (
                    <div className={classes.playercard}> 
                        <div className={`${classes.bg} ${colorclass[teamname]}`}>
                            <img className={classes.pic} src={detail.image} alt={detail.name} />
                        </div>
                        <div className={classes.detail}>
                            <div>
                                <h5 className={colorclass.playername}>{detail.name}</h5>
                            </div>
                            <h6 className={classes.iplyear}>IPL 2021</h6>
                            <div className={classes.stats}>
                                <div className={classes.match}>
                                    <h5>{detail.stats.matches}</h5>
                                    <h5>Matches</h5>
                                </div>
                                <div className={classes.run}>
                                <h5 >{detail.stats.runs}</h5>
                                    <h5>Runs</h5>
                                </div>
                                <div className={classes.wicket} >
                                    <h5 >{detail.stats.wickets}</h5>
                                    <h5>Wickets</h5>
                                </div>
                            </div>
                            <div><h4>View Profile</h4></div>
                        </div>
                    </div>)
                })}
            </div></>
        }</>
    )
}


export default Team