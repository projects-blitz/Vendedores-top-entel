import React from 'react'
import { motion } from 'framer-motion'
import LoadingSkeleton from './LoadingSkeleton'

export default function KPI({ title, value, subtitle, loading }){
  return (
    <motion.div initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, ease: 'easeOut' }} className="card">
      {loading ? (
        <LoadingSkeleton rows={2} />
      ) : (
        <>
          <div className="text-sm text-gray-500 dark:text-gray-300">{title}</div>
          <div className="text-2xl font-semibold mt-2">{value}</div>
          {subtitle && <div className="text-xs text-gray-400 mt-1">{subtitle}</div>}
        </>
      )}
    </motion.div>
  )
}
