import {createUseStyles} from 'react-jss';

const useStyles=createUseStyles({
    container:{
        display:'flex',
        flexDirection:'Column'
    },
    playercard:{
        display:'flex',
        flexDirection:'Column',
        alignItems:'center',
        border:'1px groove hsla(0,0%,7%,.35)',
        borderRadius:'9px',
        margin:'5%',
        boxShadow:' 0 4px 8px hsla(0, 0%, 0.0000%, 0.75000)'
    },
    detail:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    stats:{
        display:'flex',
    },
    pic:{
        width:'60%'
    },
    run:{
        margin:'0 50% 0 50%',
        textAlign:'center'
    },
    match:{
        margin:'0 0 0 -50%',
        textAlign:'center'
    },
    wicket:{
        textAlign:'center'
    },
    iplyear:{
        margin:'0'
    },
    bg:{
        display:'flex',
        justifyContent:'center',
        width:'100%',
        borderRadius:'9px 9px 0 0'
    },
    "chennai-super-kings":{background: 'linear-gradient( 136deg,#fdb913,#f85c00)'},
    "delhi-capitals":{background: 'linear-gradient(136deg ,#004c93,#0358a7)'},
    "mumbai-indians":{background: 'linear-gradient( 136deg,#005da0,#003a63)'},
    "rajasthan-royals":{background: 'linear-gradient( 136deg,#2d4d9d,#172e5e)'},
    "kings-xi-punjab":{background: 'linear-gradient(136deg,#aa4545,#740f0b)'},
    "royal-challengers-bangalore":{background: 'linear-gradient(136deg,#000,#464646)'},
    "sunrisers-hyderabad":{background: 'linear-gradient(136deg,#fb643e,#b81c25)'},
    "kolkata-knight-riders":{background: 'linear-gradient(136deg,#70458f,#3d2057)'},
    '@media screen and (min-width:480px)':{
        container:{
            width: '100%',
            display: 'flex',
            flexWrap:'wrap',
            justifyContent:'space-evenly',
            flexDirection:'row'
    
        },
        playercard:{
            flexDirection: 'column',
            width: '39%',
            '&:hover':{
                marginTop:'-0.5px',
                marginBottom:'-0.5px',
                opacity:'0.6'
            }
        },
        run:{
            margin:'0 20% 0 20%'
        },match:{
            margin:'0 0 0 -20%'
        }
    },
    '@media screen and (min-width:840px)':{
        playercard:{
            width:'23%'
        }
    },
    '@media screen and (min-width:1080px)':{
        playercard:{
            width:'18%',
            margin:'2%'
        }
    }
})



export default useStyles