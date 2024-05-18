"use client";
import React, { useState } from 'react';

const Form = () => {
  const [vuelo, setVuelo] = useState<string>("");
  const [tipoVuelo, setTipoVuelo] = useState<string>("");
  const [salida, setSalida] = useState<string>("");
  const [llegada, setLlegada] = useState<string>("");
  const [horaSalida, setHoraSalida] = useState<string>("");
  const [horaLlegada, setHoraLlegada] = useState<string>("");
  const [origen, setOrigen] = useState<string>("BOG");
  const [destino, setDestino] = useState<string>("");
  const [aeronave, setAeronave] = useState<string>("");
  const [pasajeros, setPasajeros] = useState<number | ''>('');
  const [tiquete, setTiquete] = useState<number | ''>('');
  const [impuestos, setImpuestos] = useState<number | ''>('');
  const [sobretasa, setSobretasa] = useState<number | ''>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const numericPasajeros = Number(pasajeros);
    const numericTiquete = Number(tiquete);
    const numericImpuestos = Number(impuestos);
    const numericSobretasa = Number(sobretasa);

    if (
      numericPasajeros <= 0 ||
      numericTiquete <= 0 ||
      numericImpuestos < 0 ||
      numericSobretasa < 0
    ) {
      setError('Valores numéricos deben ser positivos y válidos');
      return;
    }

    setError(null);
    setLoading(true);
    setSuccessMessage(null);

    const formData = {
      id: 0,
      flightNumber: vuelo,
      basePrice: numericTiquete,
      taxPercentage: numericImpuestos,
      surcharge: numericSobretasa,
      scales: [
        {
          airplaneModel: {
            id: aeronave
          },
          originAirport: {
            id: origen
          },
          destinationAirport: {
            id: destino
          },
          departureDate: `${salida} ${horaSalida}:00`,
          arrivalDate: `${llegada} ${horaLlegada}:00`
        }
      ],
      flightType: tipoVuelo
    };

    console.log("Sending data:", JSON.stringify(formData, null, 2));

    try {
      const response = await fetch('https://codefact.udea.edu.co/modulo-19/v1/flights/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Network response was not ok: ${errorMessage}`);
      }

      const responseData = await response.json();
      console.log('Flight data saved successfully:', responseData);
      setSuccessMessage('El vuelo se ha creado exitosamente.');
    } catch (error: any) {
      console.error('There was a problem with the fetch operation:', error);
      setError(`Hubo un problema al crear el vuelo: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTipoVuelo(e.target.value);
  };

  const handleNumberChange = (setter: React.Dispatch<React.SetStateAction<number | ''>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setter(value === '' ? '' : Number(value));
  };

  return (
    <div className='mt-8 px-32 w-[1255px]'>
      {error && <h2 className="bg-red-800 mb-3 p-3 rounded-md font-bold text-center text-white uppercase">{error}</h2>}
      {successMessage && <h2 className="bg-green-800 mb-3 p-3 rounded-md font-bold text-center text-white uppercase">{successMessage}</h2>}

      <form onSubmit={handleSubmit}>
        <div className='relative pt-5'>
          <label className='align-top top-0 left-0 absolute bg-slate-50 ml-7 px-3 py-3 w-32 h-1 font-light text-xs'>Número de vuelo</label>
          <input type='text' name='vuelo' className='border-2 border-gray-300 pl-5 w-[1000px] h-14' placeholder='SA-1234' value={vuelo} onChange={(e) => setVuelo(e.target.value)} />
        </div>

        <div className='pt-5'>
          <label className='block'>Tipo de vuelo: </label>
          <div className='pt-2'>
            <label className='pr-12'>
              <input type='radio' name='tipo' value='National' className='mr-2' checked={tipoVuelo === 'National'} onChange={handleOptionChange} />
              Nacional
            </label>
            <label>
              <input type='radio' name='tipo' value='International' className='mr-2' checked={tipoVuelo === 'International'} onChange={handleOptionChange} />
              Internacional
            </label>
          </div>
        </div>

        <div className='relative pt-5'>
          <label className='align-top top-0 left-0 absolute bg-slate-50 ml-7 px-3 py-3 w-32 h-1 font-light text-xs'>Ciudad de origen: </label>
          <select name='origen' className='border-2 border-gray-300 pl-5 w-[1000px] h-14' value={origen} onChange={(e) => setOrigen(e.target.value)}>
            <option value="BOG">(BOG) Aeropuerto Internacional El Dorado - Bogotá</option>
            <option value="AEP">(MDE) Aeropuerto Internacional José María Córdova - Rionegro/Medellín</option>
          </select>
        </div>

        <div className='relative pt-5'>
          <label className='align-top top-0 left-0 absolute bg-slate-50 ml-7 px-3 py-3 w-36 h-1 font-light text-xs'>Ciudad de destino: </label>
          <select name='destino' className='border-2 border-gray-300 pl-5 w-[1000px] h-14' value={destino} onChange={(e) => setDestino(e.target.value)}>
            <option value="BOG">(BOG) Aeropuerto Internacional El Dorado - Bogotá</option>
            <option value="AEP">(MDE) Aeropuerto Internacional José María Córdova - Rionegro/Medellín</option>
          </select>
        </div>

        <div className='flex'>
          <div className='relative pt-5 pr-12'>
            <label className='align-top top-0 left-0 absolute bg-slate-50 ml-7 px-3 py-3 w-32 h-1 font-light text-xs'>Fecha de salida: </label>
            <input type='date' className='border-2 border-gray-300 pl-5 w-[474px] h-14' name='fechaSalida' value={salida} onChange={(e) => setSalida(e.target.value)} />
          </div>

          <div className='relative pt-5'>
            <label className='align-top top-0 left-0 absolute bg-slate-50 ml-7 px-3 py-3 w-28 h-1 font-light text-xs'>Hora de salida: </label>
            <input type='time' className='border-2 border-gray-300 pl-5 w-[476px] h-14' value={horaSalida} name='horaSalida' onChange={(e) => setHoraSalida(e.target.value)} />
          </div>
        </div>

        <div className='flex'>
          <div className='relative pt-5 pr-12'>
            <label className='align-top top-0 left-0 absolute bg-slate-50 ml-7 px-3 py-3 w-36 h-1 font-light text-xs'>Fecha de llegada: </label>
            <input type='date' className='border-2 border-gray-300 pl-5 w-[474px] h-14' value={llegada} name='fechaLlegada' onChange={(e) => setLlegada(e.target.value)} />
          </div>

          <div className='relative pt-5'>
            <label className='align-top top-0 left-0 absolute bg-slate-50 ml-7 px-3 py-3 w-32 h-1 font-light text-xs'>Hora de llegada: </label>
            <input type='time' className='border-2 border-gray-300 pl-5 w-[476px] h-14' value={horaLlegada} name='horaLlegada' onChange={(e) => setHoraLlegada(e.target.value)} />
          </div>
        </div>

        <div className='flex'>
          <div className='relative pt-5 pr-12'>
            <label className='align-top top-0 left-0 absolute bg-slate-50 ml-7 px-3 py-3 w-32 h-1 font-light text-xs'>Tipo de aeronave: </label>
            <input type='text' className='border-2 border-gray-300 pl-5 w-[600px] h-14' value={aeronave} name='tipoAeronave' onChange={(e) => setAeronave(e.target.value)} />
          </div>

          <div className='relative pt-5'>
            <label className='align-top top-0 left-0 absolute bg-slate-50 ml-7 px-3 py-3 w-52 h-1 font-light text-xs'>Cantidad máxima de pasajeros: </label>
            <input type='number' className='border-2 border-gray-300 pl-5 w-[350px] h-14' value={pasajeros} name='cantidadPasajeros' onChange={handleNumberChange(setPasajeros)} />
          </div>
        </div>

        <div className='flex'>
          <div className='relative pt-5 pr-8'>
            <label className='align-top top-0 left-0 absolute bg-slate-50 ml-7 px-3 py-3 w-32 h-1 font-light text-xs'>Precio de tiquete: </label>
            <input type='number' className='border-2 border-gray-300 pl-5 w-[435px] h-14' value={tiquete} name='precioTicket' onChange={handleNumberChange(setTiquete)} />
          </div>

          <div className='relative pt-5 pr-8'>
            <label className='align-top top-0 left-0 absolute bg-slate-50 ml-7 px-3 py-3 w-24 h-1 font-light text-xs'>Impuestos(%): </label>
            <input type='number' className='border-2 border-gray-300 pl-5 w-[250px] h-14' value={impuestos} name='impuestos' onChange={handleNumberChange(setImpuestos)} />
          </div>

          <div className='relative pt-5'>
            <label className='align-top top-0 left-0 absolute bg-slate-50 ml-7 px-3 py-3 w-24 h-1 font-light text-xs'>Sobretasa(%): </label>
            <input type='number' className='border-2 border-gray-300 pl-5 w-[250px] h-14' value={sobretasa} name='sobretasa' onChange={handleNumberChange(setSobretasa)} />
          </div>
        </div>

        <button className='bg-blue-400 mt-4 px-6 rounded-sm h-10 text-white' type='submit'>CREAR VUELO</button>
      </form>

      {loading && <p>Cargando...</p>}
    </div>
  );
}

export default Form;
