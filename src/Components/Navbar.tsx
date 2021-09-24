import { createUseStyles } from 'react-jss'
import LOGO from '../Assests/Logo.png'
const useStyles = createUseStyles({
  navbar: {
    backgroundColor: 'rgb(56, 34, 177)',
    height: '70px',
    width: '100%',
    boxShadow: ' 0 4px 8px hsla(0, 0%, 0.0000%, 0.75000)',
  },
  logo: {
    height: '70px',
    width: '110px',
  },
})
function Navbar() {
  const classes = useStyles()
  return (
    <nav title="navbar" className={classes.navbar}>
      <img title="img" src={LOGO} className={classes.logo} alt="IPL Logo" />
    </nav>
  )
}

export default Navbar
