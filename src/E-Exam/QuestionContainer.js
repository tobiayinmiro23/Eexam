import { useState } from "react";
import React from "react";
// import Question1 from "./question1";
// import Question2 from "./question2";
// import Question3 from "./Question3";
const QuestionContainer = ({handleState,answer1}) => {
    const [BackgroundColor,setBackgroundColor]=useState('null')
    if(answer1){
        setBackgroundColor('greenyellow')
    }
    console.log(answer1)
    return ( 
        <div className="quest"  style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'2rem'}}>
            <button  onClick={(e)=>e.target.style.background='red'} >1</button>
            <button style={{outline:'none'}}  onClick={()=>{handleState('two')}}>2</button>
            <button   onClick={()=>{handleState('three')}}>3</button>
            <button    onClick={()=>{handleState('four')}}>4</button>
            <button    onClick={()=>{handleState('five')}}>5</button>
            <button    onClick={()=>{handleState('six')}}>6</button>
            <button    onClick={()=>{handleState('seven')}}>7</button>
            <button    onClick={()=>{handleState('eight')}}>8</button>
            <button    onClick={()=>{handleState('nine')}}>9</button>
            <button    onClick={()=>{handleState('ten')}}>10</button>
            <button    onClick={()=>{handleState('eleven')}}>11</button>
            <button    onClick={()=>{handleState('twelve')}}>12</button>
            <button    onClick={()=>{handleState('thirteen')}}>13</button>
            <button    onClick={()=>{handleState('fourteen')}}>14</button>
            <button    onClick={()=>{handleState('fifteen')}}>15</button>
            <button    onClick={()=>{handleState('sixteen')}}>16</button>
            <button    onClick={()=>{handleState('seventeen')}}>17</button>
            <button    onClick={()=>{handleState('eighteen')}}>18</button>
            <button    onClick={()=>{handleState('ninteen')}}>19</button>
            <button    onClick={()=>{handleState('twenty')}}>20</button>
        </div>
     );
}
 
export default QuestionContainer;