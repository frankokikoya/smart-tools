import React, { useContext, useEffect, useState } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Slider from '@mui/material/Slider';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useDrag } from 'react-dnd';

import { kFormatter } from '../../../../utilities/k-format';
import DesignerContext from '../../context/DesignerContext';
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
              offset: [0, -20],
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
            fontSize: '15px',
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

function valuetext(value, exp) {
  const valueText = exp === '$'
    ? `$${value > 999 ? kFormatter(value) : value}` : `${value}%`;
  return valueText;
}

const SliderDrag = ({ item, index, parent }) => {
  const {
    deletedContent,
    selectedRow,
    setComponentsUsed,
    minMax,
    radio
  } = useContext(DesignerContext);

  const [isShown, setIsShown] = useState(false);
  const [valueSlider, setValueSlider] = useState(item.value);

  const handleDragging = () => {
    return !selectedRow?.id;
  };

  const handleSliderValue = (event, newValue) => {
    setValueSlider(newValue);
  };

  const [, drag] = useDrag(() => ({
    type: typeColumn.SLIDER,
    item: () => {
      return {
        id: item.id,
        index,
        action: 'LEAVE',
        fromParent: parent,
        componentId: item.componentId,
        drawer: item.drawer,
        type: typeColumn.SLIDER,
        label: item.label,
        min: item.min,
        max: item.max,
        value: valueSlider,
        exp: item.exp
      }
    },
    canDrag: handleDragging,
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  }), [item, selectedRow, valueSlider]);

  const deleteComponent = () => {
    setComponentsUsed((prev) => [
      ...prev.filter((cu) => cu.componentId !== item.componentId)
    ]);

    deletedContent({
      parent,
      index,
      id: item.id,
    });
  };

  useEffect(() => {
    item.min = minMax.min;
    item.max = minMax.max;
    item.exp = radio;
    item.value = minMax.min;
  }, [item, minMax.max, minMax.min, radio]);

  return (
    <Box
      ref={drag}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
      sx={{
        m: 2,
        p: 2,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        position: 'relative',
        border: '1px dashed #D1D1D1',
        width: '100%',
        height: '6em',
      }}>
      {isShown && <IconButton
        aria-label='close-button'
        size='small'
        onClick={deleteComponent}
        sx={{
          position: 'absolute',
          top: '0px',
          right: '0px',
        }}>
        <CloseIcon sx={{ color: 'red', fontSize: 'large' }} />
      </IconButton>}
      <Typography
        gutterBottom
        component='label'
        htmlFor='pay-label'
        sx={{ color: '#2C4154', fontWeight: 'bold', fontSize: 'small', alignSelf: 'start' }}>
        {item?.label ? item.label : 'Slider'}
      </Typography>
      <Grid
        sx={{ p: 1 }}
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
            size='small'
            aria-labelledby='input-slider'
            valueLabelFormat={(value) => valuetext(value, radio)}
            step={1}
            min={minMax.min}
            max={minMax.max}
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

export default SliderDrag;