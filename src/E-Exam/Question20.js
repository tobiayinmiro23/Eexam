import React,{useEffect} from "react";
const Question20 = ({ handleAnsweredBtn}) => {
    let allAnswers=JSON.parse(sessionStorage.getItem('allAnswers'))

    // for keeping the users answer checked after the page has been regreshed
    useEffect(()=>{
            if(allAnswers[19] !== 0 && allAnswers[19].startsWith('rad')){
                document.getElementById(allAnswers[19]).checked=true
            }
    },[])
    // for storing the users answer
    const handleRadio =(e)=>{
        allAnswers[19]=e.target.id
        handleAnsweredBtn('q20')
        sessionStorage.setItem('allAnswers',JSON.stringify(allAnswers))          
    }
    
    return ( 
        <div className="quest">
            <h2 >Question 20</h2>
            <h4 className="questionHeader">the following are ways of declaring a variable in javascript except</h4>
            <div className="radios" >
                <div className="option1">
                    <input type="radio"  onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad1" style={{cursor:'pointer'}} />
                    <label className="label" style={{cursor:'pointer'}} htmlFor="rad1"><h5>var</h5></label>
                </div>
                <div className="option2">
                    <input type="radio"  onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad2" style={{cursor:'pointer'}}/><label style={{cursor:'pointer'}} htmlFor="rad2"><h5>let</h5></label>
                </div>
                <div className="option3">
                    <input type="radio"  onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad3" style={{cursor:'pointer'}}/><label style={{cursor:'pointer'}} htmlFor="rad3"><h5>const</h5></label>
                </div>
                <div className="option2">
                    <input type="radio"  onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad4" style={{cursor:'pointer'}}/><label style={{cursor:'pointer'}} htmlFor="rad4"><h5>bar</h5></label>
                </div>
            </div>
        </div>
        
     );
}
 
export default Question20;