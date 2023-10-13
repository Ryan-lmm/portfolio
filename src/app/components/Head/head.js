import Link from 'next/link';
import Image from 'next/image'
import style from './head.module.css';
import amsterdam from 'next/font/local';
import { Open_Sans } from 'next/font/google';

const fonte = amsterdam({
    src:'./Amsterdam.ttf',
    weight:"400",
    subsets: ['latin']
})

const fonte2 = Open_Sans({
    weight: '500',
    subsets: ['latin']
})

export default function Head(){
    return(
        <>
            <div className={style.menu}>
                <h2 className={fonte.className}>Ryan Lopes Martins</h2>
                
                <div className={style.links_menu}>
                    <span className={fonte2.className}><Link href="/" className={style.link_style}>Home</Link></span>
                    <span className={fonte2.className}><Link href="#About" className={style.link_style}>Me</Link></span>
                    <span className={fonte2.className}><Link href="#Projects" className={style.link_style}>Projects</Link></span>
                </div>
            </div>
        </>


    );
}