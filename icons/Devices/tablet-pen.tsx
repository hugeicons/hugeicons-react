import * as React from "react";
import type { SVGProps } from "react";

interface TabletPenIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TabletPenIcon = (props: TabletPenIconProps) => {
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
        <path d="M2 12C2 7.75736 2 5.63604 3.31802 4.31802C4.63604 3 6.75736 3 11 3H13C17.2426 3 19.364 3 20.682 4.31802C22 5.63604 22 7.75736 22 12C22 16.2426 22 18.364 20.682 19.682C19.364 21 17.2426 21 13 21H11C6.75736 21 4.63604 21 3.31802 19.682C2 18.364 2 16.2426 2 12Z" stroke="black" strokeWidth="1.5" />
        <path d="M6.5 3V21" stroke="black" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M17.0058 8.88441L17.614 9.49021C18.1286 10.0028 18.1286 10.8338 17.6141 11.3463L14.4275 14.5799C14.1768 14.8296 13.8561 14.9979 13.5077 15.0627L11.5327 15.4898C11.2209 15.5572 10.9432 15.2814 11.01 14.9706L11.4304 13.0148C11.4955 12.6677 11.6645 12.3483 11.9151 12.0987L15.1423 8.88441C15.6569 8.37186 16.4912 8.37186 17.0058 8.88441Z" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default TabletPenIcon;
