import { Grid, Flex, Text } from '@chakra-ui/react';
import CreateMoodboard from 'components/create-moodboard';
import Moodboard from 'components/moodboard';

export default function Moodboards() {
    return (
        <>
            <Text maxW="88%" mx="auto" mt="6" fontSize="3xl">
                3d
            </Text>
            <Grid
                maxW="88%"
                mx="auto"
                mt="4"
                templateColumns="repeat(3, 1fr)"
                gap={3}
            >
                <CreateMoodboard/>                
                <Moodboard/>
                <Moodboard/>
                <Moodboard/>
                <Moodboard/>
            </Grid>
        </>
    );
}
