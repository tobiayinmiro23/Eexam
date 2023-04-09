import React,{Fragment,useState} from 'react';
import './App.css';
// import InputTodo from './components/InputTodo';
// import ListTodo from './components/ListTodo';
import Navbar from './E-Exam/Navbar';
import Timer from './E-Exam/Timer';
import Container from './E-Exam/Container';
import QuestionContainer from './E-Exam/QuestionContainer';
import Question1 from './E-Exam/Question1';
import Question2 from './E-Exam/Question2';
import Question3 from './E-Exam/Question3';
import Question4 from './E-Exam/Question4';
import Question5 from './E-Exam/Question5';
import Question6 from './E-Exam/Question6';
import Question7 from './E-Exam/Question7';
import Question8 from './E-Exam/Question8';
import Question9 from './E-Exam/Question9';
import Question10 from './E-Exam/Question10';
import Question11 from './E-Exam/Question11';
import Question12 from './E-Exam/Question12';
import Question13 from './E-Exam/Question13';
import Question14 from './E-Exam/Question14';
import Question15 from './E-Exam/Question15';
import Question16 from './E-Exam/Question16';
import Question17 from './E-Exam/Question17';
import Question18 from './E-Exam/Question18';
import Question19 from './E-Exam/Question19';
import Question20 from './E-Exam/Question20';


function App() {
  const[question,setquestion]=useState( 1 )
  const[answeredQuestion,setansweredQuestion]=useState(0)
  const[answered,setanswered]=useState(false)
  const [q1_id, setq1_id] = useState('')
  const[answered2,setanswered2]=useState(false)
  const[answeredincrement,setansweredincrement]=useState(null)
  const[answeredincrement2,setansweredincrement2]=useState(null)
  // const[answered2,setanswered2]=useState(false)
  const [BackgroundColor,setBackgroundColor]=useState('null')
 
  const handleState=(param)=>{
    setquestion(param)
  }
  console.log(answered)
  const answer1=(param)=>{
    setanswered(param)
  console.log(answered)
    // if(answered){
    //    setansweredQuestion(answeredQuestion + 1)
    // }

    // while(answered===true){
    // }
    // setansweredQuestion(1)
  }
  const answer2=(param)=>{
    setanswered2(param)
    setansweredincrement( 2 )
    if(answeredincrement2 === 2 ){
      setansweredQuestion(answeredQuestion +1)
    }
    // setansweredQuestion(answeredQuestion +1)
    // setansweredQuestion(1)
  }
  console.log(answeredQuestion)
  console.log(q1_id)
  console.log(answered)

  const handleAnsweredId=(param)=>{
      setq1_id(param)
  }
  const nextBtn=()=>{
    if(question ===20 ){
      setquestion(20)
    }else{
      setquestion(question + 1)
    }
  }
  const previousBtn=()=>{
    if(question ===1){
      setquestion(1)
    }else{
      setquestion(question - 1)
    }
  }
  return (
    <Fragment >
      <div className="body">
        <Navbar/>
        <div style={{margin:'auto',marginTop:'2rem',display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',width:'90%',height:'80vh',background:'wheat',boxShadow:"1px 3px 3px grey"}}>
          <div onClick={previousBtn}>jhdfl;kad</div>
          {question=== 1 && <Question1 q1_id={q1_id} handleAnsweredId={handleAnsweredId} answer1={answer1}/> }
          {question=== 2 && <Question2  answer2={answer2}/>}
          {question=== 3 && <Question3 />}
          {question=== 4 && <Question4/>}
          {question=== 5 && <Question5/>}
          {question=== 6 && <Question6/>}
          {question=== 7 && <Question7/>}
          {question=== 8 && <Question8/>}
          {question=== 9 && <Question9/>}
          {question=== 10 && <Question10/>}
          {question=== 11 && <Question11/>}
          {question=== 12 && <Question12/>}
          {question=== 13 && <Question13/>}
          {question=== 14 && <Question14/>}
          {question=== 15 && <Question15/>}
          {question=== 16 && <Question16/>}
          {question=== 17 && <Question17/>}
          {question=== 18 && <Question18/>}
          {question=== 19 && <Question19/>}
          {question=== 20 && <Question20/>}
          <div onClick={nextBtn}>jhdfl;kad</div>
          <Timer answeredQuestion={answeredQuestion} />
        </div>       
        <div className="quest"  style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'2rem'}}>
            <button className={answered ? 'green':'blue'}  style={{ cursor:'pointer',marginLeft:'0.25rem',borderRadius:'0rem 0.4rem 0rem 0.4rem',outline:'none',boxShadow:'0.5px 2px 2px grey'}}  onClick={(e)=>{handleState( 1 )}}>1</button>
            <button className={answered2 ? 'green':'blue'}   onClick={()=>{handleState( 2 )}}>2</button>
            <button    onClick={()=>{handleState( 3 )}}>3</button>
            <button    onClick={()=>{handleState( 4 )}}>4</button>
            <button    onClick={()=>{handleState( 5 )}}>5</button>
            <button    onClick={()=>{handleState( 6 )}}>6</button>
            <button    onClick={()=>{handleState( 7 )}}>7</button>
            <button    onClick={()=>{handleState( 8 )}}>8</button>
            <button    onClick={()=>{handleState( 9 )}}>9</button>
            <button    onClick={()=>{handleState( 10 )}}>10</button>
            <button    onClick={()=>{handleState( 11 )}}>11</button>
            <button    onClick={()=>{handleState( 12 )}}>12</button>
            <button    onClick={()=>{handleState( 13 )}}>13</button>
            <button    onClick={()=>{handleState( 14 )}}>14</button>
            <button    onClick={()=>{handleState( 15 )}}>15</button>
            <button    onClick={()=>{handleState( 16 )}}>16</button>
            <button    onClick={()=>{handleState( 17 )}}>17</button>
            <button    onClick={()=>{handleState( 18 )}}>18</button>
            <button    onClick={()=>{handleState( 19)}}>19</button>
            <button    onClick={()=>{handleState( 20 )}}>20</button>
        </div> 
        {/* <QuestionContainer answer1={answered} handleState={handleState}/> */}
      </div>
    </Fragment>
    
  );
}

export default App;
