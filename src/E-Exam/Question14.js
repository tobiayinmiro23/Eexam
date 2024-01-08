import React,{useEffect} from "react";
const Question14 = ({ handleAnsweredBtn}) => {
    let allAnswers=JSON.parse(sessionStorage.getItem('allAnswers'))

    // for keeping the users answer checked after the page has been regreshed
    useEffect(()=>{
            if(allAnswers[13] !== 0 && allAnswers[13].startsWith('rad')){
                document.getElementById(allAnswers[13]).checked=true
            }
    },[])
    // for storing the users answer
    const handleRadio =(e)=>{
        allAnswers[13]=e.target.id
        handleAnsweredBtn('q14')
        sessionStorage.setItem('allAnswers',JSON.stringify(allAnswers))          
    }
  
    return ( 
        <div className="quest">
            <h2 >Question 14</h2>
            <h4 className="questionHeader">How can you detect the client's browser name?</h4>
            <div className="radios" >
                <div className="option1">
                    <input type="radio"  onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad1" style={{cursor:'pointer'}} />
                    <label className="label" style={{cursor:'pointer'}} htmlFor="rad1"><h5>navigator.appName</h5></label>
                </div>
                <div className="option2">
                    <input type="radio"  onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad2" style={{cursor:'pointer'}}/><label style={{cursor:'pointer'}} htmlFor="rad2"><h5>browser.name</h5></label>
                </div>
                <div className="option3">
                    <input type="radio" onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad3" style={{cursor:'pointer'}} /><label style={{cursor:'pointer'}} htmlFor="rad3"><h5>client.navName</h5></label>
                </div>
            </div>
        </div>
        
     );
}
 
export default Question14;