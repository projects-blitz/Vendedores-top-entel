import React, { useMemo, useState, useEffect } from 'react'
import { salesData } from '../data/salesData'
import { totalSales, avgCompliance, groupByAdvisor, groupByProduct, totalCommissions } from '../utils/helpers'
import KPI from '../components/KPI'
import Filters from '../components/Filters'
import SalesByAdvisor from '../components/charts/SalesByAdvisor'
import ComplianceByAdvisor from '../components/charts/ComplianceByAdvisor'
import SalesByProduct from '../components/charts/SalesByProduct'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

export default function Dashboard(){
  const [selectedAdvisor, setSelectedAdvisor] = useState('')
  const [loading, setLoading] = useState(true)

  const advisors = useMemo(()=> [...new Set(salesData.map(s=>s.asesor))], [])

  const filtered = useMemo(()=>{
    return salesData.filter(r => selectedAdvisor ? r.asesor === selectedAdvisor : true)
  },[selectedAdvisor])

  useEffect(()=>{
    setLoading(true)
    const t = setTimeout(()=> setLoading(false), 600)
    return ()=> clearTimeout(t)
  },[selectedAdvisor])

  const kpiTotal = useMemo(()=> totalSales(filtered), [filtered])
  const kpiCompliance = useMemo(()=> avgCompliance(filtered), [filtered])
  const kpiCommissions = useMemo(()=> totalCommissions(filtered), [filtered])

  const byAdvisor = useMemo(()=> groupByAdvisor(filtered), [filtered])
  const byProduct = useMemo(()=> groupByProduct(filtered), [filtered])

  return (
    <div className="min-h-screen">
      <div className="p-6">
        <Navbar />
      </div>
      <div className="p-6 grid grid-cols-1 lg:grid-cols-6 gap-6">
        <div className="lg:col-span-1">
          <Sidebar />
        </div>
        <div className="lg:col-span-5 space-y-6">
          <Filters advisors={advisors} selectedAdvisor={selectedAdvisor} onChangeAdvisor={setSelectedAdvisor} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <KPI title="Ventas totales" value={new Intl.NumberFormat('es-CL',{style:'currency', currency:'CLP'}).format(kpiTotal)} loading={loading} />
            <KPI title="Cumplimiento promedio" value={(kpiCompliance*100).toFixed(1) + '%'} loading={loading} />
            <KPI title="Total comisiones" value={new Intl.NumberFormat('es-CL',{style:'currency', currency:'CLP'}).format(kpiCommissions)} loading={loading} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-2"><SalesByAdvisor data={byAdvisor} loading={loading} /></div>
            <div><SalesByProduct data={byProduct} loading={loading} /></div>
          </div>

          <div>
            <ComplianceByAdvisor data={byAdvisor} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  )
}
