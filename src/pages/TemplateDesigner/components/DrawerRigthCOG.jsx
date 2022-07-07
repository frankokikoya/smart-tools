import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import DrawerRight from './DrawerRight';
import TableDetail from './TableDetail';

const DrawerRigthCOG = () => {
  const [creditType, setCreditType] = useState(0);

  const hanldeClickCreditType = (event) => setCreditType(event.target.value);

  return (
    <DrawerRight>
      <DrawerRight.Section title='DATOS GENERALES' >
        <DrawerRight.Content>
          <FormControl sx={{ width: '65%' }}>
            <Typography
              gutterBottom
              component='label'
              htmlFor='cot-input'
              sx={{ color: '#2C4154', fontWeight: 'bold' }}>
              Nombre del cotizador
            </Typography>
            <OutlinedInput id='cot-input' placeholder='Crediauto' />
          </FormControl>
          <FormControl sx={{ width: '30%' }}>
            <Typography
              gutterBottom
              component='label'
              htmlFor='cot-pref'
              sx={{ color: '#2C4154', fontWeight: 'bold' }}>
              Prefijo Folio
            </Typography>
            <OutlinedInput
              id='cot-pref'
              placeholder='Max. 4 char.' />
          </FormControl>
        </DrawerRight.Content>
        <DrawerRight.Content>
          <FormControl sx={{ width: '100%' }}>
            <Typography
              gutterBottom
              component='label'
              htmlFor='cot-desc'
              sx={{ color: '#2C4154', fontWeight: 'bold' }}>
              Descripción
            </Typography>
            <OutlinedInput
              id='cot-desc'
              placeholder='Añade una descripción que te ayude a identificar este producto. El cliente final no la visualizará'
              multiline
              rows={3} />
          </FormControl>
        </DrawerRight.Content>
      </DrawerRight.Section>
      <DrawerRight.Section title='CRÉDITO Y AMORTIZACIÓN' >
        <DrawerRight.Content>
          <FormControl sx={{ width: '100%' }}>
            <Typography
              gutterBottom
              component='label'
              htmlFor='credit-type-label'
              sx={{ color: '#2C4154', fontWeight: 'bold' }}>
              Tipo de crédito
            </Typography>
            <Select
              labelId='credit-type-label'
              id='credit-type'
              value={creditType}
              onChange={hanldeClickCreditType}
            >
              <MenuItem value={0}>
                <em style={{ color: '#898A8E' }}>Elige</em>
              </MenuItem>
              <MenuItem value={10}>Opción 1</MenuItem>
              <MenuItem value={21}>Opción 2</MenuItem>
              <MenuItem value={22}>Opción 3</MenuItem>
            </Select>
          </FormControl>
          <Stack direction='row' spacing={1} sx={{ mt: 2 }}>
            <Chip label='Opción 1' onDelete={() => console.log('Código 1')} />
            <Chip label='Opción 2' onDelete={() => console.log('Código 2')} />
          </Stack>
        </DrawerRight.Content>
        <DrawerRight.Content>
          <FormControl sx={{ width: '100%' }}>
            <Typography
              gutterBottom
              component='label'
              htmlFor='amort-label'
              sx={{ color: '#2C4154', fontWeight: 'bold' }}>
              Amortización
            </Typography>
            <Select
              labelId='amort-label'
              id='amort'
              value={creditType}
              onChange={hanldeClickCreditType}
            >
              <MenuItem value={0}>
                <em style={{ color: '#898A8E' }}>Seleccionar</em>
              </MenuItem>
              <MenuItem value={10}>Opción 1</MenuItem>
              <MenuItem value={21}>Opción 2</MenuItem>
              <MenuItem value={22}>Opción 3</MenuItem>
            </Select>
          </FormControl>
          <Stack direction='row' spacing={1} sx={{ mt: 2 }}>
            <Chip label='Opción 1' onDelete={() => console.log('Código 1')} />
            <Chip label='Opción 2' onDelete={() => console.log('Código 2')} />
          </Stack>
        </DrawerRight.Content>
      </DrawerRight.Section>
      <DrawerRight.Section title='CONEXIÓN A PLANES'>
        <DrawerRight.Content>
          <FormControl sx={{ width: '100%' }}>
            <Typography
              gutterBottom
              component='label'
              htmlFor='plan-type-label'
              sx={{ color: '#2C4154', fontWeight: 'bold' }}>
              Plan
            </Typography>
            <Select
              labelId='plan-type-label'
              id='plan-type'
              value={creditType}
              onChange={hanldeClickCreditType}
            >
              <MenuItem value={0}>
                <em style={{ color: '#898A8E' }}>Elige</em>
              </MenuItem>
              <MenuItem value={10}>Opción 1</MenuItem>
              <MenuItem value={21}>Opción 2</MenuItem>
              <MenuItem value={22}>Opción 3</MenuItem>
            </Select>
          </FormControl>
          <TableDetail>
            <TableDetail.Header
              title='Detalles del plan:' />
            <Box sx={{ display: 'flex' }}>
              <TableDetail.Item
                width='50%'
                text='Tasa de IVA: 16%' />
              <TableDetail.Item
                width='50%'
                text='Valor residual: 16%' />
            </Box>
            <Box sx={{ display: 'flex' }}>
              <TableDetail.Item
                width='50%'
                text='Tasa de interés: 5 al 10%' />
              <TableDetail.Item
                width='50%'
                text='Valor Residual Interno: 16%' />
            </Box>
            <Box sx={{ display: 'flex' }}>
              <TableDetail.Item
                width='50%'
                text='Calendario: Meses de 30 días' />
              <TableDetail.Item
                width='50%'
                text='Valor Residual Extra: 16%' />
            </Box>
            <TableDetail.Header
              title='Comisiones y garantías:' />
            <Box sx={{ display: 'flex' }}>
              <TableDetail.Item
                width='100%'
                text='Financiamiento, 3% interés | Inicio del período, % monto' />
            </Box>
            <Box sx={{ display: 'flex' }}>
              <TableDetail.Item
                width='100%'
                text='Otracomisión, 3% base otra cosa | Inicio del período, etc.' />
            </Box>
          </TableDetail>
        </DrawerRight.Content>
      </DrawerRight.Section>
      <DrawerRight.Section title='APLICAR CAMBIOS'>
        <DrawerRight.Content>
          <Button
            variant='outlined'
            sx={{ width: '100%' }}>
            Aplicar
          </Button>
        </DrawerRight.Content>
      </DrawerRight.Section>
    </DrawerRight>
  )
}

export default DrawerRigthCOG;