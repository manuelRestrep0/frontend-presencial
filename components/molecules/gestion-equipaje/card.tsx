import React from "react"

export const BaggageCard = ({
  title,
  description,
  information,
}: {
  title: string
  description: string
  information: string
}) => {
  return (
    <div className="  max-w-sm overflow-hidden rounded border border-cyan-500 px-6 py-10 text-center shadow-lg ">
      <h2 className="mb-4 text-center text-2xl font-semibold">{title}</h2>
      <div className="mb-4 text-center">
        <p>{information}</p>
        <p>{description}</p>
      </div>
      <div className="text-center">
        <div className="inline-flex">
          <button className="rounded-l bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400">-</button>
          <button type="button" className="rounded bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400">
            0
          </button>
          <button className="rounded-r bg-gray-300 px-4 py-2 font-bold text-gray-800 hover:bg-gray-400">+</button>
        </div>
      </div>
    </div>
  )
}

export const InfoCard = ({ title }: { title: string }) => {
  return (
    <div className="m-4 block p-6">
      <h2 className="mb-7 text-center text-lg font-light">{title}</h2>
      <div className="space-y-5">
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <p>Lorem ipsum dolor sit amet consectetur</p>
        <p>Lorem ipsum dolor sit amet consectetur</p>
      </div>
    </div>
  )
}

export const RecommendationCard = ({ title }: { title: string }) => {
  return (
    <div className="rounded-2xl border border-cyan-500 bg-white p-3">
      <h3 className="mb-1 font-semibold text-blue-900">{title}</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
    </div>
  )
}
