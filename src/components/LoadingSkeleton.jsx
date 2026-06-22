import React from 'react'

export default function LoadingSkeleton({ rows = 3 }){
  return (
    <div className="space-y-3">
      {Array.from({ length: rows }).map((_,i)=> (
        <div key={i} className="skeleton rounded-md h-6 w-full"></div>
      ))}
    </div>
  )
}
