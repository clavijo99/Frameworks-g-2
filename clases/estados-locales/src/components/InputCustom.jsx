import { useState } from 'react'



export default function InputCustom({ isPassword, setValue }) {


    const [showPAssword, setShowPassword] = useState(false) // mostrar o ocultar la contraseña



    return (
        <div className='flex border rounded ' >
            <input type={isPassword ? showPAssword ? 'text' : 'password' : 'text'}  onChange={(v) => setValue(v.target.value) } />
            {
                isPassword && <div onClick={() => setShowPassword((v) => !v)} >
                    {showPAssword ? '🙈' : '👀'}
                </div>
            }
        </div>
    )
}