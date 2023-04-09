import React from "react";
const Question9 = () => {
    return ( 
        <div className="quest" style={{background:'white',width:'70%',height:'80%',margin:'auto',margin:'2rem 1rem'}}>
        <h2 style={{marginBottom:'2rem'}}>Question 9</h2>
        <h4 style={{textAlign:'start',marginLeft:'2rem'}}>Why is machine language so important to coputer</h4>
        <div className="radios" style={{textAlign:'start',marginLeft:'2rem'}}>
            <div className="option1" style={{display:'flex',alignItems:'center'}}>
                <input type="radio" name="rad" id="rad1" style={{cursor:'pointer'}} /><label style={{cursor:'pointer'}} htmlFor="rad1"><h5>The electronic nature of computer operates on switch which is 'on' and 'off' which can be represented in 0 and 1</h5></label>
            </div>
            <div className="option2">
                <input type="radio" name="rad" id="rad2" style={{cursor:'pointer'}}/><label style={{cursor:'pointer'}} htmlFor="rad2"><h5>None of the above</h5></label>
            </div>
            <div className="option3">
                <input type="radio" name="rad" id="rad3" style={{cursor:'pointer'}} /><label style={{cursor:'pointer'}} htmlFor="rad3"><h5>It si the other tounge of computer</h5></label>
            </div>
            <div className="option4">
                <input type="radio" name="rad" id="rad4" style={{cursor:'pointer'}} /><label style={{cursor:'pointer'}} htmlFor="rad4"><h5>It is faster in speed of execution</h5></label>
            </div>
        </div>
    </div>
     );
}
 
export default Question9;