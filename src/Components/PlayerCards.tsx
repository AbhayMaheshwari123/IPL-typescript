import axios from 'axios'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import URL from '../Helper/URL'
import useStyles from '../Styling/PlayerCardsStyle'
import TeamCardcolor from '../Styling/TeamCardcolor'
import Bannercomp from './Banner'
interface Proptyp {
  match: {
    url: string
  }
}
interface Teamdata {
  players: [
    {
      id: string
      image: string
      name: string
      nationality: string
      stats: { [key: string]: number }
    }
  ]
  team: { [key: string]: string }
}

function Team(props: Proptyp) {
  const url = URL[props.match.url.slice(6)]
  const [teamdetail, setteamdetail]: [unknown, Dispatch<SetStateAction<unknown>>] = useState()
  const teamname = props.match.url.slice(6)
  const classes = useStyles()
  const colorclass = TeamCardcolor()
  useEffect(() => {
    async function fetchteamdata() {
      try {
        const res = await axios.get(url)
        setteamdetail(res.data)
      }
      catch {
        setteamdetail(false)
      }
    }
    fetchteamdata()
  }, [url])
  const data = teamdetail as Teamdata
  return (
    <>
      {data && (
        <>
          <Bannercomp teamName={teamname} />
          <div className={classes.container}>
            {data.players.map((detail, index) => {
              return (
                <div data-testid="cardteam" className={classes.playercard} key={index}>
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
                        <h5>{detail.stats.runs}</h5>
                        <h5>Runs</h5>
                      </div>
                      <div className={classes.wicket}>
                        <h5>{detail.stats.wickets}</h5>
                        <h5>Wickets</h5>
                      </div>
                    </div>
                    <div>
                      <h4>View Profile</h4>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </>
      )}
    </>
  )
}

export default Team
