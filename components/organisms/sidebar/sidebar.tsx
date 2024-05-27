'use client';
import React from "react";
import { BtnConsultar, BtnRegistrar } from "@components/atoms/buttons";
import { Title } from "@components/atoms/text";

interface SideBarProps {
  toggleFlightForm: () => void;
  toggleSearchPage: () => void;
}

function SideBar({ toggleFlightForm, toggleSearchPage }: SideBarProps) {
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

    <aside>
    <div className="flex justify-end">
      <BtnConsultar toggleSearchPage={toggleSearchPage}/>
    </div>
    </aside>
  
  </div>
</div>



  );
}

export default SideBar;

