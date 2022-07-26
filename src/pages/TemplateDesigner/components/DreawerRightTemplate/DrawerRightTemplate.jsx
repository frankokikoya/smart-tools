import React from 'react';

import Box from '@mui/material/Box';

import DrawerRight from '../DrawerRight/DrawerRight';
import OneColumnDrag from './OneColumnDrag';
import SubTitleDrag from './SubTitleDrag';
import { sxStyles } from './sxStyles';
import TextDrag from './TextDrag';
import ThreeColumnDrag from './ThreeColumnDrag';
import TitleDrag from './TitleDrag';
import TwoColumnDrag from './TwoColumnDrag';

const DrawerRightTemplate = () => {
    return (
        <DrawerRight>
            <DrawerRight.Section title='COLUMNAS' >
                <DrawerRight.Content>
                    <Box sx={sxStyles.content}>
                        <OneColumnDrag />
                        <TwoColumnDrag />
                        <ThreeColumnDrag />
                    </Box>
                </DrawerRight.Content>
            </DrawerRight.Section>
            <DrawerRight.Section title='TEXTO' >
                <DrawerRight.Content>
                    <Box sx={sxStyles.content}>
                        <TitleDrag />
                        <SubTitleDrag />
                        <TextDrag />
                    </Box>
                </DrawerRight.Content>
            </DrawerRight.Section>
        </DrawerRight>
    )
}

export default DrawerRightTemplate;