import React from 'react';

import { FormData } from './IFormData';

interface BasicInfoProps {
    formData : FormData,
    setFormData : Function
}

const BasicInfo = ( { formData, setFormData } : BasicInfoProps) => {


    return (
        <div className='form-fields-container'>

            <div>
                <label htmlFor="first-name-input">Nombre</label>
                <input placeholder='John' value={formData.firstName} type="text" name="first-name-input" id="first-name-input"
                onChange={(e) => setFormData({...formData, firstName: e.target.value})
                }/>
            </div>

            <div>
                <label htmlFor="last-name-input">Apellidos</label>
                <input placeholder='Doe' value={formData.lastName} type="text" name="last-name-input" id="last-name-input"
                onChange={(e) => setFormData({...formData, lastName: e.target.value})
                }/>
            </div>

            <div>
                <label htmlFor="id-type-dropdown">Tipo de documento</label>
                <select name="id-type-dropdown" id="id-type-dropdown"onChange={(e) => setFormData({...formData, idType: e.target.value})
                }>
                    <option selected={formData.idType === ""} value="">Seleccionar</option>
                    <option selected={formData.idType === "CC"} value="CC">Cédula de ciudadanía</option>
                    <option selected={formData.idType === "CE"} value="CE">Cédula de Extranjería</option>
                    <option selected={formData.idType === "TI"} value="TI">Tarjeta de Identidad</option>
                    <option selected={formData.idType === "PAS"} value="PAS">Pasaporte</option>
                </select>
            </div>

            <div>
                <label htmlFor="identification-input">Número de identification</label>
                <input value={formData.idNumber} type="number" name="identification-input" id="identification-input" placeholder="000000000"
                onChange={(e) => setFormData({...formData, idNumber: e.target.value})
                }/>
            </div>
        </div>
    );
}

export { BasicInfo };