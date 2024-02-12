import * as React from "react";
import type { SVGProps } from "react";

interface LighthouseIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const LighthouseIcon = (props: LighthouseIconProps) => {
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
        <path d="M10.0195 8C9.32545 7.06743 8.14285 5.76203 8.60385 4.47631C8.91057 3.62086 11.0067 2 12 2C12.9933 2 15.0894 3.62086 15.3962 4.47631C15.8572 5.76203 14.6745 7.06743 13.9805 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 8H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M8 13H16" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7.5 18H16.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9.5 8L7 22M14.5 8L17 22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 22H19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 7.5L21 7M19 10.5L21 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5 7.5L3 7M5 10.5L3 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default LighthouseIcon;
