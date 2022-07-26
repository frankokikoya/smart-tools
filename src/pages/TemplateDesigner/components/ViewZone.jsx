import React, { useContext } from 'react';

import Box from '@mui/material/Box';

import DesignerContext from '../context/DesignerContext';
import AddPage from './AddPage';
import DropZone from './DropZone';
import PageTitle from './PageTitle';
import ViewSection from './ViewSection';

const ViewZone = () => {

    const { pages, setPages } = useContext(DesignerContext);

    const addNewPage = () => {
        setPages((prev) => {
            return [
                ...prev,
                {
                    name: `Pág. ${pages.length + 1}`,
                    columns: []
                }
            ]
        });
    }
    return (
        <Box
            sx={{
                pl: pages.length === 1 ? 10 : 30,
                pr: pages.length === 1 ? 70 : 90,
                mb: 10,
                display: 'flex',
                justifyContent: 'center',
                mt: '10%',
                ...(pages.length === 1 ? { width: '100%' } : {})
            }}>
            {pages.map((p, i) => (
                <ViewSection key={`page-${i}`}>
                    <PageTitle pageNanme={p.name} />
                    <Box
                        sx={{
                            width: '100%',
                            display: 'flex'
                        }}>
                        <DropZone parent={i} columns={p.columns} />
                        {pages.length - 1 === i && <AddPage onClick={addNewPage} />}
                    </Box>
                </ViewSection>
            ))}
        </Box>
    )
}

export default ViewZone;