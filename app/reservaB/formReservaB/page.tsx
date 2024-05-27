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

const FormReserve = () => {

    const genreOptions = [
        { value: 'M', label: 'Masculino' },
        { value: 'F', label: 'Femenino' },
        { value: 'O', label: 'Otro' },
    ];

    const documentOptions = [
        { value: '0', label: 'Seleccione una opción' },
        { value: '1', label: 'Cedula' },
        { value: '2', label: 'Pasaporte' },
        { value: '3', label: 'Tarjeta de identidad' },
        { value: '4', label: 'Cedula extranjera' },
    ];

    const { form, formData, updateFormData } = useFormData({});

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log(formData);

        await fetch('http://localhost:8080/v1/person/person', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Auth-Token': 'token',
            },
            body: JSON.stringify({
                personId: formData.personId,
                idType: formData.idType,
                idNumber: formData.idNumber,
                firstName: formData.firstName,
                lastName: formData.lastName,
                genre: formData.genre,
                birthDate: formData.birthDate,
                phoneNumber: formData.phoneNumber,
                country: formData.country,
                province: formData.province,
                city: formData.city,
                residence: formData.residence,
                email: formData.email,
                password: formData.password,
            }),
        });
    };
    const [viewInfo, setViewInfo] = useState(false);
    const handleViewInfo = () => {
        setViewInfo(!viewInfo);
    }
    const [viewEmerg, setViewEmerg] = useState(false);
    const handleViewEmerg = () => {
        setViewEmerg(!viewEmerg);
    }
    const [info, setInfo] = useState([
        {
            identificador: "MEM864",
            tipo: "Internacional",
            ciudadOrigen: "Medellín",
            ciudadDestino: "Miami",
            fechaSalida: "11/10/2024",
            fechaLlegada: "11/10/2024",
            horaSalida: "12:10",
            horaLlegada: "15:30",
            nombres: "Vladimir",
            apellidos: "Guitierrez Fernandez",
            fechaNacimiento: "03/28/1970",
            telefono: "(+55) 555 555 55 55",
            email: "vladimirgf@gmail.com",
            genero: "Masculino",
            tipoDocumento: "Cedula",
            documento: "111111111",
            nombresEmerg: "John Alfredo",
            apellidosEmerg: "Valderrama Piñuela",
            todosPasajeros: true,
            telefonoEmerg: "(+57) 777 777 77 77",
            direccion: "Cll 44 #44-44",
            tipoPasajero: "Pasajero principal"
        }
    ]);

    const handleAddPassenger = () => {
        setInfo([...info, {
            identificador: "MEM864",
            tipo: "Internacional",
            ciudadOrigen: "Medellín",
            ciudadDestino: "Miami",
            fechaSalida: "11/10/2024",
            fechaLlegada: "11/10/2024",
            horaSalida: "12:10",
            horaLlegada: "15:30",
            nombres: "",
            apellidos: "",
            fechaNacimiento: "",
            telefono: "",
            email: "",
            genero: "",
            tipoDocumento: "",
            documento: "",
            nombresEmerg: "",
            apellidosEmerg: "",
            todosPasajeros: false,
            telefonoEmerg: "",
            direccion: "",
            tipoPasajero: "Pasajero " + (info.length)
        }]);
    };
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
                {info.map((item, index) => (
                    <><section className='flex flex-col w-10/12 h-auto items-center justify-center p-3 border rounded-xl mt-10 mb-5 pb-5'>
                        <FormTitles viewInfo={viewEmerg} handleViewInfo={handleViewInfo} name={'Información'} passanger={item.tipoPasajero} />
                        {viewInfo && <h1 className='flex flex-row justify-start items-center h-16 text-xl font-bold w-full px-5'>Información básica</h1>}
                        {viewInfo && <ul className='flex flex-row justify-between items-center w-full h-auto flex-wrap px-5'>
                            <FormInput label={'Nombres'} type={'text'} identity={'tuNombre'} name={'firstName'} placeholder={'Tu nombre'} />
                            <FormInput label={'Apellidos'} type={'text'} identity={'tuApellido'} name={'lastName'} placeholder={'Tu apellido'} />
                            <FormInput label={'Fecha de nacimiento'} type={'date'} identity={'tuNacimiento'} name={'birthDate'} placeholder={'Tu fecha de nacimiento'} />
                            <FormInput label={'Telefono'} type={'text'} identity={'tuTelefono'} name={'phoneNumber'} placeholder={'Tu telefono'} />
                            <FormInput label={'Email'} type={'email'} identity={'tuEmail'} name={'email'} placeholder={'Tu email'} />
                            <FormSelect label={'Género'} identity={'tuGenero'} name={'genre'} options={genreOptions} />
                            <FormSelect label={'Tipo de documento'} identity={'tuTipoDocumento'} name={'idType'} options={documentOptions} />
                            <FormInput label={'Documento'} type={'text'} identity={'tuDocumento'} name={'idNumber'} placeholder={'Tu documento'} />
                            <FormInput label={'Pais'} type={'text'} identity={'tuPais'} name={'country'} placeholder={'Tu pais'} />
                            <FormInput label={'Departamento'} type={'text'} identity={'tuDepartamento'} name={'province'} placeholder={'Tu departamento'} />
                            <FormInput label={'Ciudad'} type={'text'} identity={'tuCiudad'} name={'city'} placeholder={'Tu ciudad'} />
                            <FormInput label={'Dirección'} type={'text'} identity={'tuDireccion'} name={'residence'} placeholder={'Tu direccion'} />
                            <FormInput label={'Contraseña'} type={'password'} identity={'tuContraseña'} name={'password'} placeholder={'Tu contraseña'} />
                        </ul>}
                    </section>
                        <div className='w-full h-auto flex flex-col justify-center items-center' key={index}>
                            <section className='flex flex-col w-10/12 h-auto items-center justify-center p-3 border rounded-xl mt-10 mb-5 pb-5'>
                                <FormTitles viewInfo={viewEmerg} handleViewInfo={handleViewEmerg} name={'Información de emergencia'} passanger={item.tipoPasajero} />
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
                                            checked={item.todosPasajeros} readOnly />
                                    </li>
                                </ul>}
                                {viewEmerg && <h1 className='flex flex-row justify-start items-center h-16 text-xl font-bold w-full px-5'>Perdida de maletas</h1>}
                                {viewEmerg && <p className='flex flex-row justify-start items-center h-10 w-full px-5'>Se llevará el equipaje a la dirección que ingrese en caso de perdida.</p>}
                                {viewEmerg && <ul className='flex flex-row justify-between items-center w-full h-auto flex-wrap px-5'>
                                    <FormInput label={'Dirección Emergencia'} type={'text'} identity={'direccionEmergencia'} name={'direccionEmerg'} placeholder={'Dirección en caso de perdida de equipaje'} />
                                </ul>}
                            </section>
                        </div></>
                ))}

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