import NextHead from 'components/next-head';
import Header from 'components/header';
import CreateNewCategory from 'components/modal';
import Moodboards from 'components/moodboards';

import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';

const initalBoards = ['3d', 'Colourful', 'Modern', 'Illustrations'];

export default function Home() {
    const [moodboards, setMoodboards] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <NextHead title="Nextboards - Next Gen Moodboards." />

            <Header onOpen={onOpen} />
            <Moodboards moodboards={moodboards} />
            <CreateNewCategory isOpen={isOpen} onClose={onClose} setMoodboards={setMoodboards} />
        </>
    );
}
