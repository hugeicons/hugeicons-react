import * as React from "react";
import type { SVGProps } from "react";

interface BitcoinIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const BitcoinIcon = (props: BitcoinIconProps) => {
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
        <path d="M6 4H14.4C16.3882 4 18 5.79086 18 8C18 10.2091 16.3882 12 14.4 12M14.4 12C16.3882 12 18 13.7909 18 16C18 18.2091 16.3882 20 14.4 20H6M14.4 12H7.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 4V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 2L9 4M14 2V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 20L9 22M14 20V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default BitcoinIcon;
