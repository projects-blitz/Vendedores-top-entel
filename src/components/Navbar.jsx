import React from 'react'
import { useTheme } from '../context/ThemeContext'
import { useAuth } from '../context/AuthContext'
import { motion } from 'framer-motion'

export default function Navbar(){
  const { dark, toggle } = useTheme()
  const { user, logout } = useAuth()

  return (
    <motion.div initial={{ opacity:0, y:-8 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }} className="card flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <div className="text-2xl font-extrabold text-blue-600">Vendedores</div>
        <div className="text-sm text-gray-500 dark:text-gray-300">Dashboard comercial</div>
      </div>
      <div className="flex items-center gap-3">
        <button onClick={toggle} className="px-3 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-sm">{dark ? 'Modo oscuro' : 'Modo claro'}</button>
        <div className="text-sm text-gray-700 dark:text-gray-200">{user?.name}</div>
        <button onClick={logout} className="text-sm text-red-500">Salir</button>
      </div>
    </motion.div>
  )
}
