'use client'

import style from './btn.module.css';
import {useRouter} from 'next/navigation'

export default function Button(){

    const router = useRouter();

    return(

        <div>
            <button type='button' className={style.btnstyle} onClick={()=> router.push('/', {scroll: true})}>Subir</button>
        </div>
    )
}