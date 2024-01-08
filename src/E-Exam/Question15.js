import React,{useEffect} from "react";
const Question15 = ({ handleAnsweredBtn}) => {
    let allAnswers=JSON.parse(sessionStorage.getItem('allAnswers'))

    // for keeping the users answer checked after the page has been regreshed
    useEffect(()=>{
            if(allAnswers[14] !== 0 && allAnswers[14].startsWith('rad')){
                document.getElementById(allAnswers[14]).checked=true
            }
    },[])
    // for storing the users answer
    const handleRadio =(e)=>{
        allAnswers[14]=e.target.id
        handleAnsweredBtn('q15')
        sessionStorage.setItem('allAnswers',JSON.stringify(allAnswers))          
    }
  
    return ( 
        <div className="quest">
            <h2 >Question 15</h2>
            <h4 className="questionHeader">Which event occurs when the user clicks on an HTML element?</h4>
            <div className="radios" >
                <div className="option1">
                    <input type="radio"  onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad1" style={{cursor:'pointer'}} />
                    <label className="label" style={{cursor:'pointer'}} htmlFor="rad1"><h5>onchange</h5></label>
                </div>
                <div className="option2">
                    <input type="radio"  onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad2" style={{cursor:'pointer'}}/><label style={{cursor:'pointer'}} htmlFor="rad2"><h5>onmouseover</h5></label>
                </div>
                <div className="option3">
                    <input type="radio" onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad3" style={{cursor:'pointer'}} /><label style={{cursor:'pointer'}} htmlFor="rad3"><h5>onclick</h5></label>
                </div>
                <div className="option4">
                    <input type="radio" onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad4" style={{cursor:'pointer'}} /><label style={{cursor:'pointer'}} htmlFor="rad4"><h5>onmouseclick</h5></label>
                </div>
            </div>
        </div>
        
     );
}
 
export default Question15;