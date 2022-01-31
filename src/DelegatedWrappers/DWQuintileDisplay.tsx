import React from 'react';
import QuintileDisplay from 'Molecules/QuintileDisplay'
import 'assets/styles/pages/App.css';
import { IDQuintile } from 'Delegates/Quintile/IDQuintile';

interface DQQuintileWrapperProps {
  delegate: IDQuintile
}

function DWQuintileDisplay({delegate}: DQQuintileWrapperProps) {
  return (
    <QuintileDisplay
      quintile={delegate.getQuintile()}
    />
  );
}

export default DWQuintileDisplay;
