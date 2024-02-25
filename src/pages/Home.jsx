import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
function Home() {

let [selectText, setSelectText] = useState("select no. of rounds")
let [bestof, setBestof] = useState(1)


  function handleClick(e){
    setBestof(Number(e.target.innerText))
    setSelectText(`no. of rounds ${e.target.innerText}`)
  }


  return (
    <div className='Home w-screen h-screen flex flex-col justify-between items-center p-[8rem]' >


      <h1 className='mainHome text-[1.5rem] lg:text-[6rem] font text-[#fff] text-nowrap'>Rock Paper Scissors!</h1>



      <div className='configsSec flex flex-col lg:flex-row gap-4 m-4'>



        <h1 className='font font-bold text-[1.8rem] text-[white]'>Best of?</h1>

        <div className='flex gap-2'>
          <button onClick={handleClick} className='bestOfBtn text-white text-[1.8rem] font-bold border-[1px] rounded-full w-[3rem] h-[3rem] flex items-center justify-center'>1</button>
          <button onClick={handleClick} className='bestOfBtn text-white text-[1.8rem] font-bold border-[1px] rounded-full w-[3rem] h-[3rem] flex items-center justify-center'>3</button>
          <button onClick={handleClick} className='bestOfBtn text-white text-[1.8rem] font-bold border-[1px] rounded-full w-[3rem] h-[3rem] flex items-center justify-center'>5</button>
          <button onClick={handleClick} className='bestOfBtn text-white text-[1.8rem] font-bold border-[1px] rounded-full w-[3rem] h-[3rem] flex items-center justify-center'>7</button>
          <button onClick={handleClick} className='bestOfBtn text-white text-[1.8rem] font-bold border-[1px] rounded-full w-[3rem] h-[3rem] flex items-center justify-center'>10</button>
        </div>
      </div>

<p className='font text-white text-[1rem] text-nowrap lg:text-[1.4rem]'>{selectText}</p>

      <Link state={bestof} to='/play'><div className='playBtn text-[1.5rem] border-[1px] p-4 font-bold'>
        <button className='Pbutton'>
          <div className="text">
            <span>Play</span>


          </div>
          <div className="clone">
            <span>Lets</span>
            <span>go!</span>

          </div>
          <svg
            strokeWidth="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
          >
            <path
              d="M14 5l7 7m0 0l-7 7m7-7H3"
              strokeLinejoin="round"
              strokeLinecap="round"
            ></path>
          </svg>
        </button>
      </div></Link>

<a href='https://www.github.com/constayush' target='_ablank'><p className='text-white text-nowrap'>made by ayush ^_____^</p></a>


    </div>
  )
}

export default Home