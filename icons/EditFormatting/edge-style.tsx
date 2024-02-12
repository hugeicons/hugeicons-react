import * as React from "react";
import type { SVGProps } from "react";

interface EdgeStyleIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const EdgeStyleIcon = (props: EdgeStyleIconProps) => {
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
        <path d="M3 6H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 10H10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13.5 10L21 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 14H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 14H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17 14H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 18H5.11765M8.29412 18H10.4118M13.5882 18H15.7059M18.8824 18H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default EdgeStyleIcon;
