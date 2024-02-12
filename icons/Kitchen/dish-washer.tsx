import * as React from "react";
import type { SVGProps } from "react";

interface DishWasherIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const DishWasherIcon = (props: DishWasherIconProps) => {
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
        <path d="M2 6C2 2.69067 2.69067 2 6 2H18C21.3093 2 22 2.69067 22 6V18C22 21.3093 21.3093 22 18 22H6C2.69067 22 2 21.3093 2 18V6Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2 8H22" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 5H9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M19 5.00895V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 18C10.6569 18 12 16.6569 12 15C12 13.3431 10.6569 12 9 12C7.34315 12 6 13.3431 6 15C6 16.6569 7.34315 18 9 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.0029 17.9979V15.5535M15.0029 15.5535V11.9937C15.6727 12.0769 16.4389 12.3946 16.7877 12.7372C17.1365 13.0798 17.1462 13.5189 17.2682 14.0652C17.3941 14.6294 17.5152 15.1606 17.494 15.2482C17.4679 15.8382 15.0948 15.5575 15.0029 15.5535Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default DishWasherIcon;
