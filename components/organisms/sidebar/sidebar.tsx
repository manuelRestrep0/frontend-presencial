import React from "react";

interface SideBarOptionProps {
  img?: string;
  name: string;
}

function SideBarOption(props: SideBarOptionProps) {
  return (
    <div className="SideBar-Options-Box flex justify-end p-2 hover:text-blue-500 ">
      {props.img && <img src={props.img} className="w-6 h-6 mr-2" alt="Icon" />}
      <p>{props.name}</p>
    </div>
  );
}


function SideBar() {
  return (
    <div className="SideBar bg-white shadow-xl text-black w-64 flex flex-col justify-center">
  <div className="SideBar-Title p-4 text-center mb-4">
    <h3 className="text-6xl font-semibold">Gestión de vuelos</h3>
  </div>
  <div className="SideBar-Options space-y-1 justify-end text-3xl">
    <SideBarOption name="+ Registrar" />
    <SideBarOption name="Consultar" />
    <SideBarOption name="Modificar" />
    <SideBarOption name="Eliminar" />
  </div>
</div>



  );
}

export default SideBar;

