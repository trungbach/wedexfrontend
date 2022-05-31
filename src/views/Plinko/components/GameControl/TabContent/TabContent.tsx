import React from 'react';
import { TabControl } from '../../../types';

interface Props {
  id: TabControl;
  activeIndex: TabControl;
  children: React.ReactElement[];
}

const TabContent: React.FC<Props> = ({ id, activeIndex, children }) => {
  if (id !== activeIndex) {
    return null;
  }
  return (
    children as JSX.Element
  )
}
export default TabContent;