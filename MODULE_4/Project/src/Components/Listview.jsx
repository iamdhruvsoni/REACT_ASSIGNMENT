import React from 'react';


const Listview = (props) => {
  const listdata = props.myarray.map((i, index) => {
    return <li className='new' key={index}>{i}</li>
  })
  return (
    <>
      <div className='listdiv'>
        <h3>Render List</h3>
        {/* <input className='inp' type="checkbox" name="" id="" /> */}
        <span class="custom-checkbox"></span>
        {/* <h4> {props.myname}-- {props.id}</h4> */}
        <ul>
          {listdata}
        </ul>
      </div>

    </>
  )
}
export default Listview;








