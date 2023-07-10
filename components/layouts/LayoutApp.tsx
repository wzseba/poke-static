import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';


interface Props {
    // children: JSX.Element
    children: ReactNode,
    title?: string
}
  
export const LayoutApp: FC<Props> = ({children, title}) => {
  return (
    <>
        <Head>
            <title>{ title || 'Poke Static' }</title>
            <meta name="author" content='Sebastian Vera'/>
            <meta name='description' content={`Informacion sobre el pokemon ${title}`}/>
            <meta name='keywords' content={`${title}, pokemon, pokedex`}/>
        </Head>
        
        <Navbar/>

        <main style={{
            padding: '0 2rem'
        }}>
            {children}
        </main>
    </>
  )
}
