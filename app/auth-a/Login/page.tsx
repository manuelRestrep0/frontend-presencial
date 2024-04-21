'use client'

import React, { useEffect, useState } from 'react';

import 'styles/UserRegistration/UserRegistration.css';

import { BsChevronLeft } from 'react-icons/bs';
import { LiaPlaneDepartureSolid } from "react-icons/lia";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import Link from 'next/link';
import { IconAirplane } from 'components/components-Auth-a/IconAirplane';
import { InputField } from 'components/components-Auth-a/InputField';


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
        email: "",
        password: "",
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

    function validateLogin() {
        if (formData.email && formData.password) {
            try {
                login(formData)
            } catch(e) {
                alert("Error")   
            }
        } else {
            alert("Fill all fields please")
        }
    }

    function login(data : FormData) {
        console.log(JSON.stringify(data))
    }


    return (
        <div className='main-container h-screen bg-cover text-black flex justify-center items-center'>

            <div className='flex bg-white h-[511px] w-[525px] rounded-2xl relative'>
                <div className='w-3/5 flex flex-col p-8 gap-4'>
                    <div className=' flex flex-col gap-2 w-52 items-start'>
                        <button onClick={prevPage} className='flex w-full text-xl items-center justify-between'>
                            <BsChevronLeft />
                            <h2 className=''>Inicio de sesión</h2>
                        </button>
                        <div className='flex w-full justify-between items-center'>
                            <h2 className='text-[10px]'>¿Eres usuario nuevo?</h2>
                            <button className='text-[10px] text-[#0077B6]'>
                                <Link href={"signup"}>Regístrate aquí.</Link>
                            </button>
                        </div>
                    </div>


                    <div className=' w-full bg-white flex flex-col'>
                        <form onSubmit={handleSubmit} className=' bg-white flex-col flex gap-4 mt-3'>
                            <InputField id="email" placeholder="Usuario" onChange={handleChange} type='email' value={formData.email} />
                            <InputField id="password" placeholder="Contraseña" onChange={handleChange} type='password' value={formData.password} />
                            <button className=' text-xs text-gray-600'>¿Ha olvidado su contraseña?</button>
                            <div className=" flex justify-between items-center">
                                <div className='flex gap-4'>
                                    <input
                                        type="checkbox"
                                        id="rememberMe"
                                        name="rememberMe"
                                        checked={formData.rememberMe}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="rememberMe" className=" text-xs">Recuérdame</label>
                                </div>
                                <button onClick={() => {validateLogin()}} className='nav-btn w-20 h-7 flex items-center justify-center text-center ' >Ingresar</button>
                            </div>

                        </form>
                    </div>

                    <hr className="border-gray-600 w-full justify-center mt-7" />

                    <div className=' mt-7 bg-white w-full flex flex-col items-center gap-2 justify-center'>
                        <button className=' border border-gray-600 rounded-full text-xs w-full h-8 flex items-center justify-center text-center gap-3'>
                            <FcGoogle className='text-xl' />Ingresar con Google
                        </button>
                        <button className='border border-gray-600 rounded-full text-xs w-full h-8 flex items-center justify-center text-center gap-3'>
                            <BsFacebook className='text-facebook-logo text-xl' />Ingresar con Facebook
                        </button>
                    </div>

                    <div>
                        <button className='text-xs mt-7 text-[#0077B6]'>Obtener ayuda</button>
                    </div>
                </div>

                <div className="absolute inset-y-0 right-0 w-[40%] bg-[#219EBC] rounded-r-2xl flex justify-center items-center ">
                    <div>
                        <IconAirplane />
                        <h2 className='text-white flex justify-center items-center font-bold'>SITAS</h2>
                        <h3 className='text-white text-sm flex justify-center items-center'>Singapur Airlines</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;