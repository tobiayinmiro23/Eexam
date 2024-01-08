import React,{useContext} from "react";
import { contextWrapper } from "../App";

import Timer from "./Timer";
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
import Question5 from './Question5';
import Question6 from './Question6';
import Question7 from './Question7';
import Question8 from './Question8';
import Question9 from './Question9';
import Question10 from './Question10';
import Question11 from './Question11';
import Question12 from './Question12';
import Question13 from './Question13';
import Question14 from './Question14';
import Question15 from './Question15';
import Question16 from './Question16';
import Question17 from './Question17';
import Question18 from './Question18';
import Question19 from './Question19';
import Question20 from './Question20';
import BtnContainer from "./BtnContainer";
const Container = ({setlessThanTenMins,lessThanTenMins,setconfirmation,handlePage,handleConfirmation, previousBtn,question,answeredQuestion,handleState,handleAnsweredBtn,nextBtn}) => {
    //let data=useContext(contextWrapper)
    return ( 
       <div>
        {lessThanTenMins && <h2 className="timeOut">you have less than 3 minutes left</h2>}
       <div className="container" >
       <div className="questionContainer">
        <div className="backward" onClick={previousBtn}>
         <img src="../image/backward-arrow.png" alt="" />
        </div>
        {question=== 1 && <Question1  handleAnsweredBtn={handleAnsweredBtn} /> }
        {question=== 2 && <Question2  handleAnsweredBtn={handleAnsweredBtn} />}
        {question=== 3 && <Question3 handleAnsweredBtn={handleAnsweredBtn}/>}
        {question=== 4 && <Question4 handleAnsweredBtn={handleAnsweredBtn}/>}
        {question=== 5 && <Question5 handleAnsweredBtn={handleAnsweredBtn}/>}
        {question=== 6 && <Question6 handleAnsweredBtn={handleAnsweredBtn}/>}
        {question=== 7 && <Question7 handleAnsweredBtn={handleAnsweredBtn}/>}
        {question=== 8 && <Question8 handleAnsweredBtn={handleAnsweredBtn}/>}
        {question=== 9 && <Question9 handleAnsweredBtn={handleAnsweredBtn}/>}
        {question=== 10 && <Question10 handleAnsweredBtn={handleAnsweredBtn}/>}
        {question=== 11 && <Question11 handleAnsweredBtn={handleAnsweredBtn}/>}
        {question=== 12 && <Question12 handleAnsweredBtn={handleAnsweredBtn}/>}
        {question=== 13 && <Question13 handleAnsweredBtn={handleAnsweredBtn}/>}
        {question=== 14 && <Question14 handleAnsweredBtn={handleAnsweredBtn}/>}
        {question=== 15 && <Question15 handleAnsweredBtn={handleAnsweredBtn}/>}
        {question=== 16 && <Question16 handleAnsweredBtn={handleAnsweredBtn}/>}
        {question=== 17 && <Question17 handleAnsweredBtn={handleAnsweredBtn}/>}
        {question=== 18 && <Question18 handleAnsweredBtn={handleAnsweredBtn}/>}
        {question=== 19 && <Question19 handleAnsweredBtn={handleAnsweredBtn}/>}
        {question=== 20 && <Question20 handleAnsweredBtn={handleAnsweredBtn}/>}
        <div className="forward" onClick={nextBtn}>
         <img src="../image/skip-track.png" alt="" />
        </div>
        <Timer setlessThanTenMins={setlessThanTenMins} setconfirmation={setconfirmation} handlePage={handlePage} handleConfirmation={handleConfirmation} answeredQuestion={answeredQuestion} />
        </div>
       </div>
      <BtnContainer handleState={handleState}/>
       </div>
     );
}
 
export default Container;