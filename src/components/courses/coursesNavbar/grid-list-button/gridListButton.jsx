import React from 'react'
import { CiGrid2H, CiGrid41 } from 'react-icons/ci'

const GridListButton = ({setViewMode,viewMode}) => {
  return (
    <div className="hidden lg:flex items-center w-auto h-10 pl-3 text-3xl text-gray border-l space-x-2">
    <CiGrid41
      onClick={() => setViewMode("list")}
      className={`hover:text-navyBlue ${
        viewMode === "list" ? "text-navyBlue" : ""
      }`}
    />
    <CiGrid2H
      onClick={() => setViewMode("grid")}
      className={`hover:text-navyBlue ${
        viewMode === "grid" ? "text-navyBlue" : ""
      }`}
    />
  </div>
  )
}

export default GridListButton