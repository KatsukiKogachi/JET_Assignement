import React from 'react';
import { Box, Heading, Tag } from '@chakra-ui/react';

const TagComponent = ({ cuisines }: { cuisines: any[] }) => (
    <Box>
        <Heading size='xs' textTransform='uppercase'>
            Cuisine
        </Heading>
        {
            cuisines.slice(0, 3).map((tag: any, index: number) => {
                return (
                    <Tag key={index} margin='10px 10px 0 0'>
                        {tag.name}
                    </Tag>
                )
            })
        }
    </Box>);

export default TagComponent;