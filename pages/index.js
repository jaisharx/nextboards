import { useDisclosure } from '@chakra-ui/react';

import NextHead from 'components/next-head';
import Header from 'components/header';
import CreateNewCategory from 'components/modal';
import Moodboards from 'components/moodboards';

export default function Home() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <NextHead title="Nextboards - Next Gen Moodboards." />

            <Header onOpen={onOpen}/>
            <CreateNewCategory isOpen={isOpen} onClose={onClose}/>
            <Moodboards/>
        </>
    );
}
