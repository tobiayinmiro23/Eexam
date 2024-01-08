import { useState,useContext } from "react";
import React from "react";
import { contextWrapper } from "../App";

const BtnContainer = ({handleState}) => {
        // let data=useContext(contextWrapper)
        // const[handleState]=data
    
    return ( 
        <div className="questBtnContainer" >
            <button className={'blue'} id='q1'   onClick={(e)=>{handleState( 1 )}}>1</button>
            <button className={ 'blue'} id='q2'  onClick={()=>{handleState( 2 )}}>2</button>
            <button   className={'blue'} id='q3' onClick={()=>{handleState( 3 )}}>3</button>
            <button  className={'blue'}  id='q4' onClick={()=>{handleState( 4 )}}>4</button>
            <button   className={'blue'} id='q5' onClick={()=>{handleState( 5 )}}>5</button>
            <button   className={'blue'} id='q6' onClick={()=>{handleState( 6 )}}>6</button>
            <button   className={'blue'} id='q7' onClick={()=>{handleState( 7 )}}>7</button>
            <button   className={'blue'} id='q8' onClick={()=>{handleState( 8 )}}>8</button>
            <button   className={'blue'} id='q9' onClick={()=>{handleState( 9 )}}>9</button>
            <button   className={'blue'} id='q10' onClick={()=>{handleState( 10 )}}>10</button>
            <button   className={'blue'} id='q11' onClick={()=>{handleState( 11 )}}>11</button>
            <button   className={'blue'} id='q12' onClick={()=>{handleState( 12 )}}>12</button>
            <button   className={'blue'} id='q13' onClick={()=>{handleState( 13 )}}>13</button>
            <button   className={'blue'} id='q14' onClick={()=>{handleState( 14 )}}>14</button>
            <button   className={'blue'} id='q15' onClick={()=>{handleState( 15 )}}>15</button>
            <button   className={'blue'} id='q16' onClick={()=>{handleState( 16 )}}>16</button>
            <button   className={'blue'} id='q17' onClick={()=>{handleState( 17 )}}>17</button>
            <button   className={'blue'} id='q18' onClick={()=>{handleState( 18 )}}>18</button>
            <button   className={'blue'} id='q19' onClick={()=>{handleState( 19)}}>19</button>
            <button   className={'blue'} id='q20' onClick={()=>{handleState( 20 )}}>20</button>
        </div> 
     );
}
 
export default BtnContainer;