import * as React from "react";
import type { SVGProps } from "react";

interface FileVideoIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const FileVideoIcon = (props: FileVideoIconProps) => {
  const animationName = props.animate ? 'spinAnimation' : '';

  return (
    <>
      <style>
        {`
          @keyframes ${animationName} {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        viewBox="0 0 24 24"
        width={props.size || 24}
        height={props.size || 24}
        fill={"none"}
        {...props}
        style={{
          ...props.style,
          animation: props.animate ? `${animationName} 2s linear infinite` : undefined,
          transform: `rotate(${props.rotate || 0}deg)`,
        }}
      >
        <path d="M18.5 17.1463L18.563 17.1009C19.6208 16.3371 20.1498 15.9552 20.5749 16.1396C21 16.324 21 16.9353 21 18.1579V18.8421C21 20.0647 21 20.676 20.5749 20.8604C20.1498 21.0448 19.6208 20.6629 18.563 19.8991L18.5 19.8537M14.5 22H15C16.6499 22 17.4749 22 17.9874 21.5515C18.5 21.103 18.5 20.3812 18.5 18.9375V18.0625C18.5 16.6188 18.5 15.897 17.9874 15.4485C17.4749 15 16.6499 15 15 15H14.5C12.8501 15 12.0251 15 11.5126 15.4485C11 15.897 11 16.6188 11 18.0625V18.9375C11 20.3812 11 21.103 11.5126 21.5515C12.0251 22 12.8501 22 14.5 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 12.0142V7.82643C20 6.13079 20 5.28297 19.732 4.60583C19.3012 3.51725 18.3902 2.65858 17.2352 2.25256C16.5168 2 15.6173 2 13.8182 2C10.6698 2 9.09563 2 7.83836 2.44198C5.81714 3.15252 4.22281 4.65518 3.46894 6.56021C3 7.7452 3 9.22888 3 12.1963V14.7453C3 17.819 3 19.3559 3.8477 20.4232C4.09058 20.729 4.37862 21.0005 4.70307 21.2294C5.46329 21.7658 6.44806 21.9421 8 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12C3 10.1591 4.49238 8.66667 6.33333 8.66667C6.99912 8.66667 7.78404 8.78333 8.43137 8.60988C9.00652 8.45576 9.45576 8.00652 9.60988 7.43136C9.78333 6.78404 9.66667 5.99912 9.66667 5.33333C9.66667 3.49238 11.1591 2 13 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default FileVideoIcon;
