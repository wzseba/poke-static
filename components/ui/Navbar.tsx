import Link from "next/link";

import { Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image";



export const Navbar = () => {
   const {theme} = useTheme();
  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0 2rem',
        backgroundColor: theme?.colors.gray100.value
    }}>
        <Image
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
            alt="icono de la app"
            width={70}
            height={70}
            priority={true}
        />
     
          <Link href='/'>
            <Text transform="capitalize" color="white" h2>pokemon</Text>
          </Link>
       
        <Spacer css={{flex: 1}}/>
        <Link href='/favorites'>
          <Text color="white">Favoritos</Text>
        </Link>
    </div>
  )
}
