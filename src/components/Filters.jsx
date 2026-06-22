import React from 'react'

export default function Filters({ advisors, selectedAdvisor, onChangeAdvisor }){
  return (
    <div className="bg-white dark:bg-gray-800 shadow rounded-xl p-4 flex items-center gap-4">
      <div>
        <label className="text-sm text-gray-500 dark:text-gray-300">Asesor</label>
        <select value={selectedAdvisor} onChange={e=>onChangeAdvisor(e.target.value)} className="mt-1 block w-48 rounded-md border-gray-200 dark:border-gray-700 p-2 bg-white dark:bg-gray-900">
          <option value="">Todos</option>
          {advisors.map(a=> <option key={a} value={a}>{a}</option>)}
        </select>
      </div>
      <div className="ml-auto text-gray-400 dark:text-gray-300">Filtro por fecha: (preparado)</div>
    </div>
  )
}
