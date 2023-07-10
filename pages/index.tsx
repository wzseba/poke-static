import { FC } from "react";

import { pokeApi } from "@/api";
import { LayoutApp } from "@/components/layouts";
import { PokemonListResponse, SmallPokemon } from "@/interfaces";

interface Props{
  pokemons: SmallPokemon[]
}

const Home: FC<Props> = ({pokemons})=> {

  
  return (
    <LayoutApp title="Listado de Pokemones">
      <ul>
        {
          pokemons.map(({id, name})=>(
            <li key={id}>
              #{id} - {name}
            </li>
          ))
        }
      </ul>
    </LayoutApp>
  )
}
export default Home;

export async function getStaticProps() {
  // "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"

 const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i +1}.svg`
  }))

  return {
    props: {
      pokemons
    },
  }
}
