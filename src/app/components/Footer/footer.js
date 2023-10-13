import style from './footer.module.css'
import amsterdam from 'next/font/local';

const fonte = amsterdam({
    src: '../Head/Amsterdam.ttf',
    subsets: ['latin'],
    weight: '500'
})

export default function Footer(){
    return(

        <div className={style.rodape}>

            <h1 className={fonte.className}>Ryan Lopes Martins</h1>
            <p style={{fontSize: '20px'}}>Todos os direitos reservados<br/>&copy; <b>Ryan Lopes Martins</b></p>

        </div>

    );
}