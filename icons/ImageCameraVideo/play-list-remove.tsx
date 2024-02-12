import * as React from "react";
import type { SVGProps } from "react";

interface PlayListRemoveIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PlayListRemoveIcon = (props: PlayListRemoveIconProps) => {
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
        <path d="M2 7H21" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16.5 2L13.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9.5 2L6.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11.5 21C7.02166 21 4.78249 21 3.39124 19.6088C2 18.2175 2 15.9783 2 11.5C2 7.02166 2 4.78249 3.39124 3.39124C4.78249 2 7.02166 2 11.5 2C15.9783 2 18.2175 2 19.6088 3.39124C21 4.78249 21 7.02166 21 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 15L18.5 18.5M18.5 18.5L22 22M18.5 18.5L15 22M18.5 18.5L22 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default PlayListRemoveIcon;
