import EachCategoryRow from 'components/each-category-row';
import { Box, Text, Flex } from '@chakra-ui/react';

export default function Moodboards({ moodboards }) {
    if (moodboards.length === 0)
        return (
            <Flex h="80vh" alignItems="center" justifyContent="center">
                <Text>You need to add a category to get started.</Text>
            </Flex>
        );

    return (
        <Box mb="6">
            {moodboards.map((moodboard) => (
                <EachCategoryRow key={moodboard} categoryTitle={moodboard} />
            ))}
        </Box>
    );
}
