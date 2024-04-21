import React from 'react';

import { FormData } from './IFormData';
import { Session } from 'next-auth';

interface SignupInfoProps {
    formData : FormData,
    setFormData : Function
    setValidSignup : Function,
    thridPartySession : Session | null
}

const SignupInfo = ({ formData, setFormData, setValidSignup, thridPartySession } : SignupInfoProps) => {

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
                <input disabled={thridPartySession?.user ? true : false} placeholder='john@gmail.com' value= {thridPartySession?.user ? (thridPartySession.user.email as string) : (formData.email)} type="email" name="email-input" id="email-input"
                onChange={(e) => setFormData({...formData, email: e.target.value})}/>
            </div>

            <div>
                <label htmlFor="username-input">Nombre de Usuario</label>
                <input placeholder='' value={formData.username} type="text" name="username-input" id="username-input"
                onChange={(e) => setFormData({...formData, username: e.target.value})
                }/>
            </div>

            <div className={thridPartySession?.user ? "invisible" : ""}>
                <label htmlFor="password-input">Contraseña</label>
                <input placeholder='' value={formData.password} type="password" name="password-input" id="password-input"
                onChange={
                    (e) => {
                        setFormData({...formData, password: e.target.value})
                        setValidSignup(checkPassword(e.target.value))
                    }
                }/>
            </div>

            <div className={thridPartySession?.user ? "invisible" : ""}>
                <label htmlFor="confirm-password-input">Confirmar contraseña</label>
                <input placeholder='' value={formData.confirmPassword} type="password" name="confirm-password-input" id="confirm-password-input"
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})
                }/>
            </div>
        </div>
    );
}

export { SignupInfo };