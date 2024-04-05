import React from 'react';

import { FormData } from './IFormData';

interface AddressInfoProps {
    formData : FormData,
    setFormData : Function
}


const AddressInfo = ({ formData, setFormData } : AddressInfoProps) => {
    return (
        <div className='form-fields-container'>
            <div >
                <label htmlFor="country-input">País</label>
                <input placeholder='Colombia' value={formData.country} type="text" name="country-input" id="country-input" 
                onChange={(e) => setFormData({...formData, country: e.target.value})
                }/>
            </div>

            <div>
                <label htmlFor="region-input">Departamento</label>
                <input placeholder='Antioquia' value={formData.region} type="text" name="region-input" id="region-input"
                onChange={(e) => setFormData({...formData, region: e.target.value})
                }/>
            </div>

            <div>
                <label htmlFor="city-input">Ciudad</label>
                <input placeholder='Medellín' value={formData.city} type="text" name="city-input" id="city-input"
                onChange={(e) => setFormData({...formData, city: e.target.value})
                }/>
            </div>

            <div>
                <label htmlFor="address-input">Dirección</label>
                <input placeholder='Calle 00 #00-00' value={formData.address} type="text" name="address-input" id="address-input"
                onChange={(e) => setFormData({...formData, address: e.target.value})
            }/>
            </div>
        </div>
    );
}

export { AddressInfo };
