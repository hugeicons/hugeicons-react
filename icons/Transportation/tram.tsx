import * as React from "react";
import type { SVGProps } from "react";

interface TramIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const TramIcon = (props: TramIconProps) => {
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
        <path d="M5 2H14M19 2H14M14 2L12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 20L7 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 20L17 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 13V12C5 8.70017 5 7.05025 6.02513 6.02513C7.05025 5 8.70017 5 12 5C15.2998 5 16.9497 5 17.9749 6.02513C19 7.05025 19 8.70017 19 12V13C19 16.2998 19 17.9497 17.9749 18.9749C16.9497 20 15.2998 20 12 20C8.70017 20 7.05025 20 6.02513 18.9749C5 17.9497 5 16.2998 5 13Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M5 14C5 14 8.26667 15 12 15C15.7333 15 19 14 19 14" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M16.5 17H18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5.5 8H18.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5.5 17H7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default TramIcon;
