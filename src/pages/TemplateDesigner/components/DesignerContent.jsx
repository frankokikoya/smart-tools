import React, { useContext, useState } from 'react';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import DesignerContext from '../context/DesignerContext';
import AppBarDesigner from './AppBarDesigner';
import DrawerEditColumn from './DrawerEditColumn';
import DrawerLeft from './DrawerLeft';
import DrawerRightCal from './DrawerRightCal';
import DrawerRightCOG from './DrawerRightCOG';
import DrawerRightTemplate from './DreawerRightTemplate';
import ViewZone from './ViewZone';

const DesignerContent = () => {
    const [layoutSelected, setLayoutSelected] = useState(2);
    const [drawerLeftSelected, setDrawerLeftSelected] = useState(0);
    const { selectedRow, setSelectedRow } = useContext(DesignerContext);

    const hanldeClickLayout = (layout) => setLayoutSelected(layout);
    const hanldeClickDrawerLeft = (iconNumber) => {
        setSelectedRow({});
        setDrawerLeftSelected(iconNumber);
    };
    const AddSection = () => console.log('Click add');
    const SubSection = () => console.log('Click add');

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
                {selectedRow?.id && <DrawerEditColumn />}
            </DndProvider>
        </>
    )
}

export default DesignerContent;