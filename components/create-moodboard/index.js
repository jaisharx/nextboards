import { Tooltip, Flex } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';


export default function CreateMoodboard() {
    return (
        <Tooltip
            label="Create a new moodboard"
            aria-label="Create a new mooboard"
        >
            <Flex
                border="2px dashed lightgray"
                borderRadius="4"
                h="480"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                _hover={{
                    borderStyle: 'solid',
                }}
                sx={{ cursor: 'pointer' }}
            >
                <AddIcon w="6" h="6" color="gray.500" />
            </Flex>
        </Tooltip>
    );
}
