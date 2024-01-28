
import React, { useState } from 'react';
import "./App.css"
const generateRandomString = (length) =>{

  const deyisenler = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=';

  let cavab = ""

  for(let i=0 ; i<length ; i++){
    const randomIndex = Math.floor(Math.random() * deyisenler.length)
    cavab = cavab + deyisenler[randomIndex]
  }
  return cavab;
}

const GeneratePassword = ()=>{
  
    const [password, setPassword] = useState('')
    const [passwordLength , setPasswordLength] = useState('')



  const uzunluguTap = (e) =>{
    setPasswordLength(e.target.value)
  }
  const koduYarat = () =>{
    setPassword(generateRandomString(passwordLength))
  }

  return(

    <div className='container'>
      <div className='password'>
        <input type='number' value={passwordLength} onChange={uzunluguTap}></input>
        <button onClick={koduYarat}>Kodu Gosder</button>
      </div>
      <h1>Parolunuz : {password}</h1>
    </div>
  )
}

export default GeneratePassword