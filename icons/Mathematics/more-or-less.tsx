import * as React from "react";
import type { SVGProps } from "react";

interface MoreOrLessIconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const MoreOrLessIcon = (props: MoreOrLessIconProps) => {
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
        <path d="M4 12H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M20 6.99972L7.00316 7C5.18197 7 4.27137 7 4.04476 6.38268C3.81814 5.76537 4.46203 5.03884 5.7498 3.58579L6.26896 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 17.0003L16.9968 17C18.818 17 19.7286 17 19.9552 17.6173C20.1819 18.2346 19.538 18.9612 18.2502 20.4142L17.731 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </>
  );
};

export default MoreOrLessIcon;
