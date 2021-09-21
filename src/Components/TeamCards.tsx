import axios from 'axios'
import { useEffect,useState,useCallback } from 'react'
import Logo from '../Helper/Logo';
import { useHistory } from 'react-router-dom'
import useStyles from '../Styling/TeamCardStyle';
import TeamCardcolor from '../Styling/TeamCardcolor';

function Cards() {
    const [teamData,setteamData]=useState<[{id:string
    teamName:string
    venue:string
    winningYears:[]
    }]>();
    const url='https://ipl-t20.herokuapp.com/teams';
    const history=useHistory();
    const classes=useStyles();
    const colorclass=TeamCardcolor();

    useEffect(() => {
        async function fetchdata(){
            await axios.get(url).then((response)=>{
                setteamData(response.data);
            }).catch(()=>{
                setteamData([{id:"",teamName:"",venue:"",winningYears:[]}])
            })
            };
            fetchdata();
    }, [url])
    
    const clickHandler=useCallback((id)=>{    
         history.push(`team/${id}`);   
    },[history])

    
    return (
            <>{teamData && <div className={classes.container}>
                {Object.keys(Logo).map((item:string,index:number)=>
                {
                    return (
                    <div className={`${classes.teamcard} ${colorclass[teamData[index].id]}`} key={index} onClick={()=>clickHandler(teamData[index].id)}>                      
                        <img className={classes.logo} src={Logo[item]} />
                        <div >
                            <h3 className={classes.teamname}>{teamData[index].teamName}</h3>
                            <h6 className={classes.venue}>{teamData[index].venue}</h6>
                            {teamData[index].winningYears.length?(
                            <div >
                                <h4 className={classes.win}>{teamData[index].winningYears.map((item)=>{
                                    return `${item} `;
                                })}</h4>
                            </div> ):(<></>)}
                        </div>
                        <h5 className={classes.home}>Team Home</h5>
                    </div>                    
                    )
                })}
            </div>}</>
    )
    }


export default Cards