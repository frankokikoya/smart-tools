import React, { useContext, useEffect, useState } from 'react';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { useLocalStorage } from '../../../hooks';
import DesignerContext from '../context/DesignerContext';
import AppBarDesigner from './AppBarDesigner';
import DrawerEditColumn from './DrawerEditColumn';
import DrawerLeft from './DrawerLeft';
import DrawerRightCal from './DrawerRightCal';
import DrawerRightCOG from './DrawerRightCOG';
import DrawerRightGrid from './DrawerRightGrid/DrawerRightGrid';
import DrawerRightTemplate from './DreawerRightTemplate';
import ViewZone from './ViewZone';

const DesignerContent = () => {
    const [pagesSaved, setPagesSaved] = useLocalStorage('PAGES');
    const [layoutSelected, setLayoutSelected] = useState(2);
    const [drawerLeftSelected, setDrawerLeftSelected] = useState(0);
    const { pages, setPages, selectedRow, setSelectedRow } = useContext(DesignerContext);

    const hanldeClickLayout = (layout) => setLayoutSelected(layout);
    const hanldeClickDrawerLeft = (iconNumber) => {
        setSelectedRow({});
        setDrawerLeftSelected(iconNumber);
    };
    const AddSection = () => console.log('Click add');
    const SubSection = () => {
        setPagesSaved(pages);
    };

    useEffect(() => {
        if (pagesSaved?.length > 0) {
            setPages(pagesSaved);
        }
    }, [pagesSaved, setPages])

    return (
        <>
            <AppBarDesigner
                selected={layoutSelected}
                handleClick={hanldeClickLayout}
                handleAdd={AddSection}
                handleSub={SubSection}
            />
            <DrawerLeft selected={drawerLeftSelected} handleClick={hanldeClickDrawerLeft} />
            <DndProvider backend={HTML5Backend}>
                <ViewZone />
                {drawerLeftSelected === 0 && <DrawerRightCOG />}
                {drawerLeftSelected === 1 && <DrawerRightTemplate />}
                {drawerLeftSelected === 3 && <DrawerRightCal />}
                {drawerLeftSelected === 4 && <DrawerRightGrid />}
                {selectedRow?.id && <DrawerEditColumn />}
            </DndProvider>
        </>
    )
}

export default DesignerContent;