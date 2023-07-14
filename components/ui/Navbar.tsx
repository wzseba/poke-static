import { Spacer, Text, useTheme } from "@nextui-org/react"
import Image from "next/image";
import Link from "next/link";


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
        
          <Text color="white" h2>P</Text>
        <Link href="/">  
          <Text color="white" h3>okemon</Text>
        </Link>
        
        <Spacer css={{flex: 1}}/>
        <Text color="white">Favoritos</Text>
    </div>
  )
}
