import React from 'react';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import { useDrag } from 'react-dnd';
import styled from 'styled-components';

import { typeColumn } from '../../data/DrawerItems';

const sliderMarks = [
  { value: 10000 },
  { value: 15000, label: '$10,000' },
  { value: 20000 },
  { value: 25000 },
  { value: 30000 },
  { value: 35000 },
  { value: 40000 },
  { value: 45000 },
  { value: 50000 },
  { value: 55000, label: '$60,000' },
  { value: 60000 },
];

const SliderToDrag = () => {
  const [, drag] = useDrag(() => ({
    type: typeColumn.SLIDER,
    item: () => {
      return {
        type: typeColumn.SLIDER,
        label: '¿Cuánto deseas agregar de renta extraordinaria?*',
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }), []);

  return (
    <Box
      ref={drag}
      sx={{
        p: 2,
        mt: 3,
        boxShadow: 2,
        backgroundColor: 'white',
        cursor: 'move',
        '&:hover': {
          border: '2px solid #64b5f6'
        }
      }}>
      <Typography
        gutterBottom
        id='input-slider'
        sx={{ color: '#2C4154', fontWeight: 'bold' }}>
        ¿Cuánto deseas agregar de renta extraordinaria?*
      </Typography>
      <Grid container spacing={2} alignItems='center'>
        <Grid item xs={3}>
          <FormControl sx={{ width: '100%' }}>
            <OutlinedInput
              //id={`${item.id}`}
              type='number'
              size='small'
              value={3000}
              //onChange={handleChange}
              inputProps={{ min: 1, max: 3 }} />
          </FormControl>
        </Grid>
        <Grid item xs={9} sx={{ p: 1 }}>
          <EvalSliderModal>
            <Slider
              className='sliders'
              value={35000}
              //onChange={handleSliderChange}
              marks={sliderMarks}
              aria-labelledby='input-slider'
              color='secondary'
              min={10000}
              max={60000}
              step={5000}
            />
          </EvalSliderModal>
        </Grid>
      </Grid>
    </Box>
  )
}

export default SliderToDrag;

const EvalSliderModal = styled.div`
  & .sliders {
    & .MuiSlider-mark:nth-child(n) {
      top: 90%;
      height: 10px;
      width: 1px;
      background: #bfbfbf;
    }
    & .MuiSlider-mark:nth-child(3n) {
      top: 110%;
      height: 20px;
      width: 1px;
      background: #bfbfbf;
    }
    & .MuiSlider-markActive {
      background: #111;
    }
    & .MuiSlider-markLabel {
      margin-top: 12px;
    }
    & .MuiSlider-markLabelActive {
      font: bold;
    }
  }
`;

/**
 *  & .MuiSlider-mark:nth-child(9) {
      top: 110%;
      height: 20px;
      width: 1px;
      background: #bfbfbf;
    }
    & .MuiSlider-mark:nth-child(15) {
      top: 110%;
      height: 20px;
      width: 1px;
      background: #bfbfbf;
    }
 */