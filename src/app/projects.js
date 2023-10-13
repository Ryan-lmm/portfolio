

import style from './projects.module.css'
import Image from 'next/image'
import Script from 'next/script'
import Link from 'next/link'

export const metadata = {
    title: 'contato'
}


export default function Projects() {

    return (
        <div id='Projects' className={style.mainPro}>
            <div className={style.pContainer}>
                
                {/* <div className={style.box}>

                    <p><Link className={style.linkando} href='https://ryan-lmm.github.io/projetoStarbucks/' target='_blank'>
                        <Image
                            style={{
                                width:'100%',
                                height: 'auto'
                            }}
                            sizes='100vw'
                            src={star}
                            width={340}
                            height={400}

                            alt='starbucks'
                            priority='true'

                        />
                    </Link></p>



                </div> */}
                <div className={style.box}>

                    <p><Link className={style.linkando2} href='https://ryan-lmm.github.io/projeto2-DankiCode/' target='_blank'>

                        <Image
                            style={{
                                width:'100%',
                                height: 'auto'
                                
                            }}
                            sizes='100vw'
                            src='/landing.png'
                            width={340}
                            height={400}
                            alt='landing'
                            priority='true'

                        />


                    </Link></p>



                </div>
                <div className={style.box}>

                    <p><Link className={style.linkando3} href='https://ryan-lmm.github.io/CoffeeMorningDay/' target='_blank'>

                        <Image
                            style={{
                                width:'100%',
                                height: 'auto'
                            }}
                            sizes='100%'
                            src='/coffee.png'
                            width={340}
                            height={400}

                            alt='coffee'
                            priority='true'

                        /></Link></p>

                </div>
                

            </div>

        </div>
    )
}                 
