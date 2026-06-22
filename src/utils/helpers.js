export function totalSales(data){
  return data.reduce((s, r) => s + (Number(r.ventas) || 0), 0)
}

export function totalCommissions(data){
  return data.reduce((s, r) => s + (Number(r.comision) || 0), 0)
}

export function avgCompliance(data){
  if(!data.length) return 0
  const sum = data.reduce((s,r)=> s + (Number(r.cumplimiento)||0),0)
  return sum / data.length
}

export function groupByAdvisor(data){
  const map = {}
  data.forEach(r =>{
    if(!map[r.asesor]) map[r.asesor] = { asesor: r.asesor, ventas:0, cumplimientoSum:0, count:0 }
    map[r.asesor].ventas += Number(r.ventas)||0
    map[r.asesor].cumplimientoSum += Number(r.cumplimiento)||0
    map[r.asesor].count +=1
  })
  return Object.values(map).map(v=> ({ asesor: v.asesor, ventas: v.ventas, cumplimiento: v.cumplimientoSum / v.count }))
}

export function groupByProduct(data){
  const map = {}
  data.forEach(r=>{
    if(!map[r.producto]) map[r.producto] = { producto: r.producto, ventas:0 }
    map[r.producto].ventas += Number(r.ventas)||0
  })
  return Object.values(map)
}
