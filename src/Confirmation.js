import React from 'react'

const Confirmation = ({handlePage,setconfirmation, answeredQuestion}) => {
    const ConfirmButton=()=>{
        setconfirmation(false)
        handlePage('Congratulations')

    }
  return (
    <div className='Confirmation'>
       <header>
        <div className='confirmImg'><img src="../image/warning.png" alt="" /></div>
          <h2>Confirmation</h2>
       </header>
        {/* <hr /> */}
        <p>you have answered {answeredQuestion} out of 20 do you wish to submit?</p>
       <div className="btnContainer">
       <button className='yes' onClick={()=>ConfirmButton()}>yes</button>
        <button className='no' onClick={()=>setconfirmation(false)}>no</button>
       </div>
    </div>
  )
}

export default Confirmation