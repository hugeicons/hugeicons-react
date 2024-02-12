import * as React from "react";
import type { SVGProps } from "react";

interface Sad02IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
  rotate?: number;
  animate?: boolean;
}

const Sad02Icon = (props: Sad02IconProps) => {
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
        <path d="M9.5 21.685C10.299 21.8906 11.1368 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 12.3375 2.01672 12.6711 2.04938 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.02108 14L2.8602 16.0826C1.69974 17.2204 1.71976 19.0523 2.88023 20.1707C4.06071 21.2892 5.96146 21.2699 7.12193 20.1515C8.30241 19.0137 8.2824 17.1818 7.12193 16.0633L5.02108 14Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M8.00897 8.44238H8M16 8.44238H15.991" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 16C14.1644 15.3721 13.1256 15 12 15C11.0893 15 10.2354 15.2436 9.5 15.6692" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </>
  );
};

export default Sad02Icon;
