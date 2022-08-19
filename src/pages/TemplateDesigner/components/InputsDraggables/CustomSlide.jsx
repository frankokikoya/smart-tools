import React from 'react';

import Slider from '@mui/material/Slider';
import styled from 'styled-components';

const marks = [
    {
        value: 0,
        label: "0"
    },
    {
        value: 0.5,
        label: "0.5"
    },
    {
        value: 1,
        label: "1"
    },
    {
        value: 1.5,
        label: "1.5"
    },
    {
        value: 2,
        label: "2"
    },
    {
        value: 2.5,
        label: "2.5"
    },
    {
        value: 3,
        label: "3"
    },
    {
        value: 3.5,
        label: "3.5"
    },
    {
        value: 4,
        label: "4"
    },
    {
        value: 4.5,
        label: "4.5"
    },
    {
        value: 5,
        label: "5"
    }
];
function CustomSlider() {
    return (
        <EvalSliderModal>
            <Slider
                defaultValue={0}
                aria-labelledby='discrete-slider-custom'
                step={0.5}
                marks={marks}
                min={0}
                max={5}
                className='sliders'
            />
        </EvalSliderModal>
    );
}
export default CustomSlider;

const EvalSliderModal = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Quantico&display=swap");

  & .sliders {
    width: 50%;
    & .MuiSlider-rail {
      height: 10px;
      background: #dedede;
    }

    & .MuiSlider-mark:nth-child(n) {
      top: -7px;
      height: 30px;
      width: 3.5px;
      background: #919191;
    }
    & .MuiSlider-mark:nth-child(4n + 0) {
      top: -18px;
      height: 40px;
      width: 4px;
      background: #222;
      background: #919191;
    }

    & .MuiSlider-track {
      height: 10px;
      display: block;
      position: absolute;
      border-radius: 1px;
      color: #323232;
    }
    & .MuiSlider-thumb {
      height: 18px;
      width: 18px;
      color: limegreen;
    }

    & .MuiSlider-markActive {
      background: #111;
    }
    & .MuiSlider-markLabel {
      font: bold 12px Quantico;
      margin-top: 20px;
    }
    & .MuiSlider-markLabelActive {
      color: #32ad37;
    }
  }
`;
