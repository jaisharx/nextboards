import { Button } from '@chakra-ui/button';
import { Box, Flex, Text } from '@chakra-ui/layout';

export default function Header({ onOpen }) {
    return (
        <Flex as="header" background="gray.100" h="120" alignItems="flex-end">
            <Flex maxW="88%" w="100%" mx="auto" mb="4" alignItems="center">
                <Box mr="auto">
                    <Text fontSize="3xl">
                        NextBoards
                    </Text>
                    <Text>Next Gen Moodboards</Text>
                </Box>
                <Button colorScheme="blue" variant="outline" onClick={onOpen}>
                    Add a category
                </Button>
            </Flex>
        </Flex>
    );
}
