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
import { createRef } from 'react';

export default function CreateNewCategory({ isOpen, onClose, setMoodboards }) {
    const selectValue = createRef();
    
    const onSave = () => {
        setMoodboards(( prevBoards) => [...prevBoards, selectValue.current.value.toUpperCase()]);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create new category</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Select ref={selectValue} placeholder="Select a category">
                        <option value="modern">Modern</option>
                        <option value="classic">Classic</option>
                        <option value="illustrations">Illustrations</option>
                    </Select>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="green" onClick={onSave}>
                        Save
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
}
