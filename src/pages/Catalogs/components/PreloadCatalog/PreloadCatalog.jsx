import React, { useState } from 'react';

import { Box } from '@mui/material';

import { PreloadProvider } from '../../context/PreloadContext';
import { catalogs } from '../../data/Catalogs.data';
import AccordionPanel from './Accordionanel';
import AccordionGrid from './AccordionGrid';
import { preloadStyles } from './styles';

const PreloadCatalog = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={preloadStyles.container}>
      <AccordionPanel expanded={expanded === 1} onChange={handleChange(1)} sx={preloadStyles.accordion}>
        <AccordionPanel.Summary id={1} title='Tipo de movimiento' />
        <AccordionPanel.Details>
          <PreloadProvider>
            <AccordionGrid
              id={catalogs.MOV}
            />
          </PreloadProvider>
        </AccordionPanel.Details>
      </AccordionPanel>
      <AccordionPanel expanded={expanded === 2} onChange={handleChange(2)} sx={preloadStyles.accordion}>
        <AccordionPanel.Summary id={2} title='Estatus' />
        <AccordionPanel.Details>
          <PreloadProvider>
            <AccordionGrid
              id={catalogs.EST}
            />
          </PreloadProvider>
        </AccordionPanel.Details>
      </AccordionPanel>
      <AccordionPanel expanded={expanded === 3} onChange={handleChange(3)} sx={preloadStyles.accordion}>
        <AccordionPanel.Summary id={3} title='Sucursales' />
        <AccordionPanel.Details>
          <PreloadProvider>
            <AccordionGrid
              id={catalogs.SUC}
            />
          </PreloadProvider>
        </AccordionPanel.Details>
      </AccordionPanel>
    </Box>
  )
}

export default PreloadCatalog;