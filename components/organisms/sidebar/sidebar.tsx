'use client';
import React from "react";
import { BtnConsultar, BtnEliminar, BtnModificar, BtnRegistrar } from "@components/atoms/buttons";
import { Title } from "@components/atoms/text";

interface SideBarProps {
  toggleFlightForm: () => void;
}


function SideBar({ toggleFlightForm }: SideBarProps) {
  return (
    <div className="SideBar bg-gray-100 shadow-xl text-black w-72 flex flex-col h-screen justify-center">
  <div className="SideBar-Title p-4 text-center mb-2">
    <Title title="Gestión de vuelos"></Title>
  </div>
  <div className="SideBar-Options space-y-3">

    <aside>
    <div className="flex justify-end">
      <BtnRegistrar toggleFlightForm={toggleFlightForm}/>
    </div>
    </aside>

    <div className="flex justify-end">
      <BtnConsultar/>
    </div>

    <div className="flex justify-end">
      <BtnModificar/>
    </div>

    <div className="flex justify-end">
      <BtnEliminar/>
    </div>
  
  </div>
</div>



  );
}

export default SideBar;

