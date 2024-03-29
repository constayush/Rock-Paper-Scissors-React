import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
function Play() {
  let loco = useLocation();
  let [playCred, setplayCred] = useState(0)
  let [userScore, setUserScore] = useState(0)
  let [compScore, setCompScore] = useState(0)
  let bestof = loco.state;
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
    if (playCred >= bestof) {

      if (userScore > compScore) { setDisplayText("limit reached, you WON!") }


      if (userScore < compScore) { setDisplayText("limit reached, you Loose!") }


      if (userScore == compScore) { setDisplayText("limit reached, its a draw!") }


    } else {
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
    <div className='Play w-screen h-screen lg:h-screen flex flex-col lg:flex-row justify-center items-center p-[8rem]'>


      <div className='w-fit h-fith-fit lg:h-[40rem] flex lg:flex-row flex-row  gap-[1.5rem] justify-between items-center '>

        <div className='playSec huBg w-[7rem] lg:w-[20rem] h-fit lg:h-full bg-black rounded-lg'>

          <div onClick={handleClick} className='icon h-[33%] w-full text-[3rem] lg:text-[8rem] flex justify-center items-center'>🤜</div>
          <div onClick={handleClick} className='icon h-[33%] w-full text-[3rem] lg:text-[8rem] flex justify-center items-center'>✋</div>
          <div onClick={handleClick} className='icon h-[33%] w-full text-[3rem] lg:text-[8rem] flex justify-center items-center'>✌️</div>

        </div>




        <div className='hidden scoreCounter font text-white  text-nowrap lg:flex flex-col justify-center items-center '>

          <h1 className='font text-white text-[1.2rem] lg:text-[2.5rem] text-nowrap'>{displayText}</h1>
          <p className='text-[1.5rem] lg:text-[2.5rem]'>score is :-</p>
          <h1 className='text-[2rem] lg:text-[3.5rem]'>{userScore}-{compScore}</h1>
          <Link className='hidden lg:block' to='/'>
            <button className="button-89 m-3" role="button">Back</button></Link>

        </div>



        <div className='playSec compBg w-[7rem] lg:w-[20rem] h-fit lg:h-full bg-black rounded-lg'>

          <div className='rounded-lg crock iconC h-[33%] w-full text-[3rem] lg:text-[8rem] flex justify-center items-center'>🤛</div>
          <div className='rounded-lg cpaper iconC h-[33%] w-full text-[3rem] lg:text-[8rem] flex justify-center items-center'>✋</div>
          <div className='rounded-lg cscissors iconC h-[33%] w-full text-[3rem] lg:text-[8rem] flex justify-center items-center'>✌️</div>

        </div>



      </div>

      <div className=' lg:hidden scoreCounter font text-white  text-nowrap flex flex-col justify-center items-center mt-[1rem]'>
        <h1 className='font text-white text-[1.2rem] lg:text-[2.5rem] text-nowrap'>{displayText}</h1>
        <p className='text-[1.5rem] lg:text-[2.5rem]'>score is :-</p>
        <h1 className='text-[2rem] lg:text-[3.5rem]'>{userScore}-{compScore}</h1>
        <Link className=' lg:hidden' to='/'>
          <button className="button-89 m-3" role="button">Back</button>
        </Link>

      </div>

    </div>
  )
}

export default Play
