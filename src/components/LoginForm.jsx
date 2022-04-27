import React, { useState } from 'react';

const LoginForm = () => {
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [mail, setMail] = useState('')
  const [validation, setValidation] = useState(true)
  const [text,setText] = useState('')

  function valid(e) {
   e.preventDefault()
   if(password === password2){
   setValidation(false)
   setText("")
   }else {
     setText('Введите совпадающие пароли :)')
   } 
  }
  function exit(e) {
   e.preventDefault()
   setValidation(true)
   text=''
  }
  return (
    
      <div>
      {validation ? (<form action = "" className = 'loginForm' >
    <div className='loginForm_inp'>
      <input onChange={(e) => setMail(e.target.value)} type="email" placeholder='Email' />
      <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Пароль' />
      <input onChange={(e) => setPassword2(e.target.value)} type="password" placeholder='Подтверждение пароля' />
      {password !== password2 && <span>Пароли не совпадают</span>}
      <span>{text}</span>
    </div>
    <button onClick={valid}>Войти</button>
    <button onClick={exit} >Выйти</button>
  </form >) : (
    <div className='loginFormfalse'>
  <div>Ваш Email:{mail}</div>
    <button onClick={exit} >Выйти</button>
    </div>
    )}
  </div>
  );
};

export default LoginForm;