import React from 'react';

import { FormData } from './IFormData';
import { SelectInput } from 'components/components-Auth-a/SelectInput';
import { InputWLabel } from 'components/components-Auth-a/InputWLabel';

interface AdditionalInfoProps {
    formData: FormData,
    setFormData: Function
}

const genderOptions = [
    { label: 'Hombre', value: 'male' },
    { label: 'Mujer', value: 'female' },
    { label: 'Otro', value: 'other' },
]

const AdditionalInfo = ({ formData, setFormData }: AdditionalInfoProps) => {
    return (
        <div className='form-fields-container gap-4 w-full'>
            <SelectInput
                label='Género'
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                selectedValue={formData.gender ?? ''}
                options={genderOptions}
            />
            <InputWLabel
                id='phone-number-input'
                label='Número de Celular'
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder='300 000 0000'
                type='number'
                value={formData.phone}

            />
            <InputWLabel
                id='birthday'
                label='Fecha de nacimiento'
                onChange={(e) => setFormData({ ...formData, birthdate: e.target.value })}
                placeholder=''
                type='date'
                value={formData.birthdate}
            />
        </div>
    );
}

export { AdditionalInfo };
