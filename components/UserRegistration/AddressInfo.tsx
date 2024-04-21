import React from 'react';

import { FormData } from './IFormData';
import { InputWLabel } from 'components/components-Auth-a/InputWLabel';

interface AddressInfoProps {
    formData: FormData,
    setFormData: Function
}


const AddressInfo = ({ formData, setFormData }: AddressInfoProps) => {
    return (
        <div className='form-fields-container gap-4 w-full'>
            <InputWLabel
                id="country-input"
                label='País'
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                placeholder='Colombia'
                value={formData.country}
                type="text"
            />
            <InputWLabel
                id="region-input"
                label='Departamento'
                onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                placeholder='Antioquia'
                type="text"
                value={formData.region}
            />
            <InputWLabel
                id="city-input"
                label='Ciudad'
                onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                placeholder='Medellín'
                type="text"
                value={formData.city}
            />
            <InputWLabel
                id="address-input"
                label='Dirección'
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder='Calle 00 #00-00'
                type="text"
                value={formData.address}
            />
        </div>
    );
}

export { AddressInfo };
