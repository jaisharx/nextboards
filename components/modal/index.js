import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Select
} from '@chakra-ui/react';

export default function CreateNewCategory({ isOpen, onClose }) {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create new category</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Select placeholder="3d">
                        <option value="option1">Modern</option>
                        <option value="option2">Classic</option>
                        <option value="option3">Illustrations</option>
                    </Select>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="green" onClick={onClose}>
                        Save
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
