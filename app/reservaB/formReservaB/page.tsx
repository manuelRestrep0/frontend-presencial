'use client'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import Link from 'next/link';
import React, { useState } from 'react';
import FormButton from 'components/formButton';
import FormFly from 'components/formFly';
import FormInput from 'components/formInput';
import FormSelect from 'components/formSelect';
import FormTitles from 'components/formTitles';
import Navbar from 'components/navbar';
import useFormData from 'hooks/useFormData';
import { bookingType, loginData, passengerType, personType } from 'types';

const FormReserve = () => {

    const genreOptions = [
        { value: 'M', label: 'Masculino' },
        { value: 'F', label: 'Femenino' },
        { value: 'O', label: 'Otro' },
    ];

    const documentOptions = [
        { value: '1', label: 'Cedula' },
        { value: '2', label: 'Pasaporte' },
        { value: '3', label: 'Tarjeta de identidad' },
        { value: '4', label: 'Cedula extranjera' },
    ];

    const { form, formData, updateFormData } = useFormData({});

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log(formData);
        console.log("Buscar por id number: " + formData.idNumber);

        let personId;
        let person: personType;
        let loginData;
        let authToken;

        await fetch('https://codefact.udea.edu.co/modulo-09/v1/person/documentId/' + formData.idNumber).then(async (personResponse) => {
            if (!personResponse.ok) {
                throw new Error('Hubo un problema con la solicitud fetch: ' + personResponse.status);
            }

            person = await personResponse.json() as personType;

            if (person) {
                personId = person.personId;
                console.log("Person Id: " + personId);
                console.log("Person: ", person);
            }else{
                console.log("No existe la persona");
            }
        });

        //Se crea la persona si no existe, se actualiza si ya existe
        const personResponse = await fetch('https://codefact.udea.edu.co/modulo-09/v1/person/person', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Auth-Token': 'token',
            },
            body: JSON.stringify({
                personId: personId,
                identificationType: {
                  identificationTypeId: 1,
                  identificationTypeName: "CC"
                },
                idNumber: formData.idNumber,
                firstName: formData.firstName,
                lastName: formData.lastName,
                genre: formData.genre,
                birthDate: formData.birthDate,
                phoneNumber: formData.phone,
                country: formData.country,
                province: formData.province,
                city: formData.city,
                address: formData.address,
                email: formData.email,
            }),
        });
        if (!personResponse.ok) {
            throw new Error('Person creation failed');
        }  

        //Se obtiene el token de autenticación
        const loginAdminResponse = await fetch('https://codefact.udea.edu.co/modulo-02/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: "admin@default",
                password: "pass123"
            }),
        });
        if (!loginAdminResponse.ok) {
            throw new Error('Login failed');
        }
        loginData = await loginAdminResponse.json() as loginData;
        authToken = loginData.token;

        //Se crea el pasajero
        const passengerResponse = await fetch('https://codefact.udea.edu.co/modulo-09/v1/passenger/passenger', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`,
            },
            body: JSON.stringify({
                passengerId: 0,
                personId: personId,
            }),
        });
        if (!passengerResponse.ok) {
            throw new Error('Passenger creation failed');
        }

        //Se obtiene el token de autenticación
        const loginResponse = await fetch('https://codefact.udea.edu.co/modulo-02/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: "user@default",
                password: "pass123"
            }),
        });
        if (!loginResponse.ok) {
            throw new Error('Login failed');
        }
        loginData = await loginResponse.json() as loginData;
        authToken = loginData.token;

        //Se crea la reserva
        const bookingResponse = await fetch('https://codefact.udea.edu.co/modulo-09/v1/booking/booking', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`,
            },
            body: JSON.stringify({
                bookingId: 0,
                flightId: 1,
                bookingDate: new Date().toISOString(),
                bookingStatus: "Pending",
                totalPrice: 1000
            }),
        });
        if (!bookingResponse.ok) {
            throw new Error('Booking creation failed');
        }

        //Se crea la relación entre la reserva y el pasajero
        const relationResponse = await fetch('https://codefact.udea.edu.co/modulo-09/v1/bookingPassenger/bookingPassenger', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${authToken}`,
            },
            body: JSON.stringify({
                booking_passenger_id: 0,
                booking: {
                    bookingId: 0,
                    flightId: 1,
                    bookingDate: new Date().toISOString(),
                    bookingStatus: "Pending",
                    totalPrice: 1000
                },
                passenger: {
                    passengerId: 0,
                    personId: personId,
                }
            }),
        });
        if (!relationResponse.ok) {
            throw new Error('Relation creation failed');
        }         
    };
    const [viewInfo, setViewInfo] = useState(false);
    const handleViewInfo = () => {
        setViewInfo(!viewInfo);
    }
    const [viewEmerg, setViewEmerg] = useState(false);
    const handleViewEmerg = () => {
        setViewEmerg(!viewEmerg);
    }

    const handleAddPassenger = () => {
    }

    return (

        <div className="flex flex-col items-center justify-start w-screen h-auto">
            <Navbar />
            <FormFly />
            <form
                id='formReserva'
                ref={form}
                onChange={updateFormData}
                onSubmit={handleSubmit}
                className='w-full h-auto flex flex-col justify-center items-center'
                autoComplete='off'
            >      
                        <><section className='flex flex-col w-10/12 h-auto items-center justify-center p-3 border rounded-xl mt-10 mb-5 pb-5'>
                            <FormTitles viewInfo={viewEmerg} handleViewInfo={handleViewInfo} name={'Información'} passanger="Pasajero"  />
                            {viewInfo && <h1 className='flex flex-row justify-start items-center h-16 text-xl font-bold w-full px-5'>Información básica</h1>}
                            {viewInfo && <ul className='flex flex-row justify-between items-center w-full h-auto flex-wrap px-5'>
                                <FormInput label={'Nombres'} type={'text'} identity={'firstName'} name={'firstName'} placeholder={'Tu nombre'} />
                                <FormInput label={'Apellidos'} type={'text'} identity={'lastName'} name={'lastName'} placeholder={'Tu apellido'} />
                                <FormInput label={'Fecha de nacimiento'} type={'date'} identity={'birthDate'} name={'birthDate'} placeholder={'Tu fecha de nacimiento'} />
                                <FormInput label={'Telefono'} type={'text'} identity={'phone'} name={'phone'} placeholder={'Tu telefono'} />
                                <FormInput label={'Email'} type={'email'} identity={'email'} name={'email'} placeholder={'Tu email'} />
                                <FormSelect label={'Género'} identity={'genre'} name={'genre'} options={genreOptions} />
                                <FormSelect label={'Tipo de documento'} identity={'idType'} name={'idType'} options={documentOptions} />
                                <FormInput label={'Documento'} type={'text'} identity={'idNumber'} name={'idNumber'} placeholder={'Tu documento'} />
                                <FormInput label={'Pais'} type={'text'} identity={'country'} name={'country'} placeholder={'Tu pais'} />
                                <FormInput label={'Departamento'} type={'text'} identity={'province'} name={'province'} placeholder={'Tu departamento'} />
                                <FormInput label={'Ciudad'} type={'text'} identity={'city'} name={'city'} placeholder={'Tu ciudad'} />
                                <FormInput label={'Dirección'} type={'text'} identity={'address'} name={'address'} placeholder={'Tu direccion'} />
                            </ul>}
                        </section>
                        <div className='w-full h-auto flex flex-col justify-center items-center' key="1">
                            <section className='flex flex-col w-10/12 h-auto items-center justify-center p-3 border rounded-xl mt-10 mb-5 pb-5'>
                                <FormTitles viewInfo={viewEmerg} handleViewInfo={handleViewEmerg} name={'Información de emergencia'} passanger="Pasajero" />
                                {viewEmerg && <h1 className='flex flex-row justify-start items-center h-16 text-xl font-bold w-full px-5'>Contacto de emergencia</h1>}
                                {viewEmerg && <p className='flex flex-row justify-start items-center h-10 w-full px-5'>Este se usará si ocurre alguna emergencia con el pasajero principal.</p>}
                                {viewEmerg && <ul className='flex flex-row justify-between items-center w-full h-auto flex-wrap px-5'>
                                    <FormInput label={'Nombres'} type={'text'} identity={'nombreEmergencia'} name={'nombresEmerg'} placeholder={'Nombres de contacto de emergencia'} />
                                    <FormInput label={'Apellidos'} type={'text'} identity={'apellidoEmergencia'} name={'apellidosEmerg'} placeholder={'Apellidos de contacto de emergencia'} />
                                    <FormInput label={'Telefono'} type={'text'} identity={'telefonoEmergencia'} name={'telefonoEmerg'} placeholder={'Telefono de contacto de emergencia'} />
                                    <li className='flex flex-row justify-start items-center h-20' style={{ width: "49%" }}>
                                        <p className='w-auto mt-7'>
                                            Para todos los pasajeros
                                        </p>
                                        <input
                                            // eslint-disable-next-line tailwindcss/enforces-negative-arbitrary-values
                                            className="mt-7 ml-5 h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-gray-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-gray-400 after:shadow-switch-2 after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-[#68b1ec] checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ms-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-[#2196F3] checked:after:shadow-switch-1 checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-switch-3 focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ms-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-switch-3 checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-white/25 dark:after:bg-surface-dark dark:checked:bg-primary dark:checked:after:bg-primary"
                                            type="checkbox"
                                            role="switch"
                                            id="flexSwitchCheckDefault02"
                                            checked={true} readOnly />
                                    </li>
                                </ul>}
                                {viewEmerg && <h1 className='flex flex-row justify-start items-center h-16 text-xl font-bold w-full px-5'>Perdida de maletas</h1>}
                                {viewEmerg && <p className='flex flex-row justify-start items-center h-10 w-full px-5'>Se llevará el equipaje a la dirección que ingrese en caso de perdida.</p>}
                                {viewEmerg && <ul className='flex flex-row justify-between items-center w-full h-auto flex-wrap px-5'>
                                    <FormInput label={'Dirección Emergencia'} type={'text'} identity={'direccionEmergencia'} name={'direccionEmerg'} placeholder={'Dirección en caso de perdida de equipaje'} />
                                </ul>}
                            </section>
                        </div></>

                <section className='flex flex-row w-10/12 h-auto items-center justify-start p-3 mb-3'>
                    <h1 className='flex flex-row justify-start items-center h-16 text-xl font-bold w-auto mr-5'> Agregar pasajero </h1>
                    <AddCircleIcon className='text-[#2196F3] w-12 h-12 cursor-pointer' onClick={handleAddPassenger} />
                </section>

                <FormButton type='submit' text='Guardar' color='#2196F3' icon={<SaveAltIcon className='text-white ml-2' />} />

                <Link href='/reservaB/formReservaB'>
                    <FormButton type='reset' text='Limpiar' color='#3f5d75' icon={<RestartAltIcon className='text-white ml-2' />} />
                </Link>

            </form>
        </div >
    );
};

export default FormReserve;