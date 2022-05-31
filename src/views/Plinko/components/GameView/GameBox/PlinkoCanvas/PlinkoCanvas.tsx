import React from 'react';
import styled from 'styled-components';
import SketchComp from './Sketch';

interface Props {
  start?: boolean;
}

const PlinkoCanvas: React.FC<Props> = () => {
  return (
    <div>
      <SketchComp />
    </div>
  );
}
export default PlinkoCanvas;