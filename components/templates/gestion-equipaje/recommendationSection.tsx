import React from "react"
import RecommendationTable from "components/organisms/gestion-equipaje/recommendationTable"

const RecommendationSection = () => {
  return (
    <div>
      <h1 className="bg-cyan-500 px-12 py-6 text-3xl font-light text-white">Antes de volar ten en cuenta</h1>
      <RecommendationTable />
    </div>
  )
}

export default RecommendationSection
