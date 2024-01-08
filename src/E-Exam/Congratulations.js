import React, { useEffect,useState } from 'react'

const Congratulations = ({answers,Page}) => {
  const [Result, setResult] = useState(0)
  const [displayResult, setdisplayResult] = useState(false)
  // to get the users score
  useEffect(()=>{
  let allAnswers= JSON.parse(sessionStorage.getItem('allAnswers'))
  let no=0
  for(let i=0;i<answers.length;i++){
    if(answers[i] === allAnswers[i]){
        no=no + 1
    }
  }
  setResult(no)
  },[])
  const reset=()=>{
    let allAnswers= sessionStorage.getItem('allAnswers')
    if(allAnswers){
      sessionStorage.setItem('allAnswers',JSON.stringify([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]))
    }

  let allAnsweredbtnIdFromSessionStorage= sessionStorage.getItem('answeredBtn')
  if(allAnsweredbtnIdFromSessionStorage?.length){
    sessionStorage.setItem('answeredBtn',JSON.stringify([]))
  }
  Page('home')
  }
  return (
    <div className='Congratulations'>
      <div className="back" onClick={reset}>
        <img src="../image/back.png" alt="" />
      </div>
     <div className="congratsContainer">
         
          <h1 >Congratulations you have successfully submitted your answers</h1>
          {
            displayResult ?
              <h2> {Result} / 20 </h2>
            :
            <button onClick={()=>setdisplayResult(true)}>view score</button>
          }
     </div>
    </div>
  )
}

export default Congratulations