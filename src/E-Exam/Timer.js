import React,{useEffect,useRef ,useContext,useState} from "react";
import { contextWrapper } from "../App";
import '../App.css';
const Timer = ({answeredQuestion,setlessThanTenMins,handlePage,handleConfirmation,setconfirmation}) => {
const [okToSubmit, setokToSubmit] = useState(true)
    // for handling the timer 
    let minutes=6
    let seconds=59
   useEffect(()=>{
    let a=setInterval(()=>{
        let min=document.querySelectorAll('.minutes')[0]
        let sec=document.querySelectorAll('.seconds')[0]
        let time=document.querySelectorAll('.time')[0]
        if(minutes ===0 && seconds === 1){
            clearInterval(a)
            minutes=0
            seconds=0
            min.innerHTML=minutes
            sec.innerHTML=seconds
            setlessThanTenMins(false)
            handlePage('Congratulations')
          return
        }
            seconds-- 
        if(seconds === 0){
            minutes--
            seconds=59
        }
        // for changing color of time to indicate time out
        if(minutes === 2){
            setlessThanTenMins(true)
            time.classList.add('timeOut')
        }
        min.innerHTML=minutes
        sec.innerHTML=seconds
    },1000)
   },[])

   // the statement below removes the disabled attribute from the submit button
   useEffect(()=>{
        if(answeredQuestion >= 14){
            setokToSubmit(false)
        }
   },[answeredQuestion])

    // function for the submit button
    const handleButton=()=>{
        setconfirmation(true)
   }
    return ( 
        <div className="timer" >
            <div className="time" >
                <h2 >Time</h2>
                <div className="timeContainer">
                <h2 className='minutes'></h2> <h2>:</h2> <h2 className='seconds'></h2>
                </div>
            </div>
            <hr color="white" />
            <div className="examInfo" >
                <h2 >Questions answered</h2>
                <h3 >you have answered { answeredQuestion} questions out of 20</h3><hr color="black"/>
                <h2>Instructions</h2>
                <h3>this is an exam based  on the javascript programming language to test your skills </h3>
                <h3>you are to answer atleast 14 questions before you can submit</h3>
            </div>
            <button className="submit" disabled={okToSubmit} onClick={()=>handleButton()} ><h3>Submit</h3></button>
        </div>
     );
}
 
export default Timer;