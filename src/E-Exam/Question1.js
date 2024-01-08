import React,{useEffect} from "react";
const Question1 = ({ handleAnsweredBtn}) => {
    let allAnswers=JSON.parse(sessionStorage.getItem('allAnswers'))

    // for keeping the users answer checked after the page has been regreshed
    useEffect(()=>{
            if(allAnswers[0] !== 0 && allAnswers[0].startsWith('rad')){
                document.getElementById(allAnswers[0]).checked=true
            }
    },[])
    // for storing the users answer
    const handleRadio =(e)=>{
        allAnswers[0]=e.target.id
        handleAnsweredBtn('q1')
        sessionStorage.setItem('allAnswers',JSON.stringify(allAnswers))          
    }
  
    return ( 
        <div className="quest">
            <h2 >Question 1</h2>
            <h4 className="questionHeader">The following are correct JavaScript syntax to change the content a HTML element except?</h4>
            <div className="radios" >
                <div className="option1">
                    <input type="radio"  onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad1" style={{cursor:'pointer'}} />
                    <label className="label" style={{cursor:'pointer'}} htmlFor="rad1"><h5>document.getElementById("demo").innerHTML = "Hello World!";</h5></label>
                </div>
                <div className="option2">
                    <input type="radio"  onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad2" style={{cursor:'pointer'}}/><label style={{cursor:'pointer'}} htmlFor="rad2"><h5>document.getElement("p").innerHTML = "Hello World!";</h5></label>
                </div>
                <div className="option3">
                    <input type="radio" onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad3" style={{cursor:'pointer'}} /><label style={{cursor:'pointer'}} htmlFor="rad3"><h5>document.getElementByName("p").innerHTML = "Hello World!";</h5></label>
                </div>
                <div className="option4">
                    <input type="radio"  onChange={(e)=>handleRadio(e)}  name="rad" value={0} id="rad4" style={{cursor:'pointer'}} /><label style={{cursor:'pointer'}} htmlFor="rad4"><h5>document.getElementByPenName("p").innerHTML = "Hello World!";</h5></label>
                </div>
            </div>
        </div>
        
     );
}
 
export default Question1;