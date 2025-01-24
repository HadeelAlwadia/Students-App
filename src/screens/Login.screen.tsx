import React, { useContext } from 'react'

import { Role } from '../types';

const Login = () => {


  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userName = e.currentTarget['userName'].value;
    const role = (e.currentTarget['role'] as any).value;
      localStorage.setItem('user-info',JSON.stringify({userName,role}))
      
      localStorage.setItem('students-info',JSON.stringify({
        totalAbsents:0,
        studentsList:[]
      }))
      setTimeout(()=>window.location.href='/',1)

  }


  return (
    <div className="login-screen">
      <p>Please enter your login data</p>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', rowGap: '20px' }}>
        <div>
          <label htmlFor="userName">User Name: </label>
          <input type="text" name="userName" placeholder="Ahmad Saeed" />
        </div>
        <div>
          <label htmlFor="role">Select Role: </label>
          <select name="role">
            <option value={Role.ADMIN}>Admin</option>
            <option value={Role.Teacher}>Teacher</option>
            <option value={Role.GUEST}>Guest</option>
          </select>
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  )
}

export default Login;