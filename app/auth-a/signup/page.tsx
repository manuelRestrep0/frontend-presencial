'use client'

import React, { useEffect, useState } from 'react';
import { signIn, signOut, useSession } from 'next-auth/react'

import 'styles/UserRegistration/UserRegistration.css';

import { BsChevronLeft } from 'react-icons/bs';
import { FaPlaneDeparture } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";

import { BasicInfo } from '../../../components/UserRegistration/BasicInfo';
import{ AdditionalInfo} from '../../../components/UserRegistration/AdditionalInfo';
import {AddressInfo} from '../../../components/UserRegistration/AddressInfo';
import {SignupInfo} from '../../../components/UserRegistration/SignupInfo';



const Form = () => {

    const {data : session} = useSession()

    const [isPasswordValid, setValidSignup] = useState(false)

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


    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
        username: "",
        country: "",
        region: "",
        city: "",
        address: "",
        idType: "",
        idNumber: "",
        gender: "",
        birthday: "",
        phoneNumber: ""
      });


    function verifyObjectFilled(objeto: Record<string, string>): boolean {
        for (const clave in objeto) {
            if (!objeto[clave]) {
                return false;
            }
        }
        return true;
    }

    const passwordAlertDisplay = () => {

        if(!session?.user) {

            const invalidPassword = (<div>
                <p className='font-semibold'>Contraseña no válida, verifica que:</p>
                <ul className='text-neutral-500'>
                    <li>Presente al menos 8 caracteres</li>
                    <li>Presente al menos 1 caracter especial</li>
                    <li>Presente al menos 1 letra mayúscula</li>
                    <li>Presente al menos 1 letra minúscula</li>
                </ul>
            </div>)
    
            const validPassword = (<div className='font-semibold'>Contraseña válida</div>)
    
            if (windowWidth > 1100) {
                if (page > 1) {
                    if (!isPasswordValid) {
                        return (invalidPassword)
                    } else {
                        return (validPassword)
                    }
                }
            } else {
                if (page == 3) {
                    if (!isPasswordValid) {
                        return (invalidPassword)
                    } else {
                        return (validPassword)
                    }
                }
            }

        }

    }

    const PageDisplay = () => {


        if(windowWidth > 1100) {
            if (page <= 1) {
                return (
                    <>
                        <BasicInfo formData={formData} setFormData={setFormData}/>
                        <AdditionalInfo formData={formData} setFormData={setFormData}/>
                    </>
                    )
            } else {
                return (
                    <>
                        <AddressInfo formData={formData} setFormData={setFormData}/>
                        <SignupInfo formData={formData} setFormData={setFormData} isValidSignup={isPasswordValid} setValidSignup={setValidSignup}/>
                    </>
                )
            }
        }

        if (page === 0) {
            return <BasicInfo formData={formData} setFormData={setFormData}/>;
          } else if (page === 1) {
            return <AdditionalInfo formData={formData} setFormData={setFormData}/>;
          } else if (page === 2) {
            return <AddressInfo formData={formData} setFormData={setFormData}/>;
          } else {
            return <SignupInfo formData={formData} setFormData={setFormData} isValidSignup={isPasswordValid} setValidSignup={setValidSignup}/>;
          }
    };

    function nextPage() {

        if(windowWidth > 1100) {
            if (page >= 2) {
                if(validateSignup()) {
                    console.log(JSON.stringify(formData));
                }

            } else {
                setPage(page + 2)
            }


        } else { 
            if (page === 3) {
                if(validateSignup()) {
                    console.log(JSON.stringify(formData));
                }
            } else {
                setPage(page + 1)
            }
        }

    }

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

    const validateSignup = () => {
    

        if (!verifyObjectFilled(formData)) {
            alert("Por favor llenar todos los campos")
            return false
        }

        if (formData.password !== formData.confirmPassword) {
            alert("La contraseña no coincide")
            return false
        }

        if (!isPasswordValid) {
            alert("La contraseña no es válida")
            return false
        }

        return true
    
    }

    return (
        <div className='main-container h-screen bg-cover text-black flex justify-center items-center'>
            <div className='form-container bg-white flex flex-col min-h-[65%] w-[70%] justify-around items-center rounded-2xl py-5'>
                <div id='header' className='h-[12%] flex justify-center align-middle'>
                    <button id='header-back-btn' onClick={prevPage} className='flex justify-between items-center w-44'>
                        <BsChevronLeft/>
                        <h2>Registrarse</h2>
                        <FaPlaneDeparture/>
                    </button>
                </div>

                <div id='body' className='bg-white flex justify-center h-[60%] w-[80%] gap-7 text-sm '>
                    {PageDisplay()}
                </div>

                {passwordAlertDisplay()}


                <div id='footer' className='flex justify-evenly h-[12%] w-[70%] items-center'>
                    <div hidden={windowWidth > 1100 ? (page > 1) : (page !== 0)} id="registration-methods-container">
                        <button onClick={() => signIn()} className='registration-method-btn mx-1'>
                            <FcGoogle className='text-[28px] hover:scale-105'/>
                        </button>

                        <button className='registration-method-btn mx-1'>
                            <BsFacebook className='text-[28px] hover:scale-105'/>
                        </button>
                    </div>


                    <button className='nav-btn' onClick={nextPage}>{windowWidth > 1100 ? (page >= 2 ? "Registrarse" : "Continuar") : (page === 3 ? "Registrarse" : "Continuar")}</button>
                </div>
            </div>
        </div>
    );
}

export default Form;