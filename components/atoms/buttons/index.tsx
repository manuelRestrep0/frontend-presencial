import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faPaperPlane, faPlusCircle, faSearch, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { PrincipalTextWhite } from '@components/atoms/text';

export function BtnGuardar() {
  return (
    <button className='bg-primary text-white py-2 w-[450px] h-24 rounded-full font-bold flex items-center justify-center hover:bg-secondary'>
        <PrincipalTextWhite text="Registrar información de vuelo"></PrincipalTextWhite>
       
        <div className='w-12 h-12 pl-2 flex justify-center mt-8'>
            <FontAwesomeIcon icon={faPaperPlane} className="mr-2" />
        </div>
    </button>
  );
}

export function BtnRegistrar () {
    return (
        <button className='bg-primary text-white py-2 px-4 rounded-none rounded-l-full w-[200px] h-12 font-bold flex items-center justify-center hover:bg-secondary shadow-2xl'>
            <div className='w-12 h-12 pl-2 flex justify-center mt-8'>
                <FontAwesomeIcon icon={faPlusCircle} className="mr-2" />
            </div>
            <PrincipalTextWhite text="Registrar"></PrincipalTextWhite>
           
            
        </button>
      );

}

export function BtnConsultar () {
    return (
        <button className='bg-primary text-white py-2 px-4 rounded-none rounded-l-full w-[200px] h-12 font-bold flex items-center justify-center hover:bg-secondary  shadow-2xl'>
            <div className='w-12 h-12 pl-2 flex justify-center mt-8'>
                <FontAwesomeIcon icon={faSearch} className="mr-2" />
            </div>
            <PrincipalTextWhite text="Consultar"></PrincipalTextWhite>
           
            
        </button>
      );

}

export function BtnModificar () {
    return (
        <button className='bg-primary text-white py-2 px-4 rounded-none rounded-l-full w-[200px] h-12 font-bold flex items-center justify-center hover:bg-secondary  shadow-2xl'>
            <div className='w-12 h-12 pl-2 flex justify-center mt-8'>
                <FontAwesomeIcon icon={faEdit} className="mr-2" />
            </div>
            <PrincipalTextWhite text="Modificar"></PrincipalTextWhite>
           
            
        </button>
      );

}

export function BtnEliminar () {
    return (
        <button className='bg-primary text-white py-2 px-4 rounded-none rounded-l-full w-[200px] h-12 font-bold flex items-center justify-center hover:bg-secondary  shadow-2xl'>
            <div className='w-12 h-12 pl-2 flex justify-center'>
                <FontAwesomeIcon icon={faTrashAlt} className="mr-2 mt-4" />
            </div>
            <PrincipalTextWhite text="Eliminar"></PrincipalTextWhite>
           
            
        </button>
      );

}