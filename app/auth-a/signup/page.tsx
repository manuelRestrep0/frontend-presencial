'use client'

import React, { useState, useEffect } from 'react';

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
                        <SignupInfo formData={formData} setFormData={setFormData}/>
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
            return <SignupInfo formData={formData} setFormData={setFormData}/>;
          }
    };


    function nextPage() {

        if(windowWidth > 1100) {
            if (page >= 2) {
                console.log(JSON.stringify(formData));
            } else {
                setPage(page + 2)
            }
        } else { 
            if (page === 3) {
                console.log(JSON.stringify(formData));
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
    return (
        <div className='main-container h-screen bg-cover text-black flex justify-center items-center'>
            <div className='form-container bg-white flex flex-col h-[65%] w-[70%] justify-around items-center rounded-2xl py-5 bg-'>
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

                <div id='footer' className='flex justify-evenly h-[12%] w-[70%] items-center'>
                    <div hidden={windowWidth > 1100 ? (page > 1) : (page !== 0)} id="registration-methods-container">
                        <button className='registration-method-btn mx-1'>
                            <FcGoogle className='text-[28px] hover:scale-105'/>
                        </button>

                        <button className='registration-method-btn mx-1'>
                            <BsFacebook className='text-[28px] hover:scale-105'/>
                        </button>
                    </div>

                    <button className='nav-btn' style={{display: windowWidth > 1100 ? (page <= 1 ? "none" : "block") : (page === 0 ? "none" : "block")}} onClick={prevPage}>Regresar</button>
                    <button className='nav-btn' onClick={nextPage}>{windowWidth > 1100 ? (page >= 2 ? "Registrarse" : "Continuar") : (page === 3 ? "Registrarse" : "Continuar")}</button>
                </div>
            </div>
        </div>
    );
}

export default Form;