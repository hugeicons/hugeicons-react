import * as React from "react";
import type { SVGProps } from "react";

interface DirectionRight01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DirectionRight01Icon = (props: DirectionRight01IconProps) => {
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
        <path d="M17.8516 5.67914C17.1736 4.85343 16.8345 4.44058 16.3711 4.22029C15.9076 4 15.378 4 14.3189 4H9V11H14.3189C15.378 11 15.9076 11 16.3711 10.7797C16.8345 10.5594 17.1736 10.1466 17.8516 9.32086L18.1202 8.99376C18.7067 8.27951 19 7.92239 19 7.5C19 7.07761 18.7067 6.72048 18.1202 6.00624L17.8516 5.67914Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 3L9 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 21H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DirectionRight01Icon;
