import React from "react";
const Question3 = ({answer3}) => {
    return ( 
        <div className="quest" style={{background:'white',width:'70%',height:'80%',margin:'auto',margin:'2rem 1rem'}}>
        <h2 style={{marginBottom:'2rem'}}>Question 3</h2>
        <h4 style={{textAlign:'start',marginLeft:'2rem'}}>Which of the network usually transfer data in the lower bandwidth?</h4>
        <div className="radios" style={{textAlign:'start',marginLeft:'2rem'}}>
            <div className="option1">
                <input type="radio" onClick={()=>answer3(true)} name="rad" id="rad1" style={{cursor:'pointer'}} /><label style={{cursor:'pointer'}} htmlFor="rad1"><h5>WAN</h5></label>
            </div>
            <div className="option2">
                <input type="radio" onClick={()=>answer3(true)} name="rad" id="rad2" style={{cursor:'pointer'}}/><label style={{cursor:'pointer'}} htmlFor="rad2"><h5>LAN</h5></label>
            </div>
            <div className="option3">
                <input type="radio" onClick={()=>answer3(true)} name="rad" id="rad3" style={{cursor:'pointer'}} /><label style={{cursor:'pointer'}} htmlFor="rad3"><h5>Intranet</h5></label>
            </div>
            <div className="option4">
                <input type="radio" onClick={()=>answer3(true)} name="rad" id="rad4" style={{cursor:'pointer'}} /><label style={{cursor:'pointer'}} htmlFor="rad4"><h5>ARP</h5></label>
            </div>
        </div>
    </div>
     );
}
 
export default Question3;