import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Play() {

  let [playCred, setplayCred] = useState(0)
  let [userScore, setUserScore] = useState(0)
  let [compScore, setCompScore] = useState(0)
  let random = Math.round(Math.random() * 2);
let bestof = 3;
let [displayText, setDisplayText] =useState('choose your move')
  function handleClick(e) {

    setplayCred(playCred + 1)

    if (e.target.innerText == '🤜') {

      handleRock()
    }
    if (e.target.innerText == '✋') {

      handlePaper()
    }
    if (e.target.innerText == '✌️') {

      handleScissors()
    }

  }

  function evalScore(result) {
if(playCred >= bestof){setDisplayText("limit reached")}
else{
    if (result == 'draw') { setDisplayText("snap!, its a draw") }
    else if (result == 'win') { 
      setDisplayText("you win, choose next")
      setUserScore(userScore + 1) 
    }
    else if (result == 'loose') { 
      setDisplayText("you loose, choose next")
      setCompScore(compScore + 1) 
    }
}
  }

  function handleRock() {
    let random = Math.round(Math.random() * 2);

    if (random == 0) {
      evalScore('draw')
    }

    if (random == 1) {
      evalScore('loose')
    }

    if (random == 2) {
      evalScore('win')
    }

  }



  function handlePaper() {
    let random = Math.round(Math.random() * 2);

    if (random == 0) {
      evalScore('win')
    }

    if (random == 1) {
      evalScore('draw')
    }
    if (random == 2) {
      evalScore('loose')
    }

  }



  function handleScissors() {
    let random = Math.round(Math.random() * 2);

    if (random == 0) {
      evalScore('loose')
    }

    if (random == 1) {
      evalScore('win')
    }
    if (random == 2) {
      evalScore('draw')
    }

  }






  return (
    <div className='Play w-screen h-fit lg:h-screen flex  justify-center items-center p-[8rem]'>


      <div className='w-[80rem] h-fit lg:h-[40rem] lg:flex-row flex-col flex justify-between items-center '>

        <div className='playSec huBg w-[20rem] h-fit lg:h-full bg-black rounded-lg'>

          <div onClick={handleClick} className='icon h-[33%] w-full text-[5rem] lg:text-[8rem] flex justify-center items-center'>🤜</div>
          <div onClick={handleClick} className='icon h-[33%] w-full text-[5rem] lg:text-[8rem] flex justify-center items-center'>✋</div>
          <div onClick={handleClick} className='icon h-[33%] w-full text-[5rem] lg:text-[8rem] flex justify-center items-center'>✌️</div>

        </div>



        <div className=' w-[30rem] h-fit lg:h-full  rounded-lg flex flex-col justify-center items-center'>

        <Link to='/'>
  <button class="button-89 m-3" role="button">Back</button></Link>

          <h1 className='font text-white text-[1.5rem] lg:text-[2.5rem] text-nowrap'>{displayText}</h1>

          <div className='scoreCounter font text-white  text-nowrap flex flex-col justify-center items-center'><p className='text-[1.5rem] lg:text-[2.5rem]'>score is :-</p><h1 className='text-[2rem] lg:text-[3.5rem]'>{userScore}-{compScore}</h1></div>

        </div>



        <div className='playSec compBg w-[20rem] h-fit lg:h-full bg-black rounded-lg'>

          <div className='iconC h-[33%] w-full text-[5rem] lg:text-[8rem] flex justify-center items-center'>🤛</div>
          <div className='iconC h-[33%] w-full text-[5rem] lg:text-[8rem] flex justify-center items-center'>✋</div>
          <div className='iconC h-[33%] w-full text-[5rem] lg:text-[8rem] flex justify-center items-center'>✌️</div>

        </div>

      </div>





    </div>
  )
}

export default Play