import React,{useEffect} from "react";
const Question18 = ({ handleAnsweredBtn}) => {
    let allAnswers=JSON.parse(sessionStorage.getItem('allAnswers'))

    // for keeping the users answer checked after the page has been regreshed
    useEffect(()=>{
            if(allAnswers[17] !== 0 && allAnswers[17].startsWith('rad')){
                document.getElementById(allAnswers[17]).checked=true
            }
    },[])
    // for storing the users answer
    const handleRadio =(e)=>{
        allAnswers[17]=e.target.id
        handleAnsweredBtn('q18')
        sessionStorage.setItem('allAnswers',JSON.stringify(allAnswers))          
    }
    
    return ( 
        <div className="quest">
            <h2 >Question 18</h2>
            <h4 className="questionHeader">What will the following code return: 12==='12'</h4>
            <div className="radios" >
                <div className="option1">
                    <input type="radio"  onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad1" style={{cursor:'pointer'}} />
                    <label className="label" style={{cursor:'pointer'}} htmlFor="rad1"><h5>true</h5></label>
                </div>
                <div className="option2">
                    <input type="radio"  onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad2" style={{cursor:'pointer'}}/><label style={{cursor:'pointer'}} htmlFor="rad2"><h5>false</h5></label>
                </div>
                <div className="option3">
                    <input type="radio" onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad3" style={{cursor:'pointer'}} /><label style={{cursor:'pointer'}} htmlFor="rad3"><h5>NaN</h5></label>
                </div>
            </div>
        </div>
        
     );
}
 
export default Question18;