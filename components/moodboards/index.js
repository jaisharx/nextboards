import EachCategoryRow from 'components/each-category-row';
import { Box } from '@chakra-ui/react';

export default function Moodboards() {
    return (
        <Box mb="6">
           <EachCategoryRow categoryTitle="3d"/>
           <EachCategoryRow categoryTitle="Modern"/>
           <EachCategoryRow categoryTitle="Classic"/>
           <EachCategoryRow categoryTitle="Illustrations"/>
        </Box>
    );
}
