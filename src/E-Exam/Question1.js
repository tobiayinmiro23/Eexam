import React,{useEffect} from "react";
const Question1 = ({answer1,handleAnsweredId,q1_id}) => {
    // if(item.checked){
    //     console.log('radio is on')
    //     answer1(true)
    //     // item.checked=true
    // }
    // console.log(item.checked)
    let radioInput=document.querySelectorAll('input[type=radio]')
    const handleRadio =()=>{
            radioInput.forEach(item=>{
                if(item.checked){
                    console.log('radio is on')
                    answer1(true)
                    // item.checked=true
                    console.log(item.id)
                    handleAnsweredId(item.id)
                }
                // console.log(item.checked)
            })
    }
    let answer=document.querySelectorAll('.label')[0]
    // let answer=document.querySelectorAll(`#${q1_id} > label`)
    console.log(answer)
    // answer.classList.add('red')
    // useEffect(()=>{
    //     if(q1_id !== ''){
    //         let answer=document.querySelectorAll(`.label`)
    //         // let answer=document.querySelectorAll(`#${q1_id} > label`)
    //         console.log(answer)
    //         answer.classList.add('red')
    //         // answer.checked=true
    //         // answer.classList.add('red')

    //     }
    // },[])
    return ( 
        <div className="quest" style={{background:'white',width:'70%',height:'80%',margin:'auto',margin:'2rem 1rem'}}>
            <h2 style={{marginBottom:'2rem'}}>Question 1</h2>
            <h4 style={{textAlign:'start',marginLeft:'2rem'}}>solve the following in hexa decimal 101110 <sub>2</sub></h4>
            <div className="radios"   style={{textAlign:'start',marginLeft:'2rem'}}>
                <div className="option1">
                    <input type="radio"  onChange={handleRadio}  name="rad" value={0} id="rad1" style={{cursor:'pointer'}} />
                    <label className="label" style={{cursor:'pointer'}} htmlFor="rad1"><h5>2E <sub>16</sub></h5></label>
                </div>
                <div className="option2">
                    <input type="radio"  onChange={handleRadio}  name="rad" value={0} id="rad2" style={{cursor:'pointer'}}/><label style={{cursor:'pointer'}} htmlFor="rad2"><h5>722 <sub>16</sub></h5></label>
                </div>
                <div className="option3">
                    <input type="radio" onChange={handleRadio}  name="rad" value={0} id="rad3" style={{cursor:'pointer'}} /><label style={{cursor:'pointer'}} htmlFor="rad3"><h5>12C <sub>16</sub></h5></label>
                </div>
                <div className="option4">
                    <input type="radio"  onChange={handleRadio}  name="rad" value={0} id="rad4" style={{cursor:'pointer'}} /><label style={{cursor:'pointer'}} htmlFor="rad4"><h5>622 <sub>16</sub></h5></label>
                </div>
            </div>
        </div>
        
     );
}
 
export default Question1;