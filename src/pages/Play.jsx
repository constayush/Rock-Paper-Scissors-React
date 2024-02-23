import React from 'react'
import { useState } from 'react'
function Play() {


let [userScore, setUserScore]= useState(0)
let [compScore, setCompScore]= useState(0)
let random = Math.round(Math.random()*2);


function handleClick (e){

if(e.target.innerText == '🤜' ){

 handleRock()
}
if(e.target.innerText == '✋' ){

  handlePaper()
}
if(e.target.innerText == '✌️' ){

  handleScissors()
}

}


function handleRock(){
  let random = Math.round(Math.random()*2);
 
  if(random ==0) {

    console.log("draw")
  } 

  if(random ==1) {
    setCompScore(compScore +1)
  } 
  if(random ==2) {

    setUserScore(userScore +1)
  } 

}

function handlePaper(){
  let random = Math.round(Math.random()*2);
 
  if(random ==0) {

    setUserScore(userScore +1)
  } 

  if(random ==1) {

    console.log("draw")
  } 
  if(random ==2) {

    setCompScore(compScore +1)
  } 

}

function handleScissors(){
  let random = Math.round(Math.random()*2);
 
  if(random ==0) {

    setCompScore(compScore +1)
  } 

  if(random ==1) {
    setUserScore(userScore +1)
  } 
  if(random ==2) {

    console.log("draw")
  } 

}






  return (
    <div className='Play w-screen h-screen flex justify-center items-center p-[8rem]'>


<div className='w-[80rem] h-[40rem]  flex justify-between items-center '>

<div className='playSec huBg w-[20rem] h-full bg-black rounded-lg'>

<div onClick={handleClick} className='icon h-[33%] w-full text-[8rem] flex justify-center items-center'>🤜</div>
<div onClick={handleClick} className='icon h-[33%] w-full text-[8rem] flex justify-center items-center'>✋</div>
<div onClick={handleClick} className='icon h-[33%] w-full text-[8rem] flex justify-center items-center'>✌️</div>

</div>



<div className=' w-[30rem] h-full  rounded-lg flex flex-col justify-center items-center'>

<h1 className='font text-white text-[2.5rem] text-nowrap'>Choose your move!</h1> 

<div className='scoreCounter font text-white  text-nowrap flex flex-col justify-center items-center'><p className='text-[2.5rem]'>score is :-</p><h1 className='text-[3.5rem]'>{userScore}-{compScore}</h1></div>

</div>



<div className='playSec compBg w-[20rem] h-full bg-black rounded-lg'>

<div className='iconC h-[33%] w-full text-[8rem] flex justify-center items-center'>🤛</div>
<div className='iconC h-[33%] w-full text-[8rem] flex justify-center items-center'>✋</div>
<div className='iconC h-[33%] w-full text-[8rem] flex justify-center items-center'>✌️</div>

</div>

</div>





    </div>
  )
}

export default Play