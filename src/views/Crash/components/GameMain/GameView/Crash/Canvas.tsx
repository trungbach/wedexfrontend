import React, { useRef, useEffect } from 'react';

const Canvas = (props) => {
  const { draw, startTime, ...rest } = props;
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    let animationFrameId;

    const render = () => {
      const currentTime = Date.now() - startTime;
      draw(context, currentTime);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [draw, startTime]);

  return <canvas ref={canvasRef} {...rest} />;
};

export default Canvas;
