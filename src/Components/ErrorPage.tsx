import {createUseStyles} from 'react-jss';
const useStyles=createUseStyles({
    text:{
        textAlign:'center'
    }
})
function Error() {
    const classes=useStyles();
    return (
        <div>
            <h1 className={classes.text}>Oops! Something Went Wrong</h1>
        </div>
    )
}

export default Error