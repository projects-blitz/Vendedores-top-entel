import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { motion } from 'framer-motion'
import LoadingSkeleton from '../LoadingSkeleton'

const COLORS = ['#3b82f6','#06b6d4','#f97316','#ef4444','#8b5cf6']

export default function SalesByProduct({ data, loading }){
  return (
    <motion.div initial={{ opacity:0, y:6 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }} className="card">
      <h3 className="font-semibold mb-2">Ventas por Producto</h3>
      {loading ? (
        <LoadingSkeleton rows={6} />
      ) : (
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <PieChart>
              <Pie data={data} dataKey="ventas" nameKey="producto" cx="50%" cy="50%" outerRadius={90} label>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(v)=> new Intl.NumberFormat().format(v)} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}
    </motion.div>
  )
}
