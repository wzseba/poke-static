import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import { LayoutApp } from "@/components/layouts";
import { pokeApi } from "@/api";
import { Pokemon } from "@/interfaces";
import { Button, Card, Container, Grid, Text, Image } from "@nextui-org/react";


interface Props{
    pokemon: Pokemon;
}


const PokemonPage: NextPage<Props> = ({ pokemon }) => {


  return (
    <LayoutApp title={`Informacion de ${pokemon.name}`}>
        <Grid.Container css={{marginTop: '5px'}} gap={2}>
          <Grid xs={12} sm={4}>
            <Card isHoverable css={{padding: '30px'}}>
              <Card.Body>
                <Card.Image
                  src={pokemon.sprites.other?.dream_world.front_default || 'no-image.png'}
                  alt={pokemon.name}
                  width="100%"
                  height={200}
                />
              </Card.Body>
            </Card>
          </Grid>

        <Grid xs={12} sm={8}>
          <Card>
            <Card.Header css={{display: 'flex' ,justifyContent: 'space-between'}}>
              <Text h1 transform="capitalize">{pokemon.name}</Text>
              <Button bordered color="gradient" auto>
                Guardar en Favoritos
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Sprites:</Text>
              <Container direction="row" display="flex">
                <Image
                  src={pokemon.sprites.front_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_default}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.front_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
                <Image
                  src={pokemon.sprites.back_shiny}
                  alt={pokemon.name}
                  width={100}
                  height={100}
                />
              </Container>
            </Card.Body>
          </Card>
        </Grid>



        </Grid.Container>
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