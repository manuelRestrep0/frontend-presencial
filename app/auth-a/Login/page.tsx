'use client'

import React, { useEffect, useState } from 'react';

import 'styles/UserRegistration/UserRegistration.css';

import { BsChevronLeft } from 'react-icons/bs';
import { LiaPlaneDepartureSolid } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";


const Form = () => {

    const [page, setPage] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
    
      setWindowWidth(document.documentElement.clientWidth);
    
      const handleResize = () => {
        setWindowWidth(document.documentElement.clientWidth);
      };
    
      window.addEventListener("resize", handleResize);
    

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    interface FormData {
        email: string; 
        password: string;
        rememberMe: boolean;
    }

    const [formData, setFormData] = useState({
        email:"",
        password:"",
        rememberMe: false,
    });

    const handleChange = (e: { target: { name: any; value: any; type: any; checked: any; }; }) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;
        setFormData(prevState => ({
            ...prevState,
            [name]: newValue
        }));
    };

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

    };

    function prevPage() {
        if (windowWidth > 1100) {
            if (page <= 1) {
                alert("hallo, you're at the start")
            } else {
                setPage(page - 2)
            }
        } else {
    
            if (page === 0) {
                alert("hallo, you're at the start")
            } else {
                setPage(page - 1)
            }

        }
    }

    
    return (
        <div className='main-container h-screen bg-cover text-black flex justify-center items-center'>

            <div id='login-container' className='form-container bg-white h-[65%] w-[70%] rounded-2xl relative'>

                <div id='login_header' className='h-[15%] inset-y-0 left-0 w-[60%] bg-white flex rounded-l-2xl'> 
                    <button id='header-back-btn' onClick={prevPage} className='flex justify-center items-center gap-2'>
                        <BsChevronLeft className='ml-4'/>
                        <h2 className='-mt-1'>Inicio de sesión</h2>
                    </button>
                    
                </div>
                
                <div className='h-[3%] inset-y-0 left-0 w-[60%]  bg-white flex place-items-start'>
                    <h2 className='text-xs ml-5 -mt-6 mb-4'>¿Eres usuario nuevo?</h2>
                    <button className='text-xs text-otro-azul ml-2 -mt-6 mb-1'>Regístrate aquí.</button>
                </div>
    
                <div id='login_body ' className='form-container inset-y-0 left-0 w-[60%] bg-white flex place-items-start flex-col'>
                    
                    <form onSubmit={handleSubmit} className='form-container inset-y-0 left-0 bg-white flex-col flex w-[100%] '>
                        <div className="mb-4 ml-5 flex flex-col w-[60%]">
                            <label htmlFor="email">Correo</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                value={formData.email} 
                                onChange={handleChange} 
                                required 
                                className="border-b border-gray-600 p-1 mb-1 "
                            />
                        </div>
                        <div className="mb-4 ml-5 flex flex-col w-[60%]">
                            <label htmlFor="password">Contraseña</label>
                            
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                value={formData.password} 
                                onChange={handleChange} 
                                required 
                                className="border-b border-gray-600 p-1 mb-1 "
                                
                            />
                        </div>
                            
                        <div className='h-[3%] inset-y-0 left-0 w-[60%]  bg-white flex place-items-start items-center'>
                            <button className='text-xxs text-otro-azul ml-5 -mt-3 mb-2 '>¿Ha olvidado su contraseña?</button>
                        </div>

                        <div id='remember' className="ml-5 flex items-baseline justify-left text-center flex-row w-[85%]">
                            
                            <input 
                                type="checkbox" 
                                id="rememberMe" 
                                name="rememberMe" 
                                checked={formData.rememberMe} 
                                onChange={handleChange} 
                            />
                            <label htmlFor="rememberMe" className="ml-2 mb-3">Recuérdame</label>
                            <button className='nav-btn w-20 h-7 flex items-center justify-center text-center ml-[auto] mb-3 ' >Ingresar</button>
                        </div>

                    </form>
                </div>
                    
                <hr className="border-gray-600 inset-y-0 left-0 w-[55%] mx-6 justify-center mb-5" /> 
    
                <div className='h-[15%] inset-y-0 left-0 w-[60%] bg-white place-items-start flex flex-col items-center justify-center space-y-4 mb-5'>
                    <button className='log-btn w-[80%] h-8 flex items-center justify-center text-center gap-3'>
                        <FcGoogle className='text-xl'/>Ingresar con Google
                    </button>
                    <button className='log-btn w-[80%] h-8 flex items-center justify-center text-center gap-3'>
                        <BsFacebook className='text-facebook-logo text-xl'/>Ingresar con Facebook
                    </button>
                </div>

                <div>
                    <button className='text-xs text-otro-azul -mt-6 ml-5 '>Obtener ayuda</button>
                </div>

    
                <div className="absolute inset-y-0 right-0 w-[40%] bg-login-blue rounded-r-2xl flex justify-center items-center ">
                    <div>
                        <LiaPlaneDepartureSolid className='text-avion-blue text-8xl' />
                        <h2 className='text-white flex justify-center items-center font-bold'>SITAS</h2>
                        <h3 className='text-white text-sm flex justify-center items-center'>Singapur Airlines</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}  

export default Form;