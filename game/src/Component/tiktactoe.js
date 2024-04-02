import React from  'react';
import './tiktactoe.css';
import circle1 from './Assets/circle1.png'
import cross from './Assets/cross.png'
import  { useState } from "react";

let data=["","","","","","","","",""]

const TikTacToe=()=>{

    let [count,setCount]=useState(0);
    let[lock,setLock]=useState(false);

    const toggle=(e,num)=>{
        if(lock){
            return 0;
        }
        if(count%2===0)
        {
          e.target.innerHTML=`<img class="photo" src="${cross}"></img>`;
          data[num]="x"
          setCount(++count);
        }
        else{
            e.target.innerHTML= `<img class="photo" src="${circle1}"></img>`;
            data[num] = "o";
            setCount(++count);
        }
        //Check for win condition
        checkWinner();

    }
    const  checkWinner=()=>{
        if(data[0]===data[1] && data[1]===data[2] && data[2]!== ""){
            won(data[2])

        }
        else if(data[3]===data[4] && data[4]===data[5] && data[5]!== ""){
          won(data[5])

    }
    else if (data[6] === data[7] && data[7]=== data[8] && data[8] !== ""){
        won(data[8])
    }
    else if (data[0] === data[3] && data[3]=== data[6] && data[6] !== ""){
        won(data[6])
    }
    else if(data[1] === data[4] && data[4]=== data[7] && data[7] !== ""){
        won(data[7])
    }
    else if(data[2] === data[5] && data[5]=== data[8] && data[8] !== ""){
        won(data[8])
    }
    else if(data[0] === data[4] && data[4]=== data[8] && data[8] !== ""){
        won(data[8])
    }
    else if(data[2] === data[4] && data[4]=== data[6] && data[6] !== ""){
        won(data[6])
    }
    
}
    const won=(winner)=>{
        setLock(true);
        if(winner==="x")
        {
           document.getElementsByTagName("span")[1].innerHTML = "X IS WINNER"
        }
        else if(winner==="o")
        {
            document.getElementsByTagName("span")[1].innerHTML = "O IS WINNER"
 
        }
    }
const reset=(set)=>{
   
    setLock(false);
    data=["","","", "", "", "", "", "", ""];
    const boxes = document.querySelectorAll('.boxes');
    boxes.forEach(box => {
        box.innerHTML = "";
    });
    document.getElementsByTagName("span")[1].innerHTML = " "
   

}

    return(
        <div className='container'>
            <h1 className='title'> Tik Tak Toe Game In <span>React</span> </h1>
          <h1><span></span></h1>  
            <div className='board'>
                <div className='row1'>
                <div className='boxes' onClick={(e)=>{toggle(e,0)}}></div>
                <div className='boxes' onClick={(e)=>{toggle(e,1)}}></div>
                <div className='boxes' onClick={(e)=>{toggle(e,2)}}></div>
                </div>
                <div className='row2'>
                <div className='boxes' onClick={(e)=>{toggle(e,3)}}></div>
                <div className='boxes' onClick={(e)=>{toggle(e,4)}}></div>
                <div className='boxes' onClick={(e)=>{toggle(e,5)}}></div>
                </div>
                <div className='row3'>
                <div className='boxes' onClick={(e)=>{toggle(e,6)}}></div>
                <div className='boxes' onClick={(e)=>{toggle(e,7)}}></div>
                <div className='boxes' onClick={(e)=>{toggle(e,8)}}></div>
                </div>
       </div>
       <button className='reset' onClick={()=>{reset()}}>Reset</button>


</div>
    )

}
export default TikTacToe