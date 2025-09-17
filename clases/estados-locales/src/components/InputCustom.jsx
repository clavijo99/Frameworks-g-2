import { useState } from 'react'

 

export default function InputCustom({ isPassword  }){


const [showPAssword, setShowPassword] = useState(false) // mostrar o ocultar la contraseña



    return (
        <div className='flex border rounded ' >
            <input type={ isPassword ? showPAssword ? 'text' : 'password' :  'text'  } />
            <div onClick={ () => setShowPassword( (v) => !v ) } >
                { showPAssword ? '🙈' : '👀' }
            </div>
        </div>
    )
}