import React from 'react'

export default function Dangki() {
  return (
    <div className='register'> 
      <h1> Đăng kí </h1>
      <div className='form'>
        <div>
          <label >Usename</label>
          <input type="text" placeholder='Input username....' required/>
        </div>
        <div>
        <label >Password</label>
        <input type="password" placeholder='....' required/>
        </div>  
        <div>
        <label >Confirm </label>
        <input type="password" placeholder='....' required/>
        </div>
        <div>
        <button type='submit' onClick={ notification} className="button"> Đăng kí </button>
        </div>
      </div>
    </div>
  )
  function notification(){
    return(
      alert("Đăng kí thành công")
    ) 
    }
}
