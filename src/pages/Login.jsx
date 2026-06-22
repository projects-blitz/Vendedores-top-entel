import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Login(){
  const [email, setEmail] = useState('demo@company.com')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const auth = useAuth()
  const navigate = useNavigate()

  const submit = (e)=>{
    e.preventDefault()
    const res = auth.login({ email, password })
    if(res.ok){
      navigate('/dashboard')
    }else{
      setError(res.message)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.form onSubmit={submit} initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-4">Ingresar</h2>
        <label className="text-sm">Email</label>
        <input value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-2 rounded mb-3 border" />
        <label className="text-sm">Password</label>
        <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full p-2 rounded mb-3 border" />
        {error && <div className="text-sm text-red-500 mb-2">{error}</div>}
        <button className="w-full bg-blue-600 text-white p-2 rounded">Entrar</button>
        <div className="text-xs text-gray-400 mt-2">Usuario demo: demo@company.com / password</div>
      </motion.form>
    </div>
  )
}
