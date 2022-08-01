import React, { useContext } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import DesignerContext from '../../context/DesignerContext';
import { typeColumn } from '../../data/DrawerItems';
import DrawerRight from '../DrawerRight';

const sxStyles = {
    columnContainer: {
        width: '30.3em',
        display: 'flex',
        justifyContent: 'space-between',
    },
    itemContainer: {
        width: '30%',
        height: '6em',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        cursor: 'pointer',
        '&:hover': {
            border: '2px solid #64b5f6'
        }
    }
};

const DrawerEditColumn = () => {
    const { changeTypeColumn, deletedColumn, selectedRow, setSelectedRow } = useContext(DesignerContext);

    const changeColumn = (newTypeColumn) => {
        changeTypeColumn({
            parent: selectedRow.parent,
            index: selectedRow.index,
            prevType: selectedRow.type,
            newType: newTypeColumn,
        });
        setSelectedRow((prev) => {
            return {
                ...prev,
                typeColumn: newTypeColumn
            };
        });
    };

    const deleteColumn = () => {
        deletedColumn({
            parent: selectedRow.parent,
            index: selectedRow.index,
        });
        setSelectedRow({});
    };

    return (
        <DrawerRight>
            <DrawerRight.Section title='COMPONENTE-1 COLUMNA' >
                <DrawerRight.Content>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography sx={{ fontWeight: 'bold', mb: 2 }}>
                            Número de columnas
                        </Typography>
                        <Box sx={sxStyles.columnContainer}>
                            <Box
                                onClick={() => changeColumn(typeColumn.ONE_COLUMN)}
                                sx={sxStyles.itemContainer}>
                                <Box sx={{
                                    width: '100%',
                                    height: '100%',
                                    border: selectedRow?.typeColumn === typeColumn.ONE_COLUMN
                                        ? '2px solid #F6A704' : '1px solid #D8D8D8'
                                }} />
                            </Box>
                            <Box
                                onClick={() => changeColumn(typeColumn.TWO_COLUMN)}
                                sx={sxStyles.itemContainer}>
                                <Box sx={{
                                    width: '49%',
                                    height: '100%',
                                    border: selectedRow?.typeColumn === typeColumn.TWO_COLUMN
                                        ? '2px solid #F6A704' : '1px solid #D8D8D8'
                                }} />
                                <Box sx={{
                                    width: '49%',
                                    height: '100%',
                                    border: selectedRow?.typeColumn === typeColumn.TWO_COLUMN
                                        ? '2px solid #F6A704' : '1px solid #D8D8D8'
                                }} />
                            </Box>
                            <Box
                                onClick={() => changeColumn(typeColumn.THREE_COLUMN)}
                                sx={sxStyles.itemContainer}>
                                <Box sx={{
                                    width: '32%',
                                    height: '100%',
                                    border: selectedRow?.typeColumn === typeColumn.THREE_COLUMN
                                        ? '2px solid #F6A704' : '1px solid #D8D8D8'
                                }} />
                                <Box sx={{
                                    width: '32%',
                                    height: '100%',
                                    border: selectedRow?.typeColumn === typeColumn.THREE_COLUMN
                                        ? '2px solid #F6A704' : '1px solid #D8D8D8'
                                }} />
                                <Box sx={{
                                    width: '32%',
                                    height: '100%',
                                    border: selectedRow?.typeColumn === typeColumn.THREE_COLUMN
                                        ? '2px solid #F6A704' : '1px solid #D8D8D8'
                                }} />
                            </Box>
                        </Box>
                    </Box>
                </DrawerRight.Content>
            </DrawerRight.Section>
            <DrawerRight.Section title='CONTENIDO' >
                <DrawerRight.Content>
                </DrawerRight.Content>
            </DrawerRight.Section>
            <DrawerRight.Section title='' >
                <DrawerRight.Content>
                    <Box sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                    }}>
                        <Button
                            variant='outlined'
                            onClick={deleteColumn}
                            sx={{ width: '100%' }}>
                            Borrar columna
                        </Button>
                        <Typography sx={{ color: '#898A8E', mt: 2 }}>
                            Se removerán todos los campos de formulario
                        </Typography>
                    </Box>
                </DrawerRight.Content>
            </DrawerRight.Section>
        </DrawerRight>
    )
}

export default DrawerEditColumn;