import * as React from "react";
import type { SVGProps } from "react";

interface AnalysisTextLinkIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const AnalysisTextLinkIcon = (props: AnalysisTextLinkIconProps) => {
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
        <path d="M21 21H10C6.70017 21 5.05025 21 4.02513 19.9749C3 18.9497 3 17.2998 3 14V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 4H8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 7H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 20C6.07093 18.053 7.52279 13.0189 10.3063 13.0189C12.2301 13.0189 12.7283 15.4717 14.6136 15.4717C17.8572 15.4717 17.387 10 21 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default AnalysisTextLinkIcon;
