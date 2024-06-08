import React, { useEffect, useState } from 'react'
import mystyle from '../Mystyle.module.css'

const LifecycleFunction = (props) => {
    const [name,setName] = useState('Dhruv')
    useEffect(()=> {
        setTimeout(() => {
            setName("Testing")
        }, 2000);
        console.log('use Effect called...');
    })

  return (
    <div className={mystyle.abc}>
        <h3>Function based lifecycle</h3>
        <h4>Name is -- {name}</h4>
    </div>
  )
}

export default LifecycleFunction