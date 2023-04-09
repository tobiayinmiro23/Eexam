import React from "react";
const Question2 = ({answer2}) => {

    // let radioInput=document.querySelectorAll('input[type=radio]')
    // const handleRadio =()=>{
    //         radioInput.forEach(item=>{
    //             if(item.checked){
    //                 answer2(true)
    //                 console.log('radio is on')
    //             }
    //             // console.log(item.checked)
    //         })
    // }

    return ( 
        <div className="quest" style={{background:'white',width:'70%',height:'80%',margin:'auto',margin:'2rem 1rem'}}>
        <h2 style={{marginBottom:'2rem'}}>Question 2</h2>
        <h4 style={{textAlign:'start',marginLeft:'2rem'}}>___ are set of rules and conventions for sending information over network</h4>
        <div className="radios" style={{textAlign:'start',marginLeft:'2rem'}}>
            <div className="option1">
                <input type="radio"  onChange={()=>answer2(true)} name="rad" id="rad1" style={{cursor:'pointer'}} /><label style={{cursor:'pointer'}} htmlFor="rad1"><h5>ISP</h5></label>
            </div>
            <div className="option2">
                <input type="radio" name="rad" id="rad2" style={{cursor:'pointer'}}/><label style={{cursor:'pointer'}} htmlFor="rad2"><h5>Protocol</h5></label>
            </div>
            <div className="option3">
                <input type="radio" name="rad" id="rad3" style={{cursor:'pointer'}} /><label style={{cursor:'pointer'}} htmlFor="rad3"><h5>Internet protocol</h5></label>
            </div>
            <div className="option4">
                <input type="radio" name="rad" id="rad4" style={{cursor:'pointer'}} /><label style={{cursor:'pointer'}} htmlFor="rad4"><h5>TCP</h5></label>
            </div>
        </div>
    </div>
     );
}
 
export default Question2;