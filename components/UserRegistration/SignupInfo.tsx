import React from 'react';

import { FormData } from './IFormData';
import { isValid } from 'zod';

interface SignupInfoProps {
    formData : FormData,
    setFormData : Function
    setValidSignup : Function,
    isValidSignup : boolean
}

const SignupInfo = ({ formData, setFormData, setValidSignup, isValidSignup } : SignupInfoProps) => {

    const checkPassword = (password : string) => {

        const requiredLength = 8;
        const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>+-]/.test(password);
        const hasUpperCaseLetter = /[A-Z]/.test(password);
        const hasLowerCaseLetter = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
    
        return (
            password.length >= requiredLength &&
            hasSpecialCharacter &&
            hasUpperCaseLetter &&
            hasLowerCaseLetter &&
            hasNumber
        );
    }

    return (
        <div className='form-fields-container'>

            <div>
                <label htmlFor="email-input">Email</label>
                <input placeholder='john@gmail.com' value={formData.email} type="email" name="email-input" id="email-input"
                onChange={(e) => setFormData({...formData, email: e.target.value})
                }/>
            </div>

            <div>
                <label htmlFor="username-input">Nombre de Usuario</label>
                <input placeholder='' value={formData.username} type="text" name="username-input" id="username-input"
                onChange={(e) => setFormData({...formData, username: e.target.value})
                }/>
            </div>

            <div>
                <label htmlFor="password-input">Contraseña</label>
                <input placeholder='' value={formData.password} type="password" name="password-input" id="password-input"
                onChange={
                    (e) => {
                        setFormData({...formData, password: e.target.value})
                        setValidSignup(checkPassword(e.target.value))
                    }
                }/>
            </div>

            <div>
                <label htmlFor="confirm-password-input">Confirmar contraseña</label>
                <input placeholder='' value={formData.confirmPassword} type="password" name="confirm-password-input" id="confirm-password-input"
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})
                }/>
            </div>
        </div>
    );
}

export { SignupInfo };