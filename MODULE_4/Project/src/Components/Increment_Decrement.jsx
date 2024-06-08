import React, { useState } from 'react';
import "./Inc.css";

const Increment_Decrement = () => {
    const [count,setcount] = useState(0);

  return (
    <>
   <div className='incdiv'>
    <h1 style={{color:'white',marginTop:'170px'}}>React Web</h1>
    <h1>{count}</h1>
    <div className='btn'>
    <button className='inc' onClick={()=>setcount(count+1)}>Increment</button>
    <button className='dec' onClick={()=>setcount(count-1)}>Decrement</button>
    </div>
    <div className='Reset'>
    <button className='res' onClick={()=>setcount(0)}>Reset</button>
    </div>
    <hr />
    </div>
  
    </>
  )
}

export default Increment_Decrement