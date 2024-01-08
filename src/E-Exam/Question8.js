import React,{useEffect} from "react";
const Question8 = ({ handleAnsweredBtn}) => {
    let allAnswers=JSON.parse(sessionStorage.getItem('allAnswers'))

    // for keeping the users answer checked after the page has been regreshed
    useEffect(()=>{
            if(allAnswers[7] !== 0 && allAnswers[7].startsWith('rad')){
                document.getElementById(allAnswers[7]).checked=true
            }
    },[])
    // for storing the users answer
    const handleRadio =(e)=>{
        allAnswers[7]=e.target.id
        handleAnsweredBtn('q8')
        sessionStorage.setItem('allAnswers',JSON.stringify(allAnswers))          
    }
  
    return ( 
        <div className="quest">
            <h2 >Question 8</h2>
            <h4 className="questionHeader">How to insert a comment that has more than one line?</h4>
            <div className="radios" >
                <div className="option1">
                    <input type="radio"  onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad1" style={{cursor:'pointer'}} />
                    <label className="label" style={{cursor:'pointer'}} htmlFor="rad1"><h5>'This is a comment'</h5></label>
                </div>
                <div className="option2">
                    <input type="radio"  onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad2" style={{cursor:'pointer'}}/><label style={{cursor:'pointer'}} htmlFor="rad2"><h5>"This is a comment"</h5></label>
                </div>
                <div className="option3">
                    <input type="radio" onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad3" style={{cursor:'pointer'}} /><label style={{cursor:'pointer'}} htmlFor="rad3"><h5>/*This comment has more than one line*/ </h5></label>
                </div>
                <div className="option4">
                    <input type="radio"  onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad4" style={{cursor:'pointer'}} /><label style={{cursor:'pointer'}} htmlFor="rad4"><h5>//This is a comment </h5></label>
                </div>
            </div>
        </div>
        
     );
}
 
export default Question8;