import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Sidebar(){
  const [collapsed, setCollapsed] = useState(false)
  const loc = useLocation()

  return (
    <motion.aside initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ duration:0.5 }} className="card h-full">
      <div className="flex flex-col h-full">
        <button onClick={()=>setCollapsed(c=>!c)} className="mb-4 text-sm px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">{collapsed ? '>' : '<'}</button>
        <nav className="flex flex-col gap-3">
          <Link to="/dashboard" className={`p-3 rounded ${loc.pathname === '/dashboard' ? 'bg-blue-50 dark:bg-blue-900' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`}>Dashboard</Link>
        </nav>
        <div className="mt-auto text-xs text-gray-400 dark:text-gray-300">Demo Sidebar</div>
      </div>
    </motion.aside>
  )
}
