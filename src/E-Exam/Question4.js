import React,{useEffect} from "react";
const Question4 = ({ handleAnsweredBtn}) => {
    let allAnswers=JSON.parse(sessionStorage.getItem('allAnswers'))

    // for keeping the users answer checked after the page has been regreshed
    useEffect(()=>{
            if(allAnswers[3] !== 0 && allAnswers[3].startsWith('rad')){
                document.getElementById(allAnswers[3]).checked=true
            }
    },[])
    // for storing the users answer
    const handleRadio =(e)=>{
        allAnswers[3]=e.target.id
        handleAnsweredBtn('q4')
        sessionStorage.setItem('allAnswers',JSON.stringify(allAnswers))          
    }
  
    return ( 
        <div className="quest">
            <h2 >Question 4</h2>
            <h4 className="questionHeader">How do you call a function named "myFunction"?</h4>
            <div className="radios" >
                <div className="option1">
                    <input type="radio"  onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad1" style={{cursor:'pointer'}} />
                    <label className="label" style={{cursor:'pointer'}} htmlFor="rad1"><h5>call function myFunction()</h5></label>
                </div>
                <div className="option2">
                    <input type="radio"  onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad2" style={{cursor:'pointer'}}/><label style={{cursor:'pointer'}} htmlFor="rad2"><h5>myFunction()</h5></label>
                </div>
                <div className="option3">
                    <input type="radio" onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad3" style={{cursor:'pointer'}} /><label style={{cursor:'pointer'}} htmlFor="rad3"><h5>call myFunction()</h5></label>
                </div>
                <div className="option4">
                    <input type="radio"  onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad4" style={{cursor:'pointer'}} /><label style={{cursor:'pointer'}} htmlFor="rad4"><h5>function  (myFunction())</h5></label>
                </div>
            </div>
        </div>
        
     );
}
 
export default Question4;