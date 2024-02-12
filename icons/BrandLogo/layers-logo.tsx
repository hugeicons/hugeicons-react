import * as React from "react";
import type { SVGProps } from "react";

interface LayersLogoIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LayersLogoIcon = (props: LayersLogoIconProps) => {
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
        <path d="M9.87868 20.1213C10.7574 21 12.1716 21 15 21C17.8284 21 19.2426 21 20.1213 20.1213C21 19.2426 21 17.8284 21 15C21 12.1716 21 10.7574 20.1213 9.87868C19.2426 9 17.8284 9 15 9C12.1716 9 10.7574 9 9.87868 9.87868C9 10.7574 9 12.1716 9 15C9 17.8284 9 19.2426 9.87868 20.1213Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M17.9239 9C17.828 8.02491 17.6112 7.36857 17.1213 6.87868C16.2426 6 14.8284 6 12 6C9.17157 6 7.75736 6 6.87868 6.87868C6 7.75736 6 9.17157 6 12C6 14.8284 6 16.2426 6.87868 17.1213C7.36857 17.6112 8.02491 17.828 9 17.9239" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.9239 6C14.828 5.02491 14.6112 4.36857 14.1213 3.87868C13.2426 3 11.8284 3 9 3C6.17157 3 4.75736 3 3.87868 3.87868C3 4.75736 3 6.17157 3 9C3 11.8284 3 13.2426 3.87868 14.1213C4.36857 14.6112 5.02491 14.828 6 14.9239" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default LayersLogoIcon;
