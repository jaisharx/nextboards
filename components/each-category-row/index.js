import CreateMoodboard from 'components/create-moodboard';
import Moodboard from 'components/moodboard';
import { Grid, Text } from '@chakra-ui/react';

export default function EachCategoryRow({ categoryTitle }) {
    return (
        <>
            <Text maxW="88%" mx="auto" mt="6" fontSize="3xl">
                {categoryTitle}
            </Text>
            <Grid
                maxW="88%"
                mx="auto"
                mt="4"
                templateColumns="repeat(3, 1fr)"
                gap={3}
            >
                <CreateMoodboard />
                <Moodboard />
                <Moodboard />
                <Moodboard />
                <Moodboard />
            </Grid>
        </>
    );
}
