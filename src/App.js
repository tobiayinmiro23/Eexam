import React,{Fragment,useEffect,createContext,useState} from 'react';
import './App.css';
import Container from './E-Exam/Container';
import Congratulations from './E-Exam/Congratulations';
import Confirmation from './Confirmation';
export let contextWrapper=createContext()


function App() {
  const[question,setquestion]=useState( 1 )
  const [answeredBtn, setansweredBtn] = useState('')
  const [confirmation, setconfirmation] = useState(false)
  const [lessThanTenMins, setlessThanTenMins] = useState(false)
  const [page, setpage] = useState('home')
  const answers=['rad4','rad1','rad4','rad2','rad2','rad3','rad4','rad3','rad1','rad2','rad1','rad3','rad2','rad1','rad3','rad2','rad4','rad2','rad2','rad4']
  //function to change the component being rendered 
const handlePage=(param)=>{
    setpage(param)
}
// function to display the function component
const handleConfirmation=(param)=>{
  setconfirmation(param)
}
  //function to change the question being rendered 
  const handleState=(param)=>{
    setquestion(param)
  }


  // for setting the allAnsweredbtnId in the session storage
  let allAnsweredbtnIdFromSessionStorage= sessionStorage.getItem('answeredBtn')
  let allAnsweredbtnId;
  if(allAnsweredbtnIdFromSessionStorage?.length){
    allAnsweredbtnId= JSON.parse(sessionStorage.getItem('answeredBtn')) 
  }else{
    sessionStorage.setItem('answeredBtn',JSON.stringify([]))
  }

  // to loop loop through the ids of answered button and change their background color when the user refreshes the page
  useEffect(()=>{
    if(allAnsweredbtnId?.length > 0 ){
      allAnsweredbtnId?.map(item=>{
        let btnId=document?.getElementById(item)
        btnId.className='green'
      })
     }
  },[])

  
  // for creating an array for all the users answers
  let noOfAnsweredQuestions=JSON.parse(sessionStorage.getItem('answeredBtn')).length
  let allAnswers= sessionStorage.getItem('allAnswers')
  if(allAnswers=== null){
    sessionStorage.setItem('allAnswers',JSON.stringify([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))
  }
  
  // function for storing the users answer id
  const handleAnsweredBtn=(param)=>{
    setansweredBtn(param)
    let listOfAnswerdBtnId= JSON.parse(sessionStorage.getItem('answeredBtn'))
    if(listOfAnswerdBtnId.indexOf(param)!== -1) return
    listOfAnswerdBtnId.push(param)
    sessionStorage.setItem('answeredBtn',JSON.stringify(listOfAnswerdBtnId))
  }
  // to loop loop through the ids of answered button and change their backgroung color
  useEffect(()=>{
    if(answeredBtn !== ''){
    let btnId=document?.getElementById(answeredBtn)
    btnId.className='green'
  }
},[answeredBtn])


// for the next question button
  const nextBtn=()=>{
    if(question ===20 )return
      setquestion(question + 1)
  }
// for the previous question button
  const previousBtn=()=>{
    if(question ===1)return
      setquestion(question - 1)
  }
  return (
    <Fragment >
    <contextWrapper.Provider value={[question,setquestion,previousBtn, nextBtn, handleAnsweredBtn]}>
    <div className="body">
          {page=== 'home' && 
          <div>
            <Container lessThanTenMins={lessThanTenMins} setlessThanTenMins={setlessThanTenMins} question={question} handlePage={handlePage} setconfirmation={setconfirmation} handleConfirmation={handleConfirmation} handleState={handleState} previousBtn={previousBtn}  nextBtn={nextBtn} answeredQuestion={noOfAnsweredQuestions} handleAnsweredBtn={handleAnsweredBtn}/>
          </div>
          }
          {confirmation && <Confirmation handlePage={handlePage} setconfirmation={setconfirmation} answeredQuestion={noOfAnsweredQuestions}/>}
          {page === 'Congratulations' && <Congratulations Page={handlePage} answers={answers} handlePage={handlePage}/>}
      </div>
    </contextWrapper.Provider>
    </Fragment>
    
  );
}

export default App;
