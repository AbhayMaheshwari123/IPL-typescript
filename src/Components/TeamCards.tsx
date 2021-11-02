import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import Logo from '../Helper/Logo'
import TeamCardcolor from '../Styling/TeamCardcolor'
import useStyles from '../Styling/TeamCardStyle'

interface Map {
  id: string
  teamName: string
  venue: string
  winningYears: []
}
type finalmap = Map[]

function Cards() {
  const [teamData, setteamData] = useState<finalmap>()
  const url = 'https://ipl-t20.herokuapp.com/teams'
  const history = useHistory()
  const classes = useStyles()
  const colorclass = TeamCardcolor()

  useEffect(() => {
    async function fetchdata() {
      await axios.get(url).then((response) => {
        setteamData(response.data)
      })
    }
    fetchdata()
    return () => {
      setteamData([])
    }
  }, [url])

  const clickHandler = useCallback(
    (id) => {
      history.push(`team/${id}`)
    },
    [history]
  )

  return (
    <>
      {teamData && (
        <div className={classes.container}>
          {Object.keys(Logo).map((item: string, index: number) => {
            return (
              <div
                data-testid="cards"
                className={`${classes.teamcard} ${colorclass[teamData[index].id]}`}
                key={index}
                onClick={() => clickHandler(teamData[index].id)}
              >
                <img className={classes.logo} src={Logo[item]} alt="Team Logo" />
                <div>
                  <h3 className={classes.teamname}>{teamData[index].teamName}</h3>
                  <h6 className={classes.venue}>{teamData[index].venue}</h6>
                  {teamData[index].winningYears.length ? (
                    <div>
                      <h4 className={classes.win}>
                        {teamData[index].winningYears.map((year) => {
                          return `${year} `
                        })}
                      </h4>
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
                <h5 className={classes.home}>Team Home</h5>
              </div>
            )
          })}
        </div>
      )}
    </>
  )
}

export default Cards
