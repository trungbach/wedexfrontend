import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M5.5 12.25C3.55 12.25 2 13.8 2 15.75C2 17.7 3.55 19.25 5.5 19.25C7.45 19.25 9 17.7 9 15.75C9 13.8 7.45 12.25 5.5 12.25ZM5.5 18.25C4.10001 18.25 2.99999 17.15 2.99999 15.75C2.99999 14.35 4.10001 13.25 5.5 13.25C6.89999 13.25 8.00001 14.35 8.00001 15.75C7.99996 17.15 6.89999 18.25 5.5 18.25Z"/>
      <path d="M5.50002 18.25C2.44999 18.25 0 20.7 0 23.75H0.999985C0.999985 21.25 3.00001 19.25 5.49997 19.25C7.99993 19.25 9.99995 21.25 9.99995 23.75H10.9999C11 20.7 8.55 18.25 5.50002 18.25Z"/>
      <path d="M18.5001 12.25C16.5501 12.25 15.0001 13.8 15.0001 15.75C15.0001 17.7 16.5501 19.25 18.5001 19.25C20.4501 19.25 22.0001 17.7 22.0001 15.75C22.0001 13.8 20.4501 12.25 18.5001 12.25ZM18.5001 18.25C17.1001 18.25 16 17.15 16 15.75C16 14.35 17.1 13.25 18.5001 13.25C19.9001 13.25 21.0001 14.35 21.0001 15.75C21 17.15 19.9 18.25 18.5001 18.25Z"/>
      <path d="M18.5 18.25C15.45 18.25 13 20.7 13 23.75H14C14 21.25 16 19.25 18.5 19.25C20.9999 19.25 23 21.25 23 23.75H23.9999C24 20.7 21.55 18.25 18.5 18.25Z"/>
      <path d="M12 0.249992C10.05 0.249992 8.5 1.79999 8.5 3.74999C8.5 5.69999 10.05 7.24999 12 7.24999C13.95 7.24999 15.5 5.69999 15.5 3.74999C15.5 1.79999 13.95 0.249992 12 0.249992ZM12 6.25001C10.6 6.25001 9.49998 5.14998 9.49998 3.74999C9.49998 2.35 10.6 1.24998 12 1.24998C13.4 1.24998 14.5 2.35 14.5 3.74999C14.5 5.14998 13.4 6.25001 12 6.25001Z"/>
      <path d="M12 6.25002C8.94999 6.25002 6.5 8.70001 6.5 11.75H7.49999C7.49999 9.25002 9.50001 7.25005 12 7.25005C14.4999 7.25005 16.5 9.25007 16.5 11.75H17.4999C17.5 8.70001 15.05 6.25002 12 6.25002Z"/>
    </Svg>
  );
};

export default Icon;