import * as React from "react";
import type { SVGProps } from "react";

interface Ppt01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Ppt01Icon = (props: Ppt01IconProps) => {
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
        <path d="M3.5 13V12.1963C3.5 9.22889 3.5 7.7452 3.96894 6.56021C4.72281 4.65518 6.31714 3.15252 8.33836 2.44198C9.59563 2 11.1698 2 14.3182 2C16.1173 2 17.0168 2 17.7352 2.25256C18.8902 2.65858 19.8012 3.51725 20.232 4.60584C20.5 5.28297 20.5 6.13079 20.5 7.82643V12.0142V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 12C3.5 10.1591 4.99238 8.66667 6.83333 8.66667C7.49912 8.66667 8.28404 8.78333 8.93137 8.60988C9.50652 8.45576 9.95576 8.00652 10.1099 7.43136C10.2833 6.78404 10.1667 5.99912 10.1667 5.33333C10.1667 3.49238 11.6591 2 13.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 22V16.7C3.5 16.3134 3.8134 16 4.2 16H5.23289C6.00653 16 6.79553 16.4316 6.89433 17.1989C6.92008 17.3989 6.91996 17.5936 6.89413 17.7937C6.79462 18.5645 6.00323 19 5.22608 19H4M10 22V16.7C10 16.3134 10.3134 16 10.7 16H11.8772C12.5745 16 13.2988 16.3418 13.455 17.0214C13.5227 17.3157 13.521 17.5982 13.4524 17.9019C13.2907 18.6179 12.5428 19 11.8088 19H11M16.5 16H18.5M18.5 16H20.5M18.5 16V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Ppt01Icon;
