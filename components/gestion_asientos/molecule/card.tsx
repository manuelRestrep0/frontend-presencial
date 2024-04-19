import React, { useState, useEffect } from "react";

interface SelectionSuccessProps {
  onClose: () => void;
  status: boolean;
}

const SelectionSuccess: React.FC<SelectionSuccessProps> = ({ onClose,status }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      onClose(); 
    }, 2000); 

    return () => clearTimeout(timer);
  }, [onClose]);

  if (!show) return null;

  return (
    <div className="seleccionar_asiento-overlay mt-4 mb-4 mr-4 ml-4">
      <div className="seleccionar_asiento-content items-center flex flex-col">
        <div
          className={`w-12 h-12 rounded-full mb-4 ${
            status ? "bg-green-600" : "bg-red-500"}`}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        </div>
        <h3 className="text-base">{status ? "Selección Exitosa" : "El asiento está ocupado"}</h3>
      </div>
    </div>
  );
  
};

export default SelectionSuccess;
