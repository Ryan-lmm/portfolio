import './global.css';
import Head from './components/Head/head'
import Footer from './components/Footer/footer'
import About from './about';
import Projects from './projects';
import Button from './components/btnTop/btn';

export const metadata = {
  title:'aprendendo',
  

}


export default function RootLayout({ children }) {
 return (
    <html lang="pt-br">
      
        <body>
        <Head/>
        <Button />
        {children}
        <About/>
        <Projects/>
        <Footer/>
          </body>
      
      
    </html>
  )
}
