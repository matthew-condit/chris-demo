import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const FEATURES = {
    Processor: [
      {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700,
        id: 1,
      },
      {
        name: 'Professor X AMD Fire Breather with sidewinder technology',
        cost: 1200,
        id: 2,
      }
    ],
    "Operating System": [
      {
        name: 'Ubuntu Linux 16.04',
        cost: 200,
        id: 43,
      },
      {
        name: 'Bodhi Linux',
        cost: 300,
        id: 55,
      }
    ],
    "Video Card": [
      {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98,
        id: 88,
      },
      {
        name: 'Mind mild breeze 2000',
        cost: 1345,
        id: 1234,
      }
    ],
    Display: [
      {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500,
        id: 99,
      },
      {
        name: '15.3" HGTV (3840 x 2160) Home makeover edition',
        cost: 1400,
        id: 100,
      },
    ]
  };


ReactDOM.render(<App store={FEATURES}/>, document.getElementById('root'));
