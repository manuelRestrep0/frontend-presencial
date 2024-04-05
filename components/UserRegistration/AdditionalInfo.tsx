import React from 'react';

import { FormData } from './IFormData';

interface AdditionalInfoProps {
    formData : FormData,
    setFormData : Function
}

const AdditionalInfo = ({ formData, setFormData } : AdditionalInfoProps) => {
    return (
        <div className='form-fields-container'>
            <div>
                <label htmlFor="gender-dropdown">Género: </label>
                <select name="gender-dropdown" id="gender-dropdown" onChange={(e) => setFormData({...formData, gender: e.target.value})
                }>
                    <option selected={formData.gender === ""} value="">Seleccionar</option>
                    <option selected={formData.gender === "male"} value="male">Hombre</option>
                    <option selected={formData.gender === "female"} value="female">Mujer</option>
                    <option selected={formData.gender === "other"} value="other">Otro</option>
                </select>
            </div>

            <div>
                <label htmlFor="phone-number-input">Número de Celular</label>
                <input placeholder='300 000 0000' value={formData.phoneNumber} type="number" name="phone-number-input" id="phone-number-input"
                onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})
                }/>
            </div>

            <div>
                <label htmlFor="birthday">Fecha de nacimiento:</label>
                <input defaultValue={formData.birthday} type="date" id="birthday" name="birthday"
                onChange={(e) => setFormData({...formData, birthday: e.target.value})
                }/>
            </div>            
        </div>
    );
}

export { AdditionalInfo };
