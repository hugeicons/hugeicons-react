import * as React from "react";
import type { SVGProps } from "react";

interface CircleLockAdd01IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const CircleLockAdd01Icon = (props: CircleLockAdd01IconProps) => {
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
        <path d="M16.5 22L16.5 14M12.5 18H20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10.6748 21.9979C6.64007 22.0953 3.5 18.8058 3.5 14.999C3.5 11.1335 6.69664 8 10.6399 8C13.0662 8 15.2098 9.18634 16.5 10.9995" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M15 9V6.5C15 4.01472 12.9853 2 10.5 2C8.01472 2 6 4.01472 6 6.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default CircleLockAdd01Icon;
