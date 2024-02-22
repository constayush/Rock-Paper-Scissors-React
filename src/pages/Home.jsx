import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className='Home w-screen h-screen flex flex-col justify-between items-center p-[8rem]' >


<h1 className='mainHome text-[6rem] font text-[#fff]'>Rock Paper Scissors!</h1>



<div className='configsSec flex gap-4'>



<h1 className='font font-bold text-[1.8rem] text-[white]'>Best of?</h1> 

<div className='bestOfBtn text-white text-[1.8rem] font-bold border-[1px] rounded-full w-[3rem] h-[3rem] flex items-center justify-center'>1</div> 
<div className='bestOfBtn text-white text-[1.8rem] font-bold border-[1px] rounded-full w-[3rem] h-[3rem] flex items-center justify-center'>3</div>
<div className='bestOfBtn text-white text-[1.8rem] font-bold border-[1px] rounded-full w-[3rem] h-[3rem] flex items-center justify-center'>5</div>
<div className='bestOfBtn text-white text-[1.8rem] font-bold border-[1px] rounded-full w-[3rem] h-[3rem] flex items-center justify-center'>7</div>
<div className='bestOfBtn text-white text-[1.8rem] font-bold border-[1px] rounded-full w-[3rem] h-[3rem] flex items-center justify-center'>10</div>

</div>



<Link to='/play'><div className='playBtn text-[1.5rem] border-[1px] p-4 font-bold'>
<button>
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




    </div>
  )
}

export default Home