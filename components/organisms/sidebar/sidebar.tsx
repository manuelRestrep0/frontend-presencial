import React from "react";
import { BtnConsultar, BtnEliminar, BtnModificar, BtnRegistrar } from "@components/atoms/buttons";
import { Title } from "@components/atoms/text";


function SideBar() {
  return (
    <div className="SideBar bg-gray-100 shadow-xl text-black w-72 flex flex-col max-h-full justify-center">
  <div className="SideBar-Title p-4 text-center mb-8">
    <Title title="Gestión de vuelos"></Title>
  </div>
  <div className="SideBar-Options space-y-3">

    <div className="flex justify-end">
      <BtnRegistrar/>
    </div>

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

