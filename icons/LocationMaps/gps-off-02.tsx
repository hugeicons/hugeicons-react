import * as React from "react";
import type { SVGProps } from "react";

interface GpsOff02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const GpsOff02Icon = (props: GpsOff02IconProps) => {
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
        <path d="M20.5137 12C20.5137 16.6944 16.7081 20.5 12.0137 20.5C7.31925 20.5 3.51367 16.6944 3.51367 12C3.51367 7.30558 7.31925 3.5 12.0137 3.5C16.7081 3.5 20.5137 7.30558 20.5137 12Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M15.0002 9L9.00019 15M15.0002 15L9.00019 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22.5 12H20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3.5 12H1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 1.5L12 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 20.5V22.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default GpsOff02Icon;
