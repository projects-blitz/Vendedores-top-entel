import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { motion } from 'framer-motion'
import LoadingSkeleton from '../LoadingSkeleton'

export default function SalesByAdvisor({ data, loading }){
  return (
    <motion.div initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }} className="card">
      <h3 className="font-semibold mb-2">Ventas por Asesor</h3>
      {loading ? (
        <LoadingSkeleton rows={6} />
      ) : (
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={data}>
              <XAxis dataKey="asesor" />
              <YAxis />
              <Tooltip formatter={(v)=> new Intl.NumberFormat().format(v)} />
              <Bar dataKey="ventas" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </motion.div>
  )
}
