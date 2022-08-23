import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useDrag } from 'react-dnd';

import { typeColumn } from '../../data/DrawerItems';

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip
      PopperProps={{
        modifiers: [
          {
            name: "offset",
            options: {
              offset: [0, -12],
            },
          },
        ],
      }}
      componentsProps={{
        tooltip: {
          sx: {
            m: 0,
            color: '#BCD500',
            bgcolor: 'transparent',
            fontSize: '20px',
            fontWeight: 'bold'
          },
        },
      }}
      enterTouchDelay={0}
      placement='bottom'
      open={true}
      title={value}>
      {children}
    </Tooltip>
  );
}

const SliderToDrag = ({ label, min, max, exp }) => {
  const [valueSlider, setValueSlider] = useState(min);

  const handleSliderValue = (event, newValue) => {
    setValueSlider(newValue);
  };

  const [, drag] = useDrag(() => ({
    type: typeColumn.SLIDER,
    item: () => {
      return {
        type: typeColumn.SLIDER,
        label,
        min,
        max,
        value: valueSlider,
        exp
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }), [min, max, valueSlider, exp]);

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
        {label}
      </Typography>
      <Grid
        sx={{ p: 2 }}
        container
        spacing={2}
        alignItems='center' >
        <Grid item xs={12}>
          <Slider
            sx={{
              color: '#BCD500',
              '& .MuiSlider-rail': {
                opacity: 0.5,
                backgroundColor: '#898A8E',
              },
            }}
            aria-labelledby='input-slider'
            min={min}
            max={max}
            value={valueSlider}
            onChange={handleSliderValue}
            valueLabelDisplay='on'
            components={{
              ValueLabel: ValueLabelComponent
            }}
          />
        </Grid>
      </Grid>
    </Box>
  )
}

export default SliderToDrag;