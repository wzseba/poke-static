import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { LayoutApp } from "@/components/layouts";
import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";

interface Props{
    pokemon: Pokemon;
}


const PokemonPage: NextPage<Props> = ({ pokemon }) => {


  return (
    <LayoutApp title={`Informacion de ${pokemon.name}`}>
        <h1>{pokemon.name}</h1>
    </LayoutApp>
  )
}

export default PokemonPage

export const getStaticPaths: GetStaticPaths = async () => {

    const pokemons151 = [...Array(151)].map(( value, index )=> `${ index + 1 }`);
    
    return {
      paths: pokemons151.map(id => ({
        params: { id }
      })),
      fallback: false, // false or "blocking"
    }
  }

export const getStaticProps: GetStaticProps = async ({ params }) => {
    
    const { id } = params as { id: string };

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${ id }`);

    return {
      props: {
        pokemon: data
      },
    }
  }