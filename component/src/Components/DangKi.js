import React, { useEffect, useState } from 'react'
// import { ReactDOM } from 'react';
export default function Dangki() {
  const [userName, setUserName] = useState ('');
  const [userPass, setUserPass] = useState('');
  const [userConfirm, setUserConfirm] = useState('');
  
  useEffect(() => {
    document.getElementById("usename").focus();
  },[])
  return (
    <div className='register'> 
      <h1> Đăng kí </h1>
      <div className='form'>
        <div>
          <label >Usename</label>
          <input id="usename" type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder='Input username....' />
        </div>
        <div>
        <label >Password</label>
        <input type="password" value={userPass} onChange={(e)=> setUserPass(e.target.value)} placeholder='....' />
        </div>  
        <div>
        <label >Confirm </label>
        <input type="password" value={userConfirm} onChange={(e)=> setUserConfirm(e.target.value)} placeholder='....' />
        </div>
        <div>
        <button type='submit' onClick={ notification}  className="button"> Đăng kí </button>
        </div>
      </div>
    </div>
  )
  function notification(){
    if(userName.length>0 && userPass.length>0 && userConfirm.length>0 && userPass===userConfirm){
      alert("Đăng kí thành công")
    }else{
      alert("Đăng kí không thành công")
    }
    }
}
