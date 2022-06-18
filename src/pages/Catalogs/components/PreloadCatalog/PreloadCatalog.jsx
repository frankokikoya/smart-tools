import React from 'react';

import AddIcon from '@mui/icons-material/Add';
import { Box } from '@mui/material';

import MainButton from '../../../../components/MainButton';
import { preloadColumns, preloadRows } from '../../data/Accessories.data';
import AccordionPanel from './Accordionanel';
import AccordionGrid from './AccordionGrid';
import { preloadStyles } from './styles';


const PreloadCatalog = () => {

  const handleClick = () => console.log('CLICK');
  return (
    <Box sx={preloadStyles.container}>
      <AccordionPanel sx={preloadStyles.accordion}>
        <AccordionPanel.Summary id={1} title='Tipo de movimiento'>
          <MainButton
            text='Añadir registro'
            textColor='common.white'
            color='secondary'
            variant='contained'
            size='medium'
            endIcon={<AddIcon sx={{ color: 'white' }} />}
            handleClick={handleClick}
            sx={{ textTransform: "none", borderRadius: 10, width: "10%", height: "90%", marginRight: "5%" }}
            textSx={{ fontWeight: "bold", fontSize: 14 }}
          />
        </AccordionPanel.Summary>
        <AccordionPanel.Details>
          <AccordionGrid
            rows={preloadRows}
            columns={preloadColumns} />
        </AccordionPanel.Details>
      </AccordionPanel>
      <AccordionPanel id={2} title='Estatus' sx={preloadStyles.accordion}>
        <AccordionPanel.Summary id={2} title='Estatus'>
          <MainButton
            text='Añadir registro'
            textColor='common.white'
            color='secondary'
            variant='contained'
            size='medium'
            endIcon={<AddIcon sx={{ color: 'white' }} />}
            handleClick={handleClick}
            sx={{ textTransform: "none", borderRadius: 10, width: "10%", height: "90%", marginRight: "5%" }}
            textSx={{ fontWeight: "bold", fontSize: 14 }}
          />
        </AccordionPanel.Summary>
        <AccordionPanel.Details>
          <AccordionGrid
            rows={preloadRows}
            columns={preloadColumns} />
        </AccordionPanel.Details>
      </AccordionPanel>
      <AccordionPanel id={3} title='Sucursales' sx={preloadStyles.accordion}>
        <AccordionPanel.Summary id={3} title='Sucursales'>
          <MainButton
            text='Añadir registro'
            textColor='common.white'
            color='secondary'
            variant='contained'
            size='medium'
            endIcon={<AddIcon sx={{ color: 'white' }} />}
            handleClick={handleClick}
            sx={{ textTransform: "none", borderRadius: 10, width: "10%", height: "90%", marginRight: "5%" }}
            textSx={{ fontWeight: "bold", fontSize: 14 }}
          />
        </AccordionPanel.Summary>
        <AccordionPanel.Details>
          <AccordionGrid
            rows={preloadRows}
            columns={preloadColumns} />
        </AccordionPanel.Details>
      </AccordionPanel>
    </Box>
  )
}

export default PreloadCatalog;