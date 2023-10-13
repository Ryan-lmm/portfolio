import Link from "next/link"
import style from './about.module.css'
import Script from 'next/script'
import {Open_Sans} from 'next/font/google';
import {Bree_Serif} from 'next/font/google'

const font = Open_Sans({
    weight: '700',
    subsets: ['latin']
})

const fontB = Bree_Serif({
    subsets: ['latin'],
    weight: '400',
})

export default function About(){
    return (

        <div id='About' className={style.mainabout}>
            <div className={style.container}>
                <h1 id='criador' className={font.className}>Sou um criador de Sites</h1>
                <Script id="show-text">{`
                
                var tempo = setTimeout(()=>{
                    const texto = document.getElementById('criador');
                function write(el){
                    let txtArr = el.innerText.split('');
                    el.innerHTML = "";
                    txtArr.forEach((letra, i)=>{
                        setTimeout(()=>{
                            el.innerHTML += letra
                        }, 100 * i)
                    })
                }
                write(texto)
                }, 4000)

                

                `}</Script>
                <p className={fontB.className}>Meu nome é Ryan, eu faço sites para pessoas
                    que precisam <u style={{color: '#ff7300'}}>ganhar mais clientes</u> e <br/>
                    <u style={{color: '#ff7300'}}>aumentar seu faturamento</u><br/>
                    modéstia a parte, sou muito bom no<br/>
                    
                    que <u style={{color: '#ff7300'}}>Eu</u> faço e garanto <u style={{color: '#ff7300'}}>qualidade</u>.
                </p>

                <h1 className={font.className}>Veja meus <u style={{color: '#ff7300'}}>projetos</u></h1>
            </div>
        </div>

    )
}
