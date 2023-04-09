import React,{useEffect, useState} from "react";
const Timer = ({answeredQuestion}) => {
    const [time,settime]=useState(null)
    let timecount=()=>{
        var date=new Date()
        var hours=date.getHours()
        var minutes=date.getMinutes()
        var seconds=date.getSeconds()
        let CurrentTime= `${hours} : ${minutes} : ${seconds}`
        // return CurrentTime;
    }
    let gettime=setInterval(timecount,1000)
    return ( 
        <div className="timer" style={{width:'28%',background:'#282c34',height:'78.3Vh',paddingTop:'1rem' ,marginLeft:'auto',textAlign:'center'}}>
            <div className="time" style={{display:'flex',borderRadius:'0.1rem',alignItems:"center",justifyContent:'center',background:'white',width:'92%',height:'4rem',margin:'auto'}}>
                <h2 style={{marginRight:'0.6rem'}}>Time:</h2>
                <h2  >???</h2>
            </div>
            <hr color="white" />
            <div style={{margin:'1rem 1rem',borderRadius:'0.1rem' ,padding:'0.5rem 0.1rem',height:'69%', background:'white'}}>
                <h2 style={{color:'black'}}>Questions answered</h2>
                <h4 style={{color:'black',marginBottom:'0.7rem'}}>you have answered {0 + answeredQuestion} questions out of 20</h4><hr color="black"/>
                 <h3 style={{color:'black',margin:'1rem 0rem'}}>Course code: cpt211</h3>
            </div>
            <button className="submit" style={{background:'#61dafb',cursor:'pointer',outline:'none',borderRadius:'0.19rem',border:'3px solid wheat',width:'92%'}}><h3 style={{fontSize:'1rem'}}>Submit</h3></button>
        </div>
     );
}
 
export default Timer;