import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import { motion } from 'framer-motion'
import LoadingSkeleton from '../LoadingSkeleton'

export default function ComplianceByAdvisor({ data, loading }){
  return (
    <motion.div initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }} className="card">
      <h3 className="font-semibold mb-2">Cumplimiento promedio por Asesor</h3>
      {loading ? (
        <LoadingSkeleton rows={6} />
      ) : (
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <BarChart data={data}>
              <XAxis dataKey="asesor" />
              <YAxis tickFormatter={(v)=> (v*100).toFixed(0) + '%'} />
              <Tooltip formatter={(v)=> (v*100).toFixed(2) + '%'} />
              <Bar dataKey="cumplimiento" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </motion.div>
  )
}
