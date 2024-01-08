import React,{useEffect} from "react";
const Question17 = ({ handleAnsweredBtn}) => {
    let allAnswers=JSON.parse(sessionStorage.getItem('allAnswers'))

    // for keeping the users answer checked after the page has been regreshed
    useEffect(()=>{
            if(allAnswers[16] !== 0 && allAnswers[16].startsWith('rad')){
                document.getElementById(allAnswers[16]).checked=true
            }
    },[])
    // for storing the users answer
    const handleRadio =(e)=>{
        allAnswers[16]=e.target.id
        handleAnsweredBtn('q17')
        sessionStorage.setItem('allAnswers',JSON.stringify(allAnswers))          
    }
    
    return ( 
        <div className="quest">
            <h2 >Question 17</h2>
            <h4 className="questionHeader">Which  operator is used to assign a value to a variable?</h4>
            <div className="radios" >
                <div className="option1">
                    <input type="radio"  onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad1" style={{cursor:'pointer'}} />
                    <label className="label" style={{cursor:'pointer'}} htmlFor="rad1"><h5>-</h5></label>
                </div>
                <div className="option2">
                    <input type="radio"  onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad2" style={{cursor:'pointer'}}/><label style={{cursor:'pointer'}} htmlFor="rad2"><h5>x</h5></label>
                </div>
                <div className="option3">
                    <input type="radio" onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad3" style={{cursor:'pointer'}} /><label style={{cursor:'pointer'}} htmlFor="rad3"><h5>*</h5></label>
                </div>
                <div className="option4">
                    <input type="radio" onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad4" style={{cursor:'pointer'}} /><label style={{cursor:'pointer'}} htmlFor="rad4"><h5>=</h5></label>
                </div>
            </div>
        </div>
        
     );
}
 
export default Question17;