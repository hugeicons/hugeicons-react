import * as React from "react";
import type { SVGProps } from "react";

interface EthereumIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const EthereumIcon = (props: EthereumIconProps) => {
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
        <path d="M19 12L13.2404 14.5785C12.6289 14.8595 12.3232 15 12 15C11.6768 15 11.3711 14.8595 10.7596 14.5785L5 12M19 12C19 11.4678 18.6945 10.9997 18.0834 10.0636L14.5797 4.69611C13.4064 2.8987 12.8197 2 12 2C11.1803 2 10.5936 2.8987 9.42033 4.69611L5.91663 10.0636C5.30554 10.9997 5 11.4678 5 12M19 12C19 12.5322 18.6945 13.0003 18.0834 13.9364L14.5797 19.3039C13.4064 21.1013 12.8197 22 12 22C11.1803 22 10.5936 21.1013 9.42033 19.3039L5.91663 13.9364C5.30554 13.0003 5 12.5322 5 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default EthereumIcon;
