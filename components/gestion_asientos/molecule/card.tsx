import React, { useEffect, useState } from "react"

interface SelectionSuccessProps {
  onClose: () => void
  status: boolean
}

const SelectionSuccess: React.FC<SelectionSuccessProps> = ({ onClose, status }) => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
      onClose()
    }, 2000)

    return () => clearTimeout(timer)
  }, [onClose])

  if (!show) return null

  return (
    <div className="seleccionar_asiento-overlay mb-4 ml-4 mr-4 mt-4">
      <div className="seleccionar_asiento-content flex flex-col items-center">
        <div
          className={`mb-4 h-12 w-12 rounded-full ${status ? "bg-green-600" : "bg-red-500"}`}
          style={{ display: "flex", alignItems: "center", justifyContent: "center" }}
        ></div>
        <h3 className="text-base">{status ? "Selección Exitosa" : "El asiento está ocupado"}</h3>
      </div>
    </div>
  )
}

export default SelectionSuccess
