import {createUseStyles} from 'react-jss';
const LOGO=require('../Assests/Logo.png');
const useStyles=createUseStyles({
    navbar:{
        backgroundColor: 'rgb(56, 34, 177)',
        height: '70px',
        width: '100%',
        boxShadow:' 0 4px 8px hsla(0, 0%, 0.0000%, 0.75000)',
    },
    logo:{
        height: '70px',
        width: '110px',
    }
})
function Navbar() {
    const classes=useStyles();
    return (
        <nav className={classes.navbar}>
            <img src={LOGO.default} className={classes.logo} alt="IPL Logo"></img>
        </nav>
    )
}

export default Navbar