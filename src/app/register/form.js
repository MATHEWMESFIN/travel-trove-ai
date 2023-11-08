'use client'
import { useState } from 'react';

export default function Form() {

    const [ registerEmail, setRegisterEmail ] = useState('');
    const [ registerPassword, setRegisterPassword ] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const account = { registerEmail, registerPassword };
        const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: account.registerEmail,
            password: account.registerPassword
        })
        });
    }
    return (
        <div>
          <h1>Register</h1>
          <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              required
              name="Email" 
              placeholder="Email"
              value={registerEmail}
              onChange={e => setRegisterEmail(e.target.value)} />
  
            <input 
              type="password" 
              required
              name="Password" 
              placeholder="Password"
              value={registerPassword}
              onChange={e => setRegisterPassword(e.target.value)} />
  
            <button type="submit">Register</button>
          </form>
        </div>
      )
}