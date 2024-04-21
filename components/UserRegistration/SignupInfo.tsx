import React from 'react';

import { FormData } from './IFormData';
import { isValid } from 'zod';
import { InputWLabel } from 'components/components-Auth-a/InputWLabel';

interface SignupInfoProps {
    formData: FormData,
    setFormData: Function
    setValidSignup: Function,
    isValidSignup: boolean
}

const SignupInfo = ({ formData, setFormData, setValidSignup, isValidSignup }: SignupInfoProps) => {

    const checkPassword = (password: string) => {

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
        <div className='form-fields-container gap-4 w-full'>
            <InputWLabel
                id="email-input"
                label='Email'
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder='john@gmail.com'
                type="email"
                value={formData.email}
            />
            <InputWLabel
                id="username-input"
                label='Nombre de Usuario'
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                type="text"
                value={formData.username}
            />
            <InputWLabel
                id="password-input"
                label='Constraseña'
                onChange={
                    (e) => {
                        setFormData({ ...formData, password: e.target.value })
                        setValidSignup(checkPassword(e.target.value))
                    }
                }
                type="password" 
                value={formData.password} 
            />
            <InputWLabel
                id="confirm-password-input"
            label='Confirmar contraseña'
            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
            type="password"
            value={formData.confirmPassword}
            />
        </div>
    );
}

export { SignupInfo };