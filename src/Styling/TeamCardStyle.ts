import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  teamcard: {
    display: 'flex',
    border: '1px groove white',
    boxShadow: ' 0 4px 8px hsla(0, 0%, 0.0000%, 0.75000)',
    borderRadius: '9px',
    marginBottom: '2%',
    marginTop: '3%',
  },
  home: {
    display: 'none',
  },
  venue: {
    display: 'none',
  },
  logo: {
    width: '18%',
    margin: '3% 3% 3% 0',
  },
  teamname: {
    marginTop: '5%',
    marginBottom: '1%',
    color: 'white',
  },
  win: {
    marginTop: '3%',
    marginBottom: '2%',
    width: 'max-content',
    borderRadius: '12px',
    color: 'white',
    background: 'hsla(0,0%,7%,.35)',
    padding: '5px',
  },

  '@media screen and (min-width:480px)': {
    container: {
      width: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-evenly',
      flexDirection: 'row',
    },
    teamcard: {
      flexDirection: 'column',
      width: '40%',
      '&:hover': {
        opacity: '0.8',
      },
    },
    home: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      color: 'white',
    },
    venue: {
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      color: 'white',
    },
    logo: {
      width: '35%',
      margin: '-2% auto 3% auto',
    },
    teamname: {
      textAlign: 'center',
      fontSize: 'large',
    },
    win: {
      margin: '0 auto 0 auto',
    },
  },
  '@media screen and (min-width:720px)': {
    teamcard: {
      width: '30%',
    },
  },
  '@media screen and (min-width:940px)': {
    teamcard: {
      width: '20%',
    },
  },
})

export default useStyles
