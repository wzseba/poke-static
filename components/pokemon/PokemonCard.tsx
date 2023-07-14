import { FC } from 'react';
import { useRouter } from 'next/router';

import { SmallPokemon } from '@/interfaces';
import { Card, Grid, Row, Text } from '@nextui-org/react';


interface Props {
    pokemon: SmallPokemon;
}

export const PokemonCard: FC<Props> = ({ pokemon: { id, name, img } }) => {

    const router = useRouter();

    const onclick = ()=>{
        router.push(`/pokemon/${id}`);
    }

  return (
    <Grid xs={6} sm={3} md={2} key={id}>
        <Card isHoverable variant="bordered" isPressable onClick={onclick}>
            <Card.Body css={{p: 1}}>
                <Card.Image
                    src={img}
                    width="100%"
                    height={140}
                />
            </Card.Body>
            <Card.Footer>
                <Row justify="space-between">
                    <Text transform="capitalize">{name}</Text>
                    <Text>#{id}</Text>
                </Row>
            </Card.Footer>
        </Card>
    </Grid>
  )
}
