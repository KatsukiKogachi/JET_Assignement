import React from 'react';
import { Stack, Box, Text, Heading, StackDivider, Card, CardHeader, CardBody, SimpleGrid, Image } from '@chakra-ui/react';
import TagComponent from './tag'

const CardComponent = ({ restaurants }: { restaurants: any[] }) => (
    <SimpleGrid spacing={4} margin='40px auto 40px auto' width='80%' templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        {restaurants.slice(0, 10).map((place: any, index: number) => {
            return (<Card key={index}>
                <CardHeader>
                    <Heading textAlign='center' size='md'>{place.name}</Heading>
                </CardHeader>

                <CardBody>
                    <Image
                        src={place.logoUrl}
                        alt='Restaurant Logo'
                        borderRadius='lg'
                        width='50%' margin='0 auto 40px auto' />
                    <Stack divider={<StackDivider />} spacing='4'>
                        <Box>
                            <TagComponent cuisines={place.cuisines}></TagComponent>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Rating
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                {place.rating.starRating}
                            </Text>
                        </Box>
                        <Box>
                            <Heading size='xs' textTransform='uppercase'>
                                Address
                            </Heading>
                            <Text pt='2' fontSize='sm'>
                                {place.address.city}:{"\n"}
                                {place.address.firstLine}
                            </Text>
                        </Box>
                    </Stack>
                </CardBody>
            </Card>)
        })}

    </SimpleGrid>
)

export default CardComponent;