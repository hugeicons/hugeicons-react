import * as React from "react";
import type { SVGProps } from "react";

interface PinLocation01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const PinLocation01Icon = (props: PinLocation01IconProps) => {
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
        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 11L12 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15.847 16C17.4943 18.113 18.3179 19.1695 17.8865 20.006C17.8466 20.0832 17.7999 20.1578 17.7469 20.229C17.1723 21 15.6875 21 12.7178 21H11.2822C8.31251 21 6.82765 21 6.25311 20.229C6.20005 20.1578 6.15339 20.0832 6.11355 20.006C5.68206 19.1695 6.50571 18.113 8.15301 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default PinLocation01Icon;
