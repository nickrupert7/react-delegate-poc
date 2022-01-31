import React from 'react';
import 'assets/styles/pages/App.css';

interface QuintileDisplayProps {
  quintile: number;
}

function QuintileDisplay(props: QuintileDisplayProps) {
  return (
    <p>Quintile: <span>{props.quintile}</span></p>
  );
}

export default QuintileDisplay;
