'use client'

import style from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';
import {Open_Sans} from 'next/font/google'
import Script from 'next/script'

const font = Open_Sans({
    weight: "500",
    subsets: ['latin'],
})



export default function Page(){
  return (

    <div className={style.backimage}>
        
        <h1 className={font.className}>Olá seja bem vindo ao <br/> meu portfólio</h1>
         <Script id='show-write'>
          {`
          const titulo = document.querySelector('h1')
          function typewrite(elemento){
            const textArray = elemento.innerText.split('');
            elemento.innerHTML = "";
            textArray.forEach((letra, i)=>{
              setTimeout(function(){
                elemento.innerHTML += letra;
              }, 100 * i)
            })
          }
          typewrite(titulo);
          
          

          
          `}
         </Script>
          <div className={style.seta}>

            <Image
            src='/setadown.png'
            alt= 'seta down'
            width={75}
            height={75}
            style={{scrollBehavior: 'smooth'}}
            />

          </div>
          
    </div>
  );
}