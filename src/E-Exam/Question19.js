import React from "react";
const Question19 = () => {
    return ( 
        <div className="quest" style={{background:'white',width:'70%',height:'80%',margin:'auto',margin:'2rem 1rem'}}>
        <h2 style={{marginBottom:'2rem'}}>Question 19</h2>
        <h4 style={{textAlign:'start',marginLeft:'2rem'}}>A programmer can be referred to as</h4>
        <div className="radios" style={{textAlign:'start',marginLeft:'2rem'}}>
            <div className="option1">
                <input type="radio" name="rad" id="rad1" style={{cursor:'pointer'}} /><label style={{cursor:'pointer'}} htmlFor="rad1"><h5>An interpreter</h5></label>
            </div>
            <div className="option2">
                <input type="radio" name="rad" id="rad2" style={{cursor:'pointer'}}/><label style={{cursor:'pointer'}} htmlFor="rad2"><h5>An operator</h5></label>
            </div>
            <div className="option3">
                <input type="radio" name="rad" id="rad3" style={{cursor:'pointer'}} /><label style={{cursor:'pointer'}} htmlFor="rad3"><h5>A program Writter</h5></label>
            </div>
            <div className="option4">
                <input type="radio" name="rad" id="rad4" style={{cursor:'pointer'}} /><label style={{cursor:'pointer'}} htmlFor="rad4"><h5>A progrem reader</h5></label>
            </div>
        </div>
    </div>
     );
}
 
export default Question19;