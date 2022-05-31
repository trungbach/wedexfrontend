import React from 'react';
import styled from 'styled-components';

interface Props {
  symbolId: string;
}

const App: React.FC<Props> = ({ symbolId }) => {
  return (
    <svg xmlnsXlink="http://www.w3.org/1999/xlink">
      <use xlinkHref={`/images/minigame/symbol-defs.svg#${symbolId}`} />
    </svg>
    // <svg xmlnsXlink="http://www.w3.org/1999/xlink"><use xlinkHref="/images/minigame/symbol-defs.svg#icon_Trends" /></svg>
  );
}
export default App;