import React,{useEffect} from "react";
const Question19 = ({ handleAnsweredBtn}) => {
    let allAnswers=JSON.parse(sessionStorage.getItem('allAnswers'))

    // for keeping the users answer checked after the page has been regreshed
    useEffect(()=>{
            if(allAnswers[18] !== 0 && allAnswers[18].startsWith('rad')){
                document.getElementById(allAnswers[18]).checked=true
            }
    },[])
    // for storing the users answer
    const handleRadio =(e)=>{
        allAnswers[18]=e.target.id
        handleAnsweredBtn('q19')
        sessionStorage.setItem('allAnswers',JSON.stringify(allAnswers))          
    }
    
    return ( 
        <div className="quest">
            <h2 >Question 19</h2>
            <h4 className="questionHeader">JavaScript is case-sensitive?</h4>
            <div className="radios" >
                <div className="option1">
                    <input type="radio"  onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad1" style={{cursor:'pointer'}} />
                    <label className="label" style={{cursor:'pointer'}} htmlFor="rad1"><h5>true</h5></label>
                </div>
                <div className="option2">
                    <input type="radio"  onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad2" style={{cursor:'pointer'}}/><label style={{cursor:'pointer'}} htmlFor="rad2"><h5>false</h5></label>
                </div>
            </div>
        </div>
        
     );
}
 
export default Question19;