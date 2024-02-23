import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
function Play() {

  let [playCred, setplayCred] = useState(0)
  let [userScore, setUserScore] = useState(0)
  let [compScore, setCompScore] = useState(0)
  let random = Math.round(Math.random() * 2);
  let bestof = 3;
  let [displayText, setDisplayText] = useState('choose your move')
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
    if (playCred >= bestof) { setDisplayText("limit reached") }
    else {
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


  function updateStyles(compMove) {

    if (compMove == 'rock') {
      document.querySelector(`.crock`).style.backgroundColor = 'black'
      document.querySelector(`.cpaper`).style.backgroundColor = ''
      document.querySelector(`.cscissors`).style.backgroundColor = ''
    }
    if (compMove == 'paper') {
      document.querySelector(`.crock`).style.backgroundColor = ''
      document.querySelector(`.cpaper`).style.backgroundColor = 'black'
      document.querySelector(`.cscissors`).style.backgroundColor = ''
    }

    if (compMove == 'scissors') {
      document.querySelector(`.crock`).style.backgroundColor = ''
      document.querySelector(`.cpaper`).style.backgroundColor = ''
      document.querySelector(`.cscissors`).style.backgroundColor = 'black'
    }


  }



  function handleRock() {
    let random = Math.round(Math.random() * 2);

    if (random == 0) {
      updateStyles('rock')
      evalScore('draw')
    }

    if (random == 1) {
      updateStyles('paper')
      evalScore('loose')
    }

    if (random == 2) {
      updateStyles('scissors')
      evalScore('win')
    }

  }



  function handlePaper() {
    let random = Math.round(Math.random() * 2);

    if (random == 0) {
      updateStyles('rock')
      evalScore('win')
    }

    if (random == 1) {
      updateStyles('paper')
      evalScore('draw')
    }
    if (random == 2) {
      updateStyles('scissors')
      evalScore('loose')
    }

  }



  function handleScissors() {
    let random = Math.round(Math.random() * 2);

    if (random == 0) {
      updateStyles('rock')
      evalScore('loose')
    }

    if (random == 1) {
      updateStyles('paper')
      evalScore('win')
    }
    if (random == 2) {
      updateStyles('scissors')
      evalScore('draw')
    }

  }






  return (
    <div className='Play w-screen h-fit lg:h-screen flex  justify-center items-center p-[8rem]'>


      <div className='w-[80rem] h-fit lg:h-[40rem] lg:flex-row flex-col flex justify-between items-center '>

        <div className='playSec huBg w-[15rem] lg:w-[20rem] h-fit lg:h-full bg-black rounded-lg'>

          <div onClick={handleClick} className='icon h-[33%] w-full text-[5rem] lg:text-[8rem] flex justify-center items-center'>🤜</div>
          <div onClick={handleClick} className='icon h-[33%] w-full text-[5rem] lg:text-[8rem] flex justify-center items-center'>✋</div>
          <div onClick={handleClick} className='icon h-[33%] w-full text-[5rem] lg:text-[8rem] flex justify-center items-center'>✌️</div>

        </div>



        <div className=' w-[15rem] h-fit lg:h-full  rounded-lg flex flex-col justify-center items-center'>

          <Link to='/'>
            <button className="button-89 m-3" role="button">Back</button></Link>

          <h1 className='font text-white text-[1.5rem] lg:text-[2.5rem] text-nowrap'>{displayText}</h1>

          <div className='scoreCounter font text-white  text-nowrap flex flex-col justify-center items-center'><p className='text-[1.5rem] lg:text-[2.5rem]'>score is :-</p><h1 className='text-[2rem] lg:text-[3.5rem]'>{userScore}-{compScore}</h1></div>

        </div>



        <div className='playSec compBg w-[15rem] lg:w-[20rem] h-fit lg:h-full bg-black rounded-lg'>

          <div className='rounded-lg crock iconC h-[33%] w-full text-[5rem] lg:text-[8rem] flex justify-center items-center'>🤛</div>
          <div className='rounded-lg cpaper iconC h-[33%] w-full text-[5rem] lg:text-[8rem] flex justify-center items-center'>✋</div>
          <div className='rounded-lg cscissors iconC h-[33%] w-full text-[5rem] lg:text-[8rem] flex justify-center items-center'>✌️</div>

        </div>

      </div>





    </div>
  )
}

export default Play